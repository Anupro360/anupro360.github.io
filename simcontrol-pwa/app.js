// ============================================================================
// 1. CONEXIÓN A BASE DE DATOS EN GOOGLE (FIREBASE FIRESTORE) - ACTIVADA
// ============================================================================
const USAR_FIREBASE = true;

const firebaseConfig = {
  apiKey: "AIzaSyB14ngju2GddRZzP_XoYPTL0aIPcG8LKT8",
  authDomain: "simuladores-rt.firebaseapp.com",
  projectId: "simuladores-rt",
  storageBucket: "simuladores-rt.firebasestorage.app",
  messagingSenderId: "135916098632",
  appId: "1:135916098632:web:efa560954b635a95f9747d"
};

let db = null;
if (USAR_FIREBASE && typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    // Activa persistencia offline: guarda aunque se caiga el internet en el simulador
    db.enablePersistence().catch(() => {});
  } catch (e) {
    console.error("Error inicializando Firebase:", e);
  }
}

// ============================================================================
// 2. CATÁLOGO REAL EXTRAÍDO DE SIMCONTROL (2 SIMULADORES / 21 EQUIPOS)
// ============================================================================
const CATALOGO_SIMULADORES = {
  SIM_A: {
    nombre: "Simulador A (13 Equipos)",
    equipos: [
      "Komatsu 830E-AC", "Komatsu 930E-4", "Komatsu 930E-4 (SN: A31729+)",
      "Komatsu 930E", "Komatsu 930E-5", "Komatsu 830E-5",
      "Komatsu 980E-4", "Komatsu 980E-5", "Komatsu 980E-5SE",
      "Caterpillar 6060 (Excavadora)", "Komatsu PC8000-6 (Pala Hidráulica)",
      "P&H 4100XPC (Optima)", "P&H 4100XPC (TRC Dipper)"
    ]
  },
  SIM_B: {
    nombre: "Simulador B (8 Equipos)",
    equipos: [
      "Komatsu 930E", "Komatsu 930E-4", "Komatsu 980E-4", "Komatsu 980E-5",
      "Caterpillar 6060 (Excavadora)", "Liebherr T282B", "Liebherr T282C",
      "P&H 4100XPC (Optima)"
    ]
  }
};

const PLANES_ESTUDIO = {
  "100 - Operador Nuevo BEL (000 al 125)": [
    "000 - Aclimatación Simulador (Práctica)", "101 - Familiarización Camión (Práctica)",
    "102 - Operación Básica Uso RSC (Práctica)", "103 - Evaluación Operaciones Básicas (Evaluación)",
    "104 - Niveles de Alarmas Komatsu (Práctica)", "105 - Peligros en la Ruta (Práctica)",
    "106 - Abuso y pérdida de Frenos (Práctica)", "107 - Evaluación Alarmas y Frenos (Evaluación)",
    "108 - Eventos de Emergencia (Práctica)", "109 - Condiciones Climáticas (Práctica)",
    "110 - Tránsito y uso de Radio (Práctica)", "111 - Circuito Angosto (Práctica)",
    "112 - Conducción Nocturna (Práctica)", "113 - Evaluación Emergencias Uso de radio (Evaluación)",
    "114 - Carga L2350 (Práctica)", "115 - Carga CAT6060 (Práctica)",
    "116 - Carga PH4100 Balde lado Izq (Práctica)", "117 - Carga PH4100 Balde lado Der (Práctica)",
    "118 - Carga PH4100 Contrapeso lado Izq (Práctica)", "119 - Carga PH4100 Contrapeso lado Der (Práctica)",
    "120 - Carga PH4100 Encajonada lado Izq (Práctica)", "121 - Carga PH4100 Encajonada lado Der (Práctica)",
    "122 - Descarga Chancador óxido (Práctica)", "123 - Descarga Botadero Sur Norte 6 (Práctica)",
    "124 - Evaluación Productividad (Evaluación)", "125 - Evaluación Final (Evaluación)"
  ],
  "200 - Operador con Experiencia / Diagnóstico Anual (201 al 220)": [
    "201 - Evaluación Inicial (Evaluación)", "202 - Operación Básica Uso RSC (Práctica)",
    "203 - Niveles de Alarmas Komatsu (Práctica)", "204 - Peligros en la Ruta (Práctica)",
    "205 - Abuso y pérdida de Frenos (Práctica)", "206 - Cuidado de neumáticos (Práctica)",
    "207 - Eventos de Emergencia (Práctica)", "208 - Condiciones Climáticas (Práctica)",
    "209 - Circuito Angosto (Práctica)", "210 - Tránsito y uso de Radio (Práctica)",
    "211 - Conducción Nocturna (Práctica)", "212 - Carga L2350 (Práctica)",
    "213 - Carga CAT6060 (Práctica)", "214 - Carga PH4100 Contrapeso lado Izq (Práctica)",
    "215 - Carga PH4100 Contrapeso lado Der (Práctica)", "216 - Carga PH4100 Encajonada lado Izq (Práctica)",
    "217 - Carga PH4100 Encajonada lado Der (Práctica)", "218 - Descarga Chancador óxido (Práctica)",
    "219 - Descarga Botadero Sur Norte 6 (Práctica)", "220 - Evaluación Final (Evaluación)"
  ],
  "500 - Homologación KOM930E3 a 930E4 (501 al 504)": [
    "501 - DRT - Evaluación Diagnóstico (Evaluación)", "502 - DRT - Alarmas y Emergencias (Práctica)",
    "503 - DRT - Cuidado Neumáticos (Práctica)", "504 - DRT - Evaluación de Homologación (Evaluación)"
  ],
  "700 - Homologación KOM930E4-SE a KOM930E5 (701 al 706)": [
    "701 - Reconocimiento del Equipo y Movimientos Básicos (Práctica)",
    "702 - Práctica Traslado a Fondo Mina (Práctica)", "703 - Práctica Traslado a Chancado (Práctica)",
    "704 - Alarmas del Equipo (Práctica)", "705 - Emergencias DRT (Práctica)",
    "706 - Evaluación Final DRT (Evaluación)"
  ],
  "100 - Curso Operadores Plazo Fijo (101 al 110)": [
    "101 - Aclimatación (Práctica)", "104 - Práctica Traslado (Práctica)",
    "105 - Evaluación Traslado (Evaluación)", "106 - Práctica Carga (Práctica)",
    "107 - Práctica Descarga (Práctica)", "108 - Práctica Emergencias (Práctica)",
    "109 - Evaluación Emergencias (Evaluación)", "110 - Evaluación Final (Evaluación)"
  ],
  "230 - Módulo de Seguridad (231 al 233)": [
    "231 - Eventos de Emergencias (Práctica)", "232 - Tráfico y Adelantamiento (Práctica)",
    "233 - Evaluación Módulo de Seguridad (Evaluación)"
  ],
  "CIP - Plan Emergencias OneKomatsu (301 al 304)": [
    "301 - DRT - Diagnóstico Inicial Emergencias - OneTeam (Evaluación)",
    "302 - DRT - Niveles de Alarma - OneTeam (Práctica)",
    "303 - DRT - Emergencias - OneTeam (Práctica)",
    "304 - DRT - Diagnóstico Final Emergencias - OneTeam (Evaluación)"
  ],
  "CIP - Plan Eventos de Emergencia (301 al 304)": [
    "301 - DRT - Diagnóstico Inicial Emergencias (Evaluación)",
    "302 - DRT - Práctica Emergencias (Vacío) (Práctica)",
    "303 - DRT - Práctica Emergencias (Cargado) (Práctica)",
    "304 - DRT - Diagnóstico Final (Evaluación)"
  ],
  "CIP - Plan Invierno (305 al 307)": [
    "305 - DRT - Diagnóstico Inicial Invierno (Evaluación)",
    "306 - DRT - Práctica Plan Invierno / Condiciones Climáticas (Práctica)",
    "307 - DRT - Diagnóstico Final Invierno (Evaluación)"
  ],
  "CIP - Plan Pérdida Retardo y Emergencias (308 al 311)": [
    "308 - DRT - Diagnóstico Inicial Emergencias (Evaluación)",
    "309 - DRT - Práctica Emergencias (Vacío) (Práctica)",
    "310 - DRT - Práctica Emergencias (Cargado) (Práctica)",
    "311 - DRT - Diagnóstico Final Emergencias (Evaluación)"
  ],
  "CIP - Plan Cuidado del Equipo y Frenos (301 al 304)": [
    "301 - DRT - Diagnóstico Inicial Frenos (Evaluación)",
    "302 - DRT - Práctica I - Frenos (Práctica)",
    "303 - DRT - Práctica II - Frenos (Práctica)",
    "304 - DRT - Diagnóstico Final Frenos (Evaluación)"
  ],
  "CIP - Plan Circuito Angosto & Alarmas (301 al 304)": [
    "301 - Diagnóstico Inicial - Circuito Angosto & Alarmas (Evaluación)",
    "302 - Niveles de Alarmas Komatsu (Práctica)",
    "303 - Circuito Angosto (Práctica)",
    "304 - Diagnóstico Final - Circuito Angosto & Alarmas (Evaluación)"
  ],
  "CIP - Módulo Neumáticos (301 al 304)": [
    "301 - Diagnóstico Inicial Cuidado neumáticos (Evaluación)",
    "302 - Cuidado Neumáticos (Práctica)",
    "303 - Eventos de Emergencias (Práctica)",
    "304 - Diagnóstico Final Cuidado neumáticos (Evaluación)"
  ],
  "CIP - Plan Ahorro de Combustible (301 al 304)": [
    "301 - DRT - Diagnóstico Inicial Eficiencia de Combustible (Evaluación)",
    "302 - DRT - Práctica I Eficiencia Combustible (Práctica)",
    "303 - DRT - Práctica II Eficiencia Combustible (Práctica)",
    "304 - DRT - Evaluación Final Eficiencia de Combustible (Evaluación)"
  ]
};

// ============================================================================
// 3. ESTADO DE LA APLICACIÓN (SINCRONIZADO CON GOOGLE FIREBASE)
// ============================================================================
let operadores = JSON.parse(localStorage.getItem('sim_operadores')) || [
  { sap: "450123", run: "14113209-1", nombre: "CASTILLO MOYANO, ELIAS SEBASTIAN", empresa: "Codelco - Radomiro Tomic", flota: "STD" },
  { sap: "450890", run: "16452180-4", nombre: "ARAYA CONTRERAS, MARCO ANTONIO", empresa: "Codelco - Radomiro Tomic", flota: "STD" },
  { sap: "798001", run: "13890452-3", nombre: "VALENZUELA TORO, HECTOR PATRICIO", empresa: "Codelco - Radomiro Tomic", flota: "CAT" }
];

let instructores = JSON.parse(localStorage.getItem('sim_instructores')) || [
  { id: 1, nombre: "VILLEGAS PARDO, BRYAN ALEJANDRO", sap: "310455", area: "Operaciones Mina - Turno A" },
  { id: 2, nombre: "ROJAS MENDEZ, CARLOS EDUARDO", sap: "310892", area: "Operaciones Mina - Turno B" }
];

let planesCat798 = JSON.parse(localStorage.getItem('sim_planes_cat798')) || [
  {
    id: 101,
    plan: "Plan Habilitación Senior CAT 798AC",
    modulo: "Módulo de Incendio (Ejemplo Base)",
    actividad: "Evaluación Control de Incendio y Evacuación 798AC",
    cierresBrecha: [
      "CB-01 Reconocimiento sistema supresión incendios",
      "CB-02 Detención segura en rampa cargada",
      "CB-03 Activación manual y corte de energía"
    ]
  }
];

let sesiones = JSON.parse(localStorage.getItem('sim_sesiones')) || [];
let sesionActiva = JSON.parse(localStorage.getItem('sim_sesion_activa')) || null;
let timerInterval = null;

let operadorSeleccionadoStd = null;
let operadorSeleccionadoCat = null;

let evaluacionesMap = {};
let actividadBrechaTarget = null;

// ============================================================================
// 4. INICIALIZACIÓN Y SINCRONIZACIÓN CON GOOGLE
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  initTheme();
  initFecha();
  cargarEquipos();
  renderInstructores();
  renderOperadores();
  renderSugerenciasSAP();
  renderPlanesCat798();
  renderHistorial();
  restaurarSesionActiva();
  actualizarBadgeGoogle();
  if (db) sincronizarDesdeGoogle();
});

function actualizarBadgeGoogle() {
  const badge = document.getElementById('db-status-badge');
  const dot = document.getElementById('db-status-dot');
  const text = document.getElementById('db-status-text');
  if (db) {
    badge.className = "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800";
    dot.className = "w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
    text.textContent = "Conectado a Google Cloud";
  }
}

async function sincronizarDesdeGoogle() {
  if (!db) return;
  try {
    const snapOps = await db.collection("operadores").get();
    if (!snapOps.empty) {
      operadores = snapOps.docs.map(d => d.data());
      localStorage.setItem('sim_operadores', JSON.stringify(operadores));
      renderOperadores();
      renderSugerenciasSAP();
    } else {
      // Sube los datos iniciales si la base en Google está vacía
      operadores.forEach(op => guardarEnGoogle("operadores", op.sap, op));
    }

    const snapInst = await db.collection("instructores").get();
    if (!snapInst.empty) {
      instructores = snapInst.docs.map(d => d.data());
      localStorage.setItem('sim_instructores', JSON.stringify(instructores));
      renderInstructores();
    } else {
      instructores.forEach(inst => guardarEnGoogle("instructores", inst.id, inst));
    }

    const snapCat = await db.collection("planes_cat798").get();
    if (!snapCat.empty) {
      planesCat798 = snapCat.docs.map(d => d.data());
      localStorage.setItem('sim_planes_cat798', JSON.stringify(planesCat798));
      renderPlanesCat798();
    } else {
      planesCat798.forEach(p => guardarEnGoogle("planes_cat798", p.id, p));
    }

    const snapSes = await db.collection("sesiones").orderBy("id", "desc").get();
    if (!snapSes.empty) {
      sesiones = snapSes.docs.map(d => d.data());
      localStorage.setItem('sim_sesiones', JSON.stringify(sesiones));
      renderHistorial();
    }
  } catch (err) {
    console.warn("Sincronizando en modo offline:", err);
  }
}

async function guardarEnGoogle(coleccion, docId, data) {
  if (!db) return;
  try {
    await db.collection(coleccion).doc(String(docId)).set(data);
  } catch (e) {
    console.error("Se guardó local, pendiente subir a Google:", e);
  }
}

// ============================================================================
// 5. MODO CLARO / OSCURO Y NAVEGACIÓN
// ============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('sim_theme') || 'dark';
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  actualizarBotonTema();
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('sim_theme', isDark ? 'dark' : 'light');
  actualizarBotonTema();
}

function actualizarBotonTema() {
  const isDark = document.documentElement.classList.contains('dark');
  document.getElementById('theme-label').textContent = isDark ? "Modo Claro" : "Modo Oscuro";
  const icon = document.getElementById('theme-icon');
  icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  icon.className = isDark ? "w-4 h-4 text-amber-400" : "w-4 h-4 text-slate-700";
  lucide.createIcons();
}

function switchTab(tabName) {
  ['registro', 'cat798', 'historial', 'operadores', 'instructores'].forEach(t => {
    document.getElementById(`view-${t}`).classList.add('hidden');
    const btn = document.getElementById(`tab-${t}`);
    btn.classList.remove('border-brand-600', 'text-brand-600', 'dark:text-brand-500', 'font-semibold');
    btn.classList.add('border-transparent', 'text-slate-600', 'dark:text-slate-400', 'font-medium');
  });
  document.getElementById(`view-${tabName}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-${tabName}`);
  activeBtn.classList.add('border-brand-600', 'text-brand-600', 'dark:text-brand-500', 'font-semibold');
  activeBtn.classList.remove('border-transparent', 'text-slate-600', 'dark:text-slate-400', 'font-medium');
}

function toggleSubVistaCat(sub) {
  document.getElementById('cat-sub-operacion').classList.toggle('hidden', sub !== 'operacion');
  document.getElementById('cat-sub-constructor').classList.toggle('hidden', sub !== 'constructor');
  document.getElementById('btn-cat-sub-op').className = sub === 'operacion'
    ? "px-3 py-2 rounded-lg bg-yellow-500 text-slate-950 font-bold text-xs cursor-pointer"
    : "px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold text-xs cursor-pointer";
  document.getElementById('btn-cat-sub-const').className = sub === 'constructor'
    ? "px-3 py-2 rounded-lg bg-yellow-500 text-slate-950 font-bold text-xs cursor-pointer"
    : "px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold text-xs cursor-pointer";
}

// ============================================================================
// 6. BÚSQUEDA POR SAP Y RESUMEN HISTÓRICO DEL OPERADOR
// ============================================================================
function initFecha() {
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, '0');
  const dd = String(hoy.getDate()).padStart(2, '0');
  document.getElementById('input-fecha').value = `${yyyy}-${mm}-${dd}`;
  document.getElementById('input-anio').value = yyyy;
}

function actualizarAnio() {
  const f = document.getElementById('input-fecha').value;
  if (f) document.getElementById('input-anio').value = f.split('-')[0];
}

function renderSugerenciasSAP() {
  const stdOps = operadores.filter(o => o.flota !== 'CAT').slice(0, 4);
  document.getElementById('sap-suggestions').innerHTML = stdOps.map(op => `
    <button type="button" onclick="seleccionarSAP('${op.sap}', 'STD')" class="text-xs px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-brand-600 hover:text-white transition font-mono cursor-pointer">
      ${op.sap} (${op.nombre.split(',')[0]})
    </button>
  `).join('');

  const catOps = operadores.filter(o => o.flota === 'CAT').slice(0, 4);
  document.getElementById('cat-sap-suggestions').innerHTML = catOps.map(op => `
    <button type="button" onclick="seleccionarSAP('${op.sap}', 'CAT')" class="text-xs px-2.5 py-1 rounded-md bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500 hover:text-slate-950 transition font-mono cursor-pointer">
      ${op.sap} (${op.nombre.split(',')[0]})
    </button>
  `).join('');
}

function seleccionarSAP(sap, tipo) {
  if (tipo === 'CAT') {
    document.getElementById('cat-input-sap').value = sap;
    buscarPorSAP(sap, 'CAT');
  } else {
    document.getElementById('input-sap').value = sap;
    buscarPorSAP(sap, 'STD');
  }
}

function buscarPorSAP(valor, tipo) {
  const q = valor.trim();
  const op = operadores.find(o => o.sap === q);

  if (tipo === 'CAT') {
    operadorSeleccionadoCat = op || null;
    document.getElementById('cat-op-nombre').textContent = op ? op.nombre : (q ? "SAP no encontrado en flota 798AC" : "Seleccione un operador habilitado para 798AC...");
    document.getElementById('cat-op-run').textContent = op ? op.run : "-";
    document.getElementById('cat-op-sap').textContent = op ? op.sap : "-";
    return;
  }

  operadorSeleccionadoStd = op || null;
  const resumenEl = document.getElementById('op-resumen-previo');
  if (op) {
    document.getElementById('op-nombre').textContent = op.nombre;
    document.getElementById('op-run').textContent = op.run;
    document.getElementById('op-sap').textContent = op.sap;

    const historialOp = sesiones.filter(s => s.sap === op.sap);
    if (historialOp.length > 0) {
      let totalApr = 0, totalRep = 0, totalBrechas = 0;
      historialOp.forEach(s => s.actividades.forEach(a => {
        if (a.estado === 'APROBADO') totalApr++;
        totalRep += (a.reprobaciones || 0);
        totalBrechas += (a.brechas || []).reduce((acc, b) => acc + Number(b.veces || 1), 0);
      }));
      resumenEl.classList.remove('hidden');
      resumenEl.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">✓ ${totalApr} Aprobadas</span> • <span class="text-rose-500 font-bold">✗ ${totalRep} Reprobaciones previas</span> • <span class="text-amber-500 font-bold">🔧 ${totalBrechas} Cierres de brecha</span>`;
    } else {
      resumenEl.classList.add('hidden');
    }
  } else {
    document.getElementById('op-nombre').textContent = q ? "SAP no encontrado (Regístrelo en '+ Nuevo Alumno')" : "Ingrese un SAP para cargar datos...";
    document.getElementById('op-run').textContent = "-";
    document.getElementById('op-sap').textContent = "-";
    resumenEl.classList.add('hidden');
  }
}

// ============================================================================
// 7. CONTROL DE SESIÓN EN VIVO (ENTRADA AL INICIAR / SALIDA AL FINALIZAR)
// ============================================================================
function obtenerHoraActualStr() {
  const ahora = new Date();
  return `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
}

function iniciarSesion(flota) {
  const op = flota === 'CAT' ? operadorSeleccionadoCat : operadorSeleccionadoStd;
  if (!op) {
    alert("⚠️ Primero ingresa un N° SAP válido antes de iniciar la sesión.");
    return;
  }

  const equipo = flota === 'CAT' ? "Caterpillar 798AC" : document.getElementById('select-equipo').value;
  const horaEntrada = obtenerHoraActualStr();

  sesionActiva = {
    flota,
    sap: op.sap,
    run: op.run,
    operador: op.nombre,
    equipo,
    fecha: document.getElementById('input-fecha').value,
    anio: document.getElementById('input-anio').value,
    horaEntrada,
    timestampInicio: Date.now()
  };

  localStorage.setItem('sim_sesion_activa', JSON.stringify(sesionActiva));
  restaurarSesionActiva();
  mostrarToast(`Sesión iniciada a las ${horaEntrada} hrs`);
}

function restaurarSesionActiva() {
  const banner = document.getElementById('banner-sesion-activa');
  if (!sesionActiva) {
    banner.classList.add('hidden');
    if (timerInterval) clearInterval(timerInterval);
    return;
  }

  banner.classList.remove('hidden');
  document.getElementById('activa-info').textContent = `${sesionActiva.operador} (SAP: ${sesionActiva.sap}) • ${sesionActiva.equipo}`;
  document.getElementById('display-hora-entrada').textContent = sesionActiva.horaEntrada;

  seleccionarSAP(sesionActiva.sap, sesionActiva.flota);

  const actualizarCronometro = () => {
    const mins = Math.floor((Date.now() - sesionActiva.timestampInicio) / 60000);
    document.getElementById('activa-tiempo').textContent = `Hora Entrada: ${sesionActiva.horaEntrada} hrs | Tiempo en cabina: ${mins} min`;
  };
  actualizarCronometro();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(actualizarCronometro, 15000);
}

function cancelarSesionActiva() {
  if (!confirm("¿Descartar la sesión en curso sin guardar?")) return;
  sesionActiva = null;
  localStorage.removeItem('sim_sesion_activa');
  document.getElementById('display-hora-entrada').textContent = "Pendiente";
  restaurarSesionActiva();
}

// ============================================================================
// 8. ACTIVIDADES, REPROBACIONES Y CIERRES DE BRECHAS
// ============================================================================
function cargarEquipos() {
  const simKey = document.getElementById('select-simulador').value;
  const selectEquipo = document.getElementById('select-equipo');
  selectEquipo.innerHTML = CATALOGO_SIMULADORES[simKey].equipos.map(eq => `<option value="${eq}">${eq}</option>`).join('');
  cargarPlanes();
}

function cargarPlanes() {
  const selectPlan = document.getElementById('select-plan');
  selectPlan.innerHTML = Object.keys(PLANES_ESTUDIO).map(p => `<option value="${p}">${p}</option>`).join('');
  cargarActividades();
}

function cargarActividades() {
  const planKey = document.getElementById('select-plan').value;
  const actividades = PLANES_ESTUDIO[planKey] || [];
  evaluacionesMap = {};
  renderListaActividades('lista-actividades', actividades);
}

function renderListaActividades(containerId, actividades) {
  const contenedor = document.getElementById(containerId);
  actualizarContador();

  contenedor.innerHTML = actividades.map((act, idx) => {
    const safeId = `${containerId}-${idx}`;
    const safeName = act.replace(/'/g, "\\'");
    return `
      <div id="card-${safeId}" class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-2.5 transition">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span class="text-xs sm:text-sm font-semibold leading-snug">${act}</span>
          <div class="flex flex-wrap items-center gap-1.5 shrink-0">
            <button type="button" onclick="registrarIntentoFallido('${safeId}', '${safeName}')" 
              class="px-2.5 py-1.5 rounded-md text-xs font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30 hover:bg-rose-600 hover:text-white transition cursor-pointer">
              ✗ Reprobó (+1)
            </button>
            <button type="button" onclick="abrirModalBrecha('${safeId}', '${safeName}')" 
              class="px-2.5 py-1.5 rounded-md text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 transition cursor-pointer">
              🔧 + Cierre Brecha
            </button>
            <button type="button" onclick="marcarAprobado('${safeId}', '${safeName}')" 
              class="px-3 py-1.5 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition cursor-pointer">
              ✓ Aprobado
            </button>
          </div>
        </div>
        <div id="meta-${safeId}" class="hidden text-xs pt-2 border-t border-slate-200 dark:border-slate-700/80 space-y-1"></div>
      </div>
    `;
  }).join('');
}

function ensureEvalEntry(nombreAct) {
  if (!evaluacionesMap[nombreAct]) {
    evaluacionesMap[nombreAct] = { estado: "EN PROCESO", reprobaciones: 0, brechas: [] };
  }
  return evaluacionesMap[nombreAct];
}

function registrarIntentoFallido(safeId, nombreAct) {
  const entry = ensureEvalEntry(nombreAct);
  entry.reprobaciones += 1;
  if (entry.estado !== "APROBADO") entry.estado = "NO APROBADO";
  actualizarTarjetaActividad(safeId, nombreAct);
}

function marcarAprobado(safeId, nombreAct) {
  const entry = ensureEvalEntry(nombreAct);
  entry.estado = entry.estado === "APROBADO" ? "NO APROBADO" : "APROBADO";
  actualizarTarjetaActividad(safeId, nombreAct);
}

function abrirModalBrecha(safeId, nombreAct) {
  actividadBrechaTarget = { safeId, nombreAct };
  document.getElementById('modal-brecha-act').textContent = nombreAct;
  document.getElementById('modal-brecha-nombre').value = "";
  document.getElementById('modal-brecha-veces').value = 1;
  document.getElementById('modal-brecha-minutos').value = 15;
  document.getElementById('modal-brecha').classList.remove('hidden');
}

function cerrarModalBrecha() {
  document.getElementById('modal-brecha').classList.add('hidden');
  actividadBrechaTarget = null;
}

function confirmarCierreBrecha() {
  if (!actividadBrechaTarget) return;
  const nombreBrecha = document.getElementById('modal-brecha-nombre').value.trim();
  const veces = parseInt(document.getElementById('modal-brecha-veces').value) || 1;
  const minutos = parseInt(document.getElementById('modal-brecha-minutos').value) || 0;

  if (!nombreBrecha) {
    alert("⚠️ Escribe o selecciona el Cierre de Brecha realizado.");
    return;
  }

  const { safeId, nombreAct } = actividadBrechaTarget;
  const entry = ensureEvalEntry(nombreAct);
  entry.brechas.push({ nombre: nombreBrecha, veces, minutos });

  cerrarModalBrecha();
  actualizarTarjetaActividad(safeId, nombreAct);
}

function actualizarTarjetaActividad(safeId, nombreAct) {
  const entry = evaluacionesMap[nombreAct];
  const card = document.getElementById(`card-${safeId}`);
  const meta = document.getElementById(`meta-${safeId}`);

  if (entry.estado === "APROBADO") {
    card.className = "p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-500/10 space-y-2.5 transition";
  } else if (entry.reprobaciones > 0 || entry.estado === "NO APROBADO") {
    card.className = "p-3.5 rounded-xl border-2 border-rose-500/70 bg-rose-500/10 space-y-2.5 transition";
  }

  meta.classList.remove('hidden');
  const totalIntentos = entry.reprobaciones + (entry.estado === "APROBADO" ? 1 : 0);
  const brechasHtml = entry.brechas.map(b =>
    `<div class="text-amber-600 dark:text-amber-400">🔧 <strong>${b.nombre}</strong> (${b.veces}x • ${b.minutos} min)</div>`
  ).join('');

  meta.innerHTML = `
    <div class="flex flex-wrap gap-3 font-semibold">
      <span class="${entry.estado === 'APROBADO' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}">
        Estado: ${entry.estado}
      </span>
      <span>• Intentos totales: ${totalIntentos} (Reprobados: ${entry.reprobaciones})</span>
    </div>
    ${brechasHtml}
  `;
  actualizarContador();
}

function actualizarContador() {
  const total = Object.keys(evaluacionesMap).length;
  const el = document.getElementById('contador-seleccion');
  if (el) el.textContent = `${total} registrada${total === 1 ? '' : 's'}`;
}

// ============================================================================
// 9. MÓDULO EXCLUSIVO CATERPILLAR 798AC (CONSTRUCTOR Y EVALUACIÓN)
// ============================================================================
function guardarEstructuraCat() {
  const plan = document.getElementById('new-cat-plan').value.trim();
  const modulo = document.getElementById('new-cat-modulo').value.trim();
  const actividad = document.getElementById('new-cat-actividad').value.trim();
  const brechasRaw = document.getElementById('new-cat-brechas').value.trim();

  if (!plan || !modulo || !actividad) {
    alert("⚠️ Plan, Módulo y Actividad Principal son obligatorios.");
    return;
  }

  const cierresBrecha = brechasRaw
    ? brechasRaw.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const nuevoItem = {
    id: Date.now(),
    plan,
    modulo,
    actividad,
    cierresBrecha
  };

  planesCat798.unshift(nuevoItem);
  localStorage.setItem('sim_planes_cat798', JSON.stringify(planesCat798));
  guardarEnGoogle("planes_cat798", nuevoItem.id, nuevoItem);

  document.getElementById('new-cat-modulo').value = "";
  document.getElementById('new-cat-actividad').value = "";
  document.getElementById('new-cat-brechas').value = "";

  renderPlanesCat798();
  mostrarToast("Plan y Módulo CAT 798AC guardados en Google");
}

function renderPlanesCat798() {
  const planesUnicos = [...new Set(planesCat798.map(p => p.plan))];
  const selectPlan = document.getElementById('cat-select-plan');
  selectPlan.innerHTML = planesUnicos.map(p => `<option value="${p}">${p}</option>`).join('');
  cargarModulosCat();

  const cont = document.getElementById('lista-estructura-cat');
  cont.innerHTML = planesCat798.map(item => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-2">
      <div class="flex justify-between items-start">
        <div>
          <span class="text-xs font-bold uppercase text-yellow-600 dark:text-yellow-400">${item.plan}</span>
          <h4 class="font-bold text-sm">${item.modulo}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300">Actividad: ${item.actividad}</p>
        </div>
        <button onclick="eliminarEstructuraCat(${item.id})" class="text-xs text-rose-500 hover:underline cursor-pointer">Eliminar</button>
      </div>
      ${item.cierresBrecha.length > 0 ? `
        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
          <strong>${item.cierresBrecha.length} Cierres de brecha configurados:</strong>
          <ul class="list-disc pl-4 mt-1 space-y-0.5">
            ${item.cierresBrecha.map(cb => `<li>${cb}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function eliminarEstructuraCat(id) {
  if (!confirm("¿Eliminar este módulo de CAT 798AC?")) return;
  planesCat798 = planesCat798.filter(p => p.id !== id);
  localStorage.setItem('sim_planes_cat798', JSON.stringify(planesCat798));
  if (db) db.collection("planes_cat798").doc(String(id)).delete().catch(() => {});
  renderPlanesCat798();
}

function cargarModulosCat() {
  const planSel = document.getElementById('cat-select-plan').value;
  const modulos = planesCat798.filter(p => p.plan === planSel);
  const selectMod = document.getElementById('cat-select-modulo');
  selectMod.innerHTML = modulos.map(m => `<option value="${m.id}">${m.modulo}</option>`).join('');
  cargarActividadesCat();
}

function cargarActividadesCat() {
  const modId = Number(document.getElementById('cat-select-modulo').value);
  const item = planesCat798.find(p => p.id === modId);
  if (!item) return;

  const datalist = document.getElementById('sugerencias-brechas');
  if (item.cierresBrecha.length > 0) {
    datalist.innerHTML = item.cierresBrecha.map(cb => `<option value="${cb}">`).join('');
  }

  evaluacionesMap = {};
  renderListaActividades('cat-lista-actividades', [item.actividad]);
}

// ============================================================================
// 10. FINALIZAR SESIÓN (MARCA HORA SALIDA REAL Y GUARDA EN GOOGLE)
// ============================================================================
function finalizarYGuardarSesion() {
  const esCat = sesionActiva ? sesionActiva.flota === 'CAT' : !document.getElementById('view-cat798').classList.contains('hidden');
  const op = sesionActiva
    ? { sap: sesionActiva.sap, run: sesionActiva.run, nombre: sesionActiva.operador }
    : (esCat ? operadorSeleccionadoCat : operadorSeleccionadoStd);

  if (!op) {
    alert("⚠️ Debe seleccionar un Operador válido por SAP.");
    return;
  }

  const actividadesKeys = Object.keys(evaluacionesMap);
  if (actividadesKeys.length === 0) {
    alert("⚠️ Registre al menos una actividad (Aprobada, Reprobada o Cierre de Brecha).");
    return;
  }

  const horaEntrada = sesionActiva ? sesionActiva.horaEntrada : obtenerHoraActualStr();
  const horaSalida = obtenerHoraActualStr();
  const minutosCabina = sesionActiva ? Math.max(1, Math.round((Date.now() - sesionActiva.timestampInicio) / 60000)) : 0;

  const nuevaSesion = {
    id: Date.now(),
    fecha: sesionActiva ? sesionActiva.fecha : document.getElementById('input-fecha').value,
    anio: sesionActiva ? sesionActiva.anio : document.getElementById('input-anio').value,
    horaEntrada,
    horaSalida,
    minutosCabina,
    sap: op.sap,
    run: op.run,
    operador: op.nombre,
    condicion: esCat ? "Operador Senior CAT 798AC" : document.getElementById('select-condicion').value,
    simulador: esCat ? "Simulador CAT 798AC" : CATALOGO_SIMULADORES[document.getElementById('select-simulador').value].nombre,
    equipo: esCat ? "Caterpillar 798AC" : document.getElementById('select-equipo').value,
    plan: esCat ? document.getElementById('cat-select-plan').value : document.getElementById('select-plan').value,
    actividades: actividadesKeys.map(k => ({
      nombre: k,
      estado: evaluacionesMap[k].estado,
      reprobaciones: evaluacionesMap[k].reprobaciones,
      brechas: evaluacionesMap[k].brechas
    })),
    instructorCap: document.getElementById('input-instructor-cap').value,
    instructorArea: esCat ? document.getElementById('cat-select-instructor-area').value : document.getElementById('select-instructor-area').value,
    observaciones: (esCat ? document.getElementById('cat-input-obs').value : document.getElementById('input-obs').value).trim()
  };

  sesiones.unshift(nuevaSesion);
  localStorage.setItem('sim_sesiones', JSON.stringify(sesiones));
  guardarEnGoogle("sesiones", nuevaSesion.id, nuevaSesion);

  sesionActiva = null;
  localStorage.removeItem('sim_sesion_activa');
  document.getElementById('display-hora-entrada').textContent = "Pendiente";
  document.getElementById('display-hora-salida').textContent = horaSalida;
  restaurarSesionActiva();

  evaluacionesMap = {};
  if (esCat) {
    document.getElementById('cat-input-obs').value = "";
    cargarActividadesCat();
  } else {
    document.getElementById('input-obs').value = "";
    cargarActividades();
  }

  renderHistorial();
  mostrarToast(`Sesión cerrada (${horaEntrada} - ${horaSalida}) y guardada en Google`);
}

// ============================================================================
// 11. BITÁCORA Y EXPORTACIÓN EXCEL DETALLADA
// ============================================================================
function renderHistorial() {
  const filtro = (document.getElementById('filtro-historial')?.value || '').toLowerCase();
  const tbody = document.getElementById('tabla-historial');

  const filtradas = sesiones.filter(s =>
    s.sap.toLowerCase().includes(filtro) ||
    s.operador.toLowerCase().includes(filtro) ||
    s.equipo.toLowerCase().includes(filtro)
  );

  if (filtradas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-500">No hay sesiones registradas aún.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtradas.map(s => `
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 align-top">
      <td class="p-3 whitespace-nowrap">
        <div class="font-semibold">${s.fecha} (${s.anio})</div>
        <div class="text-xs font-mono text-slate-500">${s.horaEntrada} - ${s.horaSalida} (${s.minutosCabina || 0} min)</div>
      </td>
      <td class="p-3">
        <div class="font-bold">${s.operador}</div>
        <div class="text-xs font-mono text-slate-500">SAP: ${s.sap} | RUN: ${s.run}</div>
      </td>
      <td class="p-3">
        <div class="font-bold ${s.equipo.includes('798AC') ? 'text-yellow-600 dark:text-yellow-400' : 'text-brand-600 dark:text-brand-400'}">${s.equipo}</div>
        <div class="text-xs text-slate-500">${s.plan}</div>
      </td>
      <td class="p-3 space-y-2">
        ${s.actividades.map(a => `
          <div class="text-xs p-2 rounded bg-slate-100 dark:bg-slate-800/80 space-y-1">
            <div class="flex items-center gap-1.5 font-semibold">
              <span class="px-1.5 py-0.5 rounded font-bold ${a.estado === 'APROBADO' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/20 text-rose-600 dark:text-rose-400'}">
                ${a.estado}
              </span>
              <span>${a.nombre}</span>
            </div>
            <div class="text-slate-500 dark:text-slate-400">
              Reprobaciones previas: <strong>${a.reprobaciones || 0}</strong>
            </div>
            ${(a.brechas || []).map(b => `
              <div class="text-amber-600 dark:text-amber-400">
                🔧 ${b.nombre} — <strong>${b.veces}x</strong> (${b.minutos} min)
              </div>
            `).join('')}
          </div>
        `).join('')}
      </td>
      <td class="p-3 text-xs">
        <div><strong>Cap:</strong> ${s.instructorCap}</div>
        <div class="text-slate-500"><strong>Área:</strong> ${s.instructorArea}</div>
      </td>
      <td class="p-3 text-right">
        <button onclick="eliminarSesion(${s.id})" class="text-rose-500 hover:underline text-xs cursor-pointer">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

function eliminarSesion(id) {
  if (!confirm("¿Eliminar este registro de la bitácora?")) return;
  sesiones = sesiones.filter(s => s.id !== id);
  localStorage.setItem('sim_sesiones', JSON.stringify(sesiones));
  if (db) db.collection("sesiones").doc(String(id)).delete().catch(() => {});
  renderHistorial();
}

function exportarExcel() {
  if (sesiones.length === 0) {
    alert("No hay registros para exportar.");
    return;
  }

  const filas = [];
  sesiones.forEach(s => {
    s.actividades.forEach(act => {
      const resumenBrechas = (act.brechas || []).map(b => `${b.nombre} (${b.veces}x, ${b.minutos}m)`).join(" | ");
      const totalMinBrechas = (act.brechas || []).reduce((acc, b) => acc + Number(b.minutos || 0), 0);
      const totalVecesBrechas = (act.brechas || []).reduce((acc, b) => acc + Number(b.veces || 0), 0);

      filas.push({
        "Fecha": s.fecha,
        "Año": s.anio,
        "Hora Entrada": s.horaEntrada,
        "Hora Salida": s.horaSalida,
        "Minutos Totales Cabina": s.minutosCabina || 0,
        "SAP Operador": s.sap,
        "RUN Operador": s.run,
        "Nombre Operador": s.operador,
        "Condición / Flota": s.condicion,
        "Simulador": s.simulador,
        "Equipo": s.equipo,
        "Plan de Estudio": s.plan,
        "Actividad": act.nombre,
        "Resultado Final": act.estado,
        "N° Reprobaciones": act.reprobaciones || 0,
        "N° Cierres de Brecha": totalVecesBrechas,
        "Minutos en Cierres de Brecha": totalMinBrechas,
        "Detalle Cierres de Brecha": resumenBrechas || "Ninguno",
        "Instructor Capacitación": s.instructorCap,
        "Instructor Área": s.instructorArea,
        "Observaciones": s.observaciones
      });
    });
  });

  const ws = XLSX.utils.json_to_sheet(filas);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Bitacora_Simuladores");
  XLSX.writeFile(wb, `Control_Simuladores_RT_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// ============================================================================
// 12. CRUD OPERADORES E INSTRUCTORES
// ============================================================================
function agregarOperador() {
  const flota = document.getElementById('new-op-flota').value;
  const sap = document.getElementById('new-op-sap').value.trim();
  const run = document.getElementById('new-op-run').value.trim();
  const nombre = document.getElementById('new-op-nombre').value.trim().toUpperCase();
  const empresa = document.getElementById('new-op-empresa').value.trim();

  if (!sap || !run || !nombre) {
    alert("⚠️ SAP, RUN y Nombre son obligatorios.");
    return;
  }
  if (operadores.some(o => o.sap === sap)) {
    alert("⚠️ Ya existe un operador con ese N° SAP.");
    return;
  }

  const nuevoOp = { sap, run, nombre, empresa, flota };
  operadores.unshift(nuevoOp);
  localStorage.setItem('sim_operadores', JSON.stringify(operadores));
  guardarEnGoogle("operadores", sap, nuevoOp);

  document.getElementById('new-op-sap').value = "";
  document.getElementById('new-op-run').value = "";
  document.getElementById('new-op-nombre').value = "";

  renderOperadores();
  renderSugerenciasSAP();
  mostrarToast("Operador guardado en Google Cloud");
}

function renderOperadores() {
  document.getElementById('tabla-operadores').innerHTML = operadores.map(o => `
    <tr>
      <td class="p-3">
        <span class="px-2 py-0.5 rounded text-xs font-bold ${o.flota === 'CAT' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' : 'bg-brand-500/20 text-brand-600 dark:text-brand-400'}">
          ${o.flota === 'CAT' ? 'CAT 798AC' : 'Komatsu / Std'}
        </span>
      </td>
      <td class="p-3 font-mono font-bold">${o.sap}</td>
      <td class="p-3 font-mono text-xs">${o.run}</td>
      <td class="p-3 font-semibold">${o.nombre}</td>
      <td class="p-3 text-right">
        <button onclick="seleccionarSAP('${o.sap}', '${o.flota || 'STD'}'); switchTab('${o.flota === 'CAT' ? 'cat798' : 'registro'}');" 
          class="px-3 py-1 bg-slate-800 dark:bg-slate-700 hover:bg-brand-600 text-white rounded text-xs font-semibold cursor-pointer">
          Evaluar
        </button>
      </td>
    </tr>
  `).join('');
}

function agregarInstructor() {
  const nombre = document.getElementById('new-inst-nombre').value.trim().toUpperCase();
  const sap = document.getElementById('new-inst-sap').value.trim() || "-";
  const area = document.getElementById('new-inst-area').value.trim();

  if (!nombre || !area) {
    alert("⚠️ Nombre y Área son obligatorios.");
    return;
  }

  const nuevoInst = { id: Date.now(), nombre, sap, area };
  instructores.push(nuevoInst);
  localStorage.setItem('sim_instructores', JSON.stringify(instructores));
  guardarEnGoogle("instructores", nuevoInst.id, nuevoInst);

  document.getElementById('new-inst-nombre').value = "";
  document.getElementById('new-inst-sap').value = "";
  document.getElementById('new-inst-area').value = "";

  renderInstructores();
  mostrarToast("Instructor guardado en Google Cloud");
}

function renderInstructores() {
  const optionsHtml = instructores.map(i => `<option value="${i.nombre} (${i.area})">${i.nombre} — ${i.area}</option>`).join('');
  document.getElementById('select-instructor-area').innerHTML = optionsHtml;
  document.getElementById('cat-select-instructor-area').innerHTML = optionsHtml;

  document.getElementById('tabla-instructores').innerHTML = instructores.map(i => `
    <tr>
      <td class="p-3 font-semibold">${i.nombre}</td>
      <td class="p-3 font-mono text-xs">${i.sap}</td>
      <td class="p-3 text-xs">${i.area}</td>
      <td class="p-3 text-right">
        <button onclick="eliminarInstructor(${i.id})" class="text-rose-500 hover:underline text-xs cursor-pointer">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

function eliminarInstructor(id) {
  instructores = instructores.filter(i => i.id !== id);
  localStorage.setItem('sim_instructores', JSON.stringify(instructores));
  if (db) db.collection("instructores").doc(String(id)).delete().catch(() => {});
  renderInstructores();
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  setTimeout(() => toast.classList.add('translate-y-24', 'opacity-0'), 3500);
}