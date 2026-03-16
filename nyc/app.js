let currentView = 'categories';
let selectedArtist = null;
let score = 0;
let usedQuestions = [];

function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US'; msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
}

function hideAll() {
    ['view-categories', 'view-artists', 'view-songs', 'view-lyrics', 'view-game'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('hidden');
    });
    document.getElementById('nav-bar').classList.remove('hidden');
}

function handleBack() {
    if (currentView === 'lyrics') {
        if (selectedArtist) showSongs(selectedArtist);
        else showMain();
    } else if (currentView === 'songs') {
        showArtists();
    } else {
        showMain();
    }
}

function showMain() {
    hideAll();
    document.getElementById('view-categories').classList.remove('hidden');
    document.getElementById('nav-bar').classList.add('hidden');
    currentView = 'categories';
}

function showArtists() {
    currentView = 'artists'; hideAll();
    const container = document.getElementById('view-artists');
    container.classList.remove('hidden'); container.innerHTML = '';
    data.artists.forEach(art => {
        const div = document.createElement('div');
        div.className = 'item'; div.onclick = () => showSongs(art);
        div.innerHTML = `<span class="icon">${art.icon}</span><span class="name">${art.name}</span>`;
        container.appendChild(div);
    });
}

function showSongs(artist) {
    currentView = 'songs'; selectedArtist = artist; hideAll();
    const container = document.getElementById('view-songs');
    container.classList.remove('hidden');
    container.innerHTML = `<h2 style="text-align:center; width:100%; color:var(--ny-orange)">${artist.name}</h2>`;
    artist.songs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'item'; div.onclick = () => showLyrics(song);
        div.innerHTML = `<span class="icon">🎵</span><span class="name">${song.title}</span>`;
        container.appendChild(div);
    });
}

function showLyrics(song) {
    currentView = 'lyrics'; hideAll();
    const container = document.getElementById('view-lyrics');
    container.classList.remove('hidden');
    container.innerHTML = `<h2 style="text-align:center; color:var(--ny-blue)">${song.title}</h2>`;
    song.lyrics.forEach(line => {
        const div = document.createElement('div');
        div.className = 'verse-card'; div.onclick = () => speak(line.e);
        div.innerHTML = `<div class="eng">${line.e}</div><div class="pro">${line.p}</div><div class="esp">${line.s}</div><div class="audio-hint">🔊 TOCAR</div>`;
        container.appendChild(div);
    });
}

function showCategory(catId) {
    currentView = 'category_simple'; selectedArtist = null; hideAll();
    const container = document.getElementById('view-lyrics');
    container.classList.remove('hidden');
    const titles = { reactions: 'REACTIONS 🔥', danger: 'DANGER ⚠️', money: 'MONEY 💰', bodega: 'BODEGA 🥪', subway: 'SUBWAY 🚇', slang: 'DICTIONARY' };
    container.innerHTML = `<h2 style="text-align:center; text-transform:uppercase; color:var(--ny-orange)">${titles[catId] || catId}</h2>`;
    data[catId].forEach(line => {
        const div = document.createElement('div');
        div.className = 'verse-card'; div.onclick = () => speak(line.e);
        div.innerHTML = `<div class="eng">${line.e}</div><div class="pro">${line.p}</div><div class="esp">${line.s}</div>`;
        container.appendChild(div);
    });
}

// --- JUEGOS ---

function startChallenge() {
    hideAll();
    document.getElementById('view-game').classList.remove('hidden');
    currentView = 'game';
    score = 0; usedQuestions = [];
    document.getElementById('cred-score').innerText = score;
    nextGame();
}

function updateScore(points) {
    score += points; if (score < 0) score = 0;
    document.getElementById('cred-score').innerText = score;
}

function nextGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    Math.random() > 0.5 ? renderTFQuiz() : renderDragQuiz();
}

function renderTFQuiz() {
    const container = document.getElementById('game-container');
    const all = [...data.slang, ...data.reactions, ...data.money];
    let item = all[Math.floor(Math.random() * all.length)];
    
    // Evitar repetición inmediata
    if(usedQuestions.includes(item.e)) item = all[Math.floor(Math.random() * all.length)];
    usedQuestions.push(item.e);
    if(usedQuestions.length > 20) usedQuestions.shift();

    const isCorrect = Math.random() > 0.5;
    let displaySpanish = isCorrect ? item.s : all[Math.floor(Math.random() * all.length)].s;

    container.innerHTML = `
        <div class="q-text">¿"${item.e}" significa "${displaySpanish}"?</div>
        <button class="tf-btn v-btn" onclick="validateTF(${isCorrect}, true)">VERDADERO</button>
        <button class="tf-btn f-btn" onclick="validateTF(${isCorrect}, false)">FALSO</button>
    `;
}

function validateTF(correct, user) {
    if(correct === user) { alert("FACTS! ✅ +10"); updateScore(10); }
    else { alert("YOU BUGGIN' ❌ -5"); updateScore(-5); }
    nextGame();
}

function renderDragQuiz() {
    const container = document.getElementById('game-container');
    const art = data.artists[Math.floor(Math.random() * data.artists.length)];
    const song = art.songs[Math.floor(Math.random() * art.songs.length)];
    const line = song.lyrics[Math.floor(Math.random() * song.lyrics.length)];
    
    let words = line.e.split(' ');
    if(words.length < 3) return renderTFQuiz();

    const targetIndex = Math.floor(Math.random() * words.length);
    const targetWord = words[targetIndex].replace(/[.,?]/g,"");
    words[targetIndex] = "_______";
    
    container.innerHTML = `
        <div class="q-text">Completa la letra de ${art.name}:</div>
        <div style="font-style: italic; margin-bottom:20px; font-size:1.1rem;">"${words.join(' ')}"</div>
        <div class="drop-zone" id="drop-box">Arrastra aquí o haz Clic</div>
        <div class="options-flex" id="options"></div>
    `;

    let options = [targetWord];
    while(options.length < 3) {
        let rWord = data.slang[Math.floor(Math.random() * data.slang.length)].e;
        if(!options.includes(rWord)) options.push(rWord);
    }
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'drag-item'; btn.innerText = opt; btn.draggable = true;
        btn.ondragstart = (e) => e.dataTransfer.setData("text", opt);
        btn.onclick = () => validateResult(opt, targetWord);
        document.getElementById('options').appendChild(btn);
    });

    const box = document.getElementById('drop-box');
    box.ondragover = (e) => { e.preventDefault(); box.classList.add('over'); };
    box.ondragleave = () => box.classList.remove('over');
    box.ondrop = (e) => { e.preventDefault(); validateResult(e.dataTransfer.getData("text"), targetWord); };
}

function validateResult(selected, correct) {
    if(selected.toLowerCase() === correct.toLowerCase()) { alert("VALID! 🗽 +15"); updateScore(15); }
    else { alert("YOU BUGGIN' ❌ Era: " + correct); updateScore(-5); }
    nextGame();
}