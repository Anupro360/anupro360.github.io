/**
 * NYC STREET ENGLISH PRO - APP.JS
 * VERSIÓN MAESTRA FINAL AUDITADA
 */

let score = parseInt(localStorage.getItem('streetCred')) || 0;
let currentView = 'categories';
let usedQuestions = [];
let deferredPrompt;

const scoreDisplay = document.getElementById('cred-score');
if (scoreDisplay) {
    scoreDisplay.innerText = score;
}

function speak(text) {
    if (!text) return;
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    msg.rate = 0.85;
    window.speechSynthesis.speak(msg);
}

function hideAll() {
    ['view-categories', 'view-content', 'view-game'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
    });
    const navBar = document.getElementById('nav-bar');
    if (navBar) navBar.classList.remove('hidden');
}

function handleBack() {
    window.location.reload();
}

function showCategory(cat) {
    hideAll();
    const container = document.getElementById('view-content');
    container.classList.remove('hidden');
    
    const items = nycData.categories[cat];
    if (!items) return;

    const titles = { 
        reactions: '🔥 REACTIONS', 
        danger: '⚠️ DANGER', 
        money: '💰 MONEY', 
        bodega: '🥪 BODEGA', 
        subway: '🚇 SUBWAY', 
        slang: '🗽 DICTIONARY A-Z' 
    };

    let headerHtml = `<h2 style="text-align:center; color:var(--ny-orange); margin-bottom:25px;">${titles[cat] || cat.toUpperCase()}</h2>`;
    let listHtml = '';

    items.forEach(item => {
        listHtml += `
            <div class="verse-card" onclick="speak('${item.eng.replace(/'/g, "\\'")}')">
                <div class="eng">${item.eng} <span style="font-size:0.9rem">🔊</span></div>
                <div class="pro">${item.pro}</div>
                <div class="esp">${item.esp}</div>
            </div>`;
    });

    container.innerHTML = headerHtml + listHtml;
    window.scrollTo(0, 0);
}

function showArtists() {
    hideAll();
    const container = document.getElementById('view-content');
    container.classList.remove('hidden');
    let html = `<h2 style="text-align:center; color:var(--ny-orange); margin-bottom:25px;">THE PLAYLIST</h2><div class="grid">`;
    nycData.artists.forEach(art => {
        html += `<div class="item" onclick="showSongs('${art.id}')">
                    <span class="icon">${art.icon}</span>
                    <span class="name">${art.name}</span>
                </div>`;
    });
    container.innerHTML = html + `</div>`;
}

function showSongs(artId) {
    const art = nycData.artists.find(a => a.id === artId);
    const container = document.getElementById('view-content');
    let html = `<h2 style="text-align:center; margin-bottom:20px;">${art.name}</h2>`;
    art.songs.forEach(song => {
        html += `<div class="item full" style="margin-bottom:12px; padding:20px;" onclick="showLyrics('${artId}', '${song.id}')">
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
        html += `<div class="verse-card" onclick="speak('${line.eng.replace(/'/g, "\\'")}')">
                    <div class="eng">${line.eng} 🔊</div>
                    <div class="pro">${line.pro}</div>
                    <div class="esp">${line.esp}</div>
                </div>`;
    });
    container.innerHTML = html;
    window.scrollTo(0, 0);
}

// --- STREET CHALLENGE (Juego) ---
function startChallenge() {
    hideAll();
    document.getElementById('view-game').classList.remove('hidden');
    nextGame();
}

function nextGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';
    
    const allItems = [...nycData.categories.slang, ...nycData.categories.reactions];
    const item = allItems[Math.floor(Math.random() * allItems.length)];
    const isCorrect = Math.random() > 0.5;
    let displaySpanish = isCorrect ? item.esp : allItems[Math.floor(Math.random() * allItems.length)].esp;

    container.innerHTML = `
        <div style="margin-top:40px; color:white; font-size:1.2rem;">
            ¿"${item.eng}" significa <br>
            <span style="color:var(--ny-blue); font-weight:bold;">"${displaySpanish}"</span>?
        </div>
        <div style="margin-top:50px;">
            <button class="tf-btn v-btn" onclick="checkTF(${isCorrect}, true)">VERDADERO</button>
            <button class="tf-btn f-btn" onclick="checkTF(${isCorrect}, false)">FALSO</button>
        </div>`;
}

function checkTF(correct, user) {
    if (correct === user) {
        alert("FACTS! ✅ +10 Street Cred");
        score += 10;
    } else {
        alert("YOU BUGGIN! ❌ -5 Street Cred");
        score -= 5;
    }
    if (score < 0) score = 0;
    localStorage.setItem('streetCred', score);
    if (scoreDisplay) scoreDisplay.innerText = score;
    nextGame();
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('install-banner');
    if (banner) banner.style.display = 'flex';
});

const installBtn = document.getElementById('btn-install-now');
if (installBtn) {
    installBtn.onclick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt = null;
            document.getElementById('install-banner').style.display = 'none';
        }
    };
}