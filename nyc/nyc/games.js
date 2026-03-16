let score = 0;

function startChallenge() {
    hideAll();
    document.getElementById('view-game').classList.remove('hidden');
    currentView = 'game';
    nextGame();
}

function nextGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    
    // Decidir aleatoriamente entre Quiz V/F o Drag & Drop
    Math.random() > 0.5 ? renderTFQuiz() : renderDragQuiz();
}

function updateScore(points) {
    score += points;
    if (score < 0) score = 0;
    document.getElementById('cred-score').innerText = score;
}

// JUEGO 1: VERDADERO O FALSO
function renderTFQuiz() {
    const container = document.getElementById('game-container');
    // Sacar una palabra al azar del diccionario slang
    const item = data.slang[Math.floor(Math.random() * data.slang.length)];
    const isCorrect = Math.random() > 0.5;
    let displaySpanish = item.s;
    
    if(!isCorrect) {
        const wrongItem = data.slang[Math.floor(Math.random() * data.slang.length)];
        displaySpanish = wrongItem.s;
    }

    container.innerHTML = `
        <div class="q-text">¿"${item.e}" significa "${displaySpanish}"?</div>
        <button class="tf-btn v-btn" onclick="checkTF(${isCorrect}, true)">FACTS! 💯 (VERDADERO)</button>
        <button class="tf-btn f-btn" onclick="checkTF(${isCorrect}, false)">YOU BUGGIN'! ❌ (FALSO)</button>
    `;
}

function checkTF(correctValue, userValue) {
    if(correctValue === userValue) {
        alert("¡FACTS! +10 Street Cred");
        updateScore(10);
    } else {
        alert("¡YOU BUGGIN'! -5 Street Cred");
        updateScore(-5);
    }
    nextGame();
}

// JUEGO 2: DRAG & DROP (Completar frase de canción)
function renderDragQuiz() {
    const container = document.getElementById('game-container');
    // Elegir un artista y canción al azar
    const art = data.artists[Math.floor(Math.random() * data.artists.length)];
    const song = art.songs[Math.floor(Math.random() * art.songs.length)];
    const line = song.lyrics[Math.floor(Math.random() * song.lyrics.length)];
    
    const words = line.e.split(' ');
    if(words.length < 3) return renderTFQuiz(); // Evitar líneas muy cortas

    const targetIndex = Math.floor(Math.random() * words.length);
    const targetWord = words[targetIndex].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    words[targetIndex] = "_______";
    const sentence = words.join(' ');

    container.innerHTML = `
        <div class="q-text">Completa la letra de ${art.name}:</div>
        <div style="font-style: italic; margin-bottom:20px;">"${sentence}"</div>
        <div class="drop-zone" id="drop-box">Arrastra aquí la palabra</div>
        <div class="options-flex" id="options"></div>
    `;

    // Crear opciones (la correcta + 2 falsas)
    const options = [targetWord];
    while(options.length < 3) {
        const randomWord = data.slang[Math.floor(Math.random() * data.slang.length)].e;
        if(!options.includes(randomWord)) options.push(randomWord);
    }
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'drag-item';
        div.innerText = opt;
        div.draggable = true;
        div.ondragstart = (e) => e.dataTransfer.setData("text", opt);
        div.onclick = () => checkDrag(opt, targetWord); // Soporte táctil simple
        document.getElementById('options').appendChild(div);
    });

    const dropBox = document.getElementById('drop-box');
    dropBox.ondragover = (e) => e.preventDefault();
    dropBox.ondrop = (e) => {
        const data = e.dataTransfer.getData("text");
        checkDrag(data, targetWord);
    };
}

function checkDrag(selected, correct) {
    if(selected.toLowerCase() === correct.toLowerCase()) {
        alert("¡VALID! Esa es la palabra. +15 Street Cred");
        updateScore(15);
    } else {
        alert("Nah... era: " + correct + ". -5 Street Cred");
        updateScore(-5);
    }
    nextGame();
}