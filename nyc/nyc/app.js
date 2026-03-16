// --- CONFIGURACIÓN INICIAL Y PUNTAJE ---
let score = parseInt(localStorage.getItem('streetCred')) || 0;
const scoreDisplay = document.getElementById('cred-score');
if(scoreDisplay) scoreDisplay.innerText = score;

let usedQuestions = [];
let deferredPrompt;

// --- MOTOR DE VOZ (SPEECH API) ---
function speak(text) {
    if (!text) return;
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    msg.rate = 0.85;
    msg.pitch = 1.0;
    window.speechSynthesis.speak(msg);
}

// --- SISTEMA DE NAVEGACIÓN ---
function hideAll() {
    const views = ['view-categories', 'view-content', 'view-game'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('hidden');
    });
    const nav = document.getElementById('nav-bar');
    if(nav) nav.classList.remove('hidden');
}

function handleBack() {
    // Recarga limpia para evitar errores de estado en el DOM
    window.location.reload();
}

// --- RENDERIZADO DE CATEGORÍAS (REACTIONS, DANGER, ETC) ---
function showCategory(cat) {
    hideAll();
    const container = document.getElementById('view-content');
    container.classList.remove('hidden');
    
    const items = nycData.categories[cat];
    const titles = {
        reactions: '🔥 50 REACTIONS',
        danger: '⚠️ DANGER & WARNINGS',
        money: '💰 MONEY & HUSTLE',
        bodega: '🥪 THE BODEGA',
        subway: '🚇 THE SUBWAY',
        slang: '🗽 STREET DICTIONARY'
    };

    let html = `<h2 style="text-align:center; color:var(--ny-orange); margin-bottom:25px;">${titles[cat] || cat.toUpperCase()}</h2>`;
    
    items.forEach(item => {
        // Aseguramos que la pronunciación sea completa sin puntos suspensivos
        html += `
            <div class="verse-card" onclick="speak('${item.eng.replace(/'/g, "\\'")}')">
                <div class="eng">${item.eng} <span style="font-size:0.9rem">🔊</span></div>
                <div class="pro">${item.pro}</div>
                <div class="esp">${item.esp}</div>
                <div class="audio-hint">Tocar para oír</div>
            </div>`;
    });
    container.innerHTML = html;
    window.scrollTo(0,0);
}

// --- SISTEMA DE PLAYLIST (ARTISTAS Y CANCIONES) ---
function showArtists() {
    hideAll();
    const container = document.getElementById('view-content');
    container.classList.remove('hidden');
    
    let html = `<h2 style="text-align:center; color:var(--ny-orange); margin-bottom:25px;">THE PLAYLIST</h2>`;
    html += `<div class="grid">`;
    
    nycData.artists.forEach(art => {
        html += `
            <div class="item" onclick="showSongs('${art.id}')">
                <span class="icon">${art.icon}</span>
                <span class="name">${art.name}</span>
            </div>`;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

function showSongs(artId) {
    const art = nycData.artists.find(a => a.id === artId);
    const container = document.getElementById('view-content');
    
    let html = `<h2 style="text-align:center; margin-bottom:20px;">${art.name}</h2>`;
    art.songs.forEach(song => {
        html += `
            <div class="item full" style="margin-bottom:12px; padding:20px;" onclick="showLyrics('${artId}', '${song.id}')">
                <span class="name" style="font-size:1rem;">🎵 ${song.title}</span>
            </div>`;
    });
    container.innerHTML = html;
}

function showLyrics(artId, songId) {
    const art = nycData.artists.find(a => a.id === artId);
    const song = art.songs.find(s => s.id === songId);
    const container = document.getElementById('view-content');
    
    let html = `<h2 style="text-align:center; color:var(--ny-blue); margin-bottom:20px;">${song.title}</h2>`;
    
    song.lyrics.forEach(line => {
        html += `
            <div class="verse-card" onclick="speak('${line.eng.replace(/'/g, "\\'")}')">
                <div class="eng">${line.eng} 🔊</div>
                <div class="pro">${line.pro}</div>
                <div class="esp">${line.esp}</div>
            </div>`;
    });
    container.innerHTML = html;
    window.scrollTo(0,0);
}

// --- MOTOR DE JUEGOS (STREET CHALLENGE) ---
function startChallenge() {
    hideAll();
    document.getElementById('view-game').classList.remove('hidden');
    nextGame();
}

function nextGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    // Selección aleatoria de modo de juego
    if (Math.random() > 0.5) {
        renderTF();
    } else {
        renderDrag();
    }
}

function renderTF() {
    const allItems = [...nycData.categories.slang, ...nycData.categories.reactions, ...nycData.categories.money];
    const item = allItems[Math.floor(Math.random() * allItems.length)];
    const isCorrect = Math.random() > 0.5;
    
    let displaySpanish = isCorrect ? item.esp : allItems[Math.floor(Math.random() * allItems.length)].esp;

    document.getElementById('game-container').innerHTML = `
        <div class="q-text" style="margin-top:40px;">¿"${item.eng}" significa <br><span style="color:var(--ny-blue)">"${displaySpanish}"</span>?</div>
        <div style="margin-top:50px;">
            <button class="tf-btn v-btn" onclick="validateTF(${isCorrect}, true)">VERDADERO</button>
            <button class="tf-btn f-btn" onclick="checkTF(${isCorrect}, false)">FALSO</button>
        </div>
    `;
}

function checkTF(correct, user) {
    if(correct === user) {
        alert("FACTS! ✅ +10 Street Cred");
        score += 10;
    } else {
        alert("YOU BUGGIN! ❌ -5 Street Cred");
        score -= 5;
    }
    saveAndRefresh();
}

// Alias para el botón de verdadero
function validateTF(c, u) { checkTF(c, u); }

function renderDrag() {
    const art = nycData.artists[Math.floor(Math.random() * nycData.artists.length)];
    const song = art.songs[Math.floor(Math.random() * art.songs.length)];
    const line = song.lyrics[Math.floor(Math.random() * song.lyrics.length)];
    const words = line.eng.split(' ');
    
    if(words.length < 3) return renderTF();

    const idx = Math.floor(Math.random() * words.length);
    const target = words[idx].replace(/[.,?!]/g,"");
    words[idx] = "_______";

    let html = `
        <div class="q-text">Completa la letra de ${art.name}:</div>
        <p style="font-style:italic; color:var(--text-sub); font-size:1.15rem; margin:20px 0;">"${words.join(' ')}"</p>
        <div style="border: 1px dashed var(--ny-blue); padding: 25px; border-radius: 15px; color:var(--ny-blue); font-weight:bold; margin-bottom:30px;">Toca la palabra correcta</div>
        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">`;
    
    let options = [target, nycData.categories.slang[0].eng, nycData.categories.slang[1].eng];
    options.sort(() => Math.random() - 0.5);
    
    options.forEach(opt => {
        html += `<div style="background:var(--ny-blue); color:black; padding:14px 20px; border-radius:10px; font-weight:800; cursor:pointer;" onclick="checkDrag('${opt}', '${target}')">${opt}</div>`;
    });
    
    document.getElementById('game-container').innerHTML = html + `</div>`;
}

function checkDrag(selected, correct) {
    if(selected.toLowerCase() === correct.toLowerCase()) {
        alert("VALID! 🗽 +15 Street Cred");
        score += 15;
    } else {
        alert("Nah... era: " + correct);
        score -= 5;
    }
    saveAndRefresh();
}

function saveAndRefresh() {
    if(score < 0) score = 0;
    localStorage.setItem('streetCred', score);
    const sd = document.getElementById('cred-score');
    if(sd) sd.innerText = score;
    nextGame();
}

// --- LÓGICA DE INSTALACIÓN PWA ---
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('install-banner');
    if(banner) banner.style.display = 'flex';
});

const installBtn = document.getElementById('btn-install-now');
if(installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt = null;
            document.getElementById('install-banner').style.display = 'none';
        }
    });
}