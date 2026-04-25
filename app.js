// ── I18N (internacionalização) ─────────────────────────────────
const translations = {
  pt: {
    sidebar: { home: "Início", docs: "Documentação", team: "Equipe", support: "Suporte", donate: "Apoie o Projeto" },
    stateCounter: "{count} estado(s) salvo(s)",
    tabs: { linear: "↗ Interpolação Linear", bilinear: "⊞ Interpolação Dupla", states: "≡ Rastreador" },
    linear: {
      title: "Interpolação Linear",
      x1: "X₁ — limite inferior", y1: "Y₁ — propriedade em X₁",
      x2: "X₂ — limite superior", y2: "Y₂ — propriedade em X₂",
      xt: "▶ X alvo — valor desejado",
      xunit: "Grandeza de X", yunit: "Grandeza de Y",
      calc: "Calcular Y →",
      resultLabel: "Resultado",
      savePlaceholder: "Nome do estado (ex: Saída Bomba)",
      saveBtn: "+ Salvar",
      graph: "📈 Ver gráfico",
      lastStates: "Últimos Estados",
      noStates: "Nenhum estado ainda.<br/>Calcule e salve →",
      export: "⬇ Exportar",
      clear: "✕ Limpar tudo"
    },
    bilinear: {
      title: "Interpolação Dupla (Bilinear)",
      desc: "Use para tabelas de vapor superaquecido com duas variáveis (ex: P e T simultaneamente).",
      p1: "P₁ — pressão inferior", p2: "P₂ — pressão superior",
      t1: "T₁ — temp. inferior", t2: "T₂ — temp. superior",
      corners: "Quatro cantos da tabela — Y(P,T)",
      f11: "Y(P₁, T₁)", f12: "Y(P₁, T₂)", f21: "Y(P₂, T₁)", f22: "Y(P₂, T₂)",
      pt: "▶ P alvo", tt: "▶ T alvo",
      xunit: "Grandeza de P/T", yunit: "Grandeza de Y",
      calc: "Calcular Y(P,T) →",
      resultLabel: "Resultado Bilinear",
      savePlaceholder: "Nome do estado (ex: Estado 3)",
      saveBtn: "+ Salvar",
      graph: "📈 Ver gráfico",
      howto: "Como usar",
      example: "Exemplo: Vapor superaquecido a P = 1.2 MPa e T = 250 °C.",
      step1: "Preencha os limites P₁=1.0, P₂=1.5",
      step2: "Preencha os limites T₁=200, T₂=300",
      step3: "Preencha os 4 valores de canto da tabela",
      step4: "Informe P=1.2, T=250 como alvos",
      step5: "Clique Calcular",
      stepsDesc: "A interpolação bilinear faz:<br/>1. Interpola em T para P₁ → R₁<br/>2. Interpola em T para P₂ → R₂<br/>3. Interpola em P entre R₁ e R₂",
      noStates: "Estados salvos aparecem aqui"
    },
    states: {
      title: "Rastreador de Estados — Sessão Completa",
      noStates: "Nenhum estado salvo ainda.<br/>Use os módulos de interpolação para calcular e salvar.",
      export: "⬇ Exportar",
      clear: "✕ Limpar todos os estados"
    },
    docs: {
      title: "Documentação Técnica",
      intro: "Bem-vindo à documentação do ThermoLab...",
      linearTitle: "1. Interpolação Linear",
      linearDesc: "Dados dois pontos (X₁, Y₁) e (X₂, Y₂)...",
      linearFormula: "Y = Y₁ + (Xₜ - X₁) * (Y₂ - Y₁) / (X₂ - X₁)",
      linearApp: "Aplicação típica: propriedades de líquido sub-resfriado...",
      bilinearTitle: "2. Interpolação Bilinear",
      bilinearDesc: "Para tabelas bidimensionais...",
      bilinearSteps: "1. R₁ = f(P₁, Tₜ) via interpolação linear em T\n2. R₂ = f(P₂, Tₜ) via interpolação linear em T\n3. Y = f(Pₜ, Tₜ) via interpolação linear em P entre R₁ e R₂",
      tables: "3. Tabelas Suportadas",
      tablesDesc: "Atualmente, você pode inserir manualmente...",
      update: "Última atualização: abril/2026."
    },
    team: {
      title: "Equipe AAD-Systems",
      credits: "Este projeto nasceu como um trabalho acadêmico..."
    },
    support: {
      title: "Suporte & Feedback",
      desc: "Encontrou um bug? Tem uma ideia de melhoria?",
      contribute: "Toda contribuição é bem-vinda..."
    },
    donate: {
      title: "Apoie o Desenvolvimento",
      desc: "O ThermoLab é gratuito...",
      oneTime: "Apoio único",
      direct: "Doação direta",
      showData: "Ver dados",
      free: "A ferramenta permanece gratuita para uso acadêmico..."
    }
  },
  en: {
    sidebar: { home: "Home", docs: "Documentation", team: "Team", support: "Support", donate: "Support Us" },
    stateCounter: "{count} saved state(s)",
    tabs: { linear: "↗ Linear Interpolation", bilinear: "⊞ Bilinear Interpolation", states: "≡ Tracker" },
    linear: {
      title: "Linear Interpolation",
      x1: "X₁ — lower bound", y1: "Y₁ — property at X₁",
      x2: "X₂ — upper bound", y2: "Y₂ — property at X₂",
      xt: "▶ Target X",
      xunit: "X unit", yunit: "Y unit",
      calc: "Calculate Y →",
      resultLabel: "Result",
      savePlaceholder: "State name (e.g. Pump Outlet)",
      saveBtn: "+ Save",
      graph: "📈 Show plot",
      lastStates: "Last States",
      noStates: "No states yet.<br/>Calculate and save →",
      export: "⬇ Export",
      clear: "✕ Clear all"
    },
    bilinear: {
      title: "Bilinear Interpolation",
      desc: "Use for superheated steam tables with two variables (e.g., P and T).",
      p1: "P₁ — lower pressure", p2: "P₂ — upper pressure",
      t1: "T₁ — lower temp.", t2: "T₂ — upper temp.",
      corners: "Four table corners — Y(P,T)",
      f11: "Y(P₁, T₁)", f12: "Y(P₁, T₂)", f21: "Y(P₂, T₁)", f22: "Y(P₂, T₂)",
      pt: "▶ Target P", tt: "▶ Target T",
      xunit: "P/T unit", yunit: "Y unit",
      calc: "Calculate Y(P,T) →",
      resultLabel: "Bilinear Result",
      savePlaceholder: "State name (e.g. State 3)",
      saveBtn: "+ Save",
      graph: "📈 Show plot",
      howto: "How to use",
      example: "Example: Superheated steam at P=1.2 MPa, T=250 °C.",
      step1: "Set limits P₁=1.0, P₂=1.5",
      step2: "Set limits T₁=200, T₂=300",
      step3: "Fill the four corner values from table",
      step4: "Enter P=1.2, T=250 as targets",
      step5: "Click Calculate",
      stepsDesc: "Bilinear interpolation steps:<br/>1. Interpolate in T for P₁ → R₁<br/>2. Interpolate in T for P₂ → R₂<br/>3. Interpolate in P between R₁ and R₂",
      noStates: "Saved states appear here"
    },
    states: {
      title: "State Tracker — Full Session",
      noStates: "No states saved yet.<br/>Use the interpolation modules to calculate and save.",
      export: "⬇ Export",
      clear: "✕ Clear all states"
    },
    docs: {
      title: "Technical Documentation",
      intro: "Welcome to ThermoLab documentation...",
      linearTitle: "1. Linear Interpolation",
      linearDesc: "Given two points (X₁, Y₁) and (X₂, Y₂)...",
      linearFormula: "Y = Y₁ + (X_target - X₁) * (Y₂ - Y₁) / (X₂ - X₁)",
      linearApp: "Typical application: subcooled liquid properties...",
      bilinearTitle: "2. Bilinear Interpolation",
      bilinearDesc: "For two-dimensional tables...",
      bilinearSteps: "1. R₁ = f(P₁, T_target) by linear interpolation in T\n2. R₂ = f(P₂, T_target) by linear interpolation in T\n3. Y = f(P_target, T_target) by linear interpolation in P between R₁ and R₂",
      tables: "3. Supported Tables",
      tablesDesc: "Currently, you can manually input saturated and superheated steam table data. Future integration with CoolProp will allow direct equation-of-state calls.",
      update: "Last update: April 2026."
    },
    team: {
      title: "AAD-Systems Team",
      credits: "This project started as an academic assignment supervised by Prof. Dr. Frede..."
    },
    support: {
      title: "Support & Feedback",
      desc: "Found a bug? Have an idea?",
      contribute: "Contributions are welcome..."
    },
    donate: {
      title: "Support Development",
      desc: "ThermoLab is free and open source...",
      oneTime: "One-time support",
      direct: "Direct donation",
      showData: "Show details",
      free: "The tool remains free for academic use..."
    }
  },
  zh: {
    sidebar: { home: "首页", docs: "文档", team: "团队", support: "支持", donate: "支持我们" },
    stateCounter: "{count} 个保存的状态",
    tabs: { linear: "↗ 线性插值", bilinear: "⊞ 双线性插值", states: "≡ 跟踪器" },
    // ... (adicione as traduções completas, omitidas aqui por brevidade, mas siga o padrão)
  }
};

let currentLang = localStorage.getItem('thermolab_lang') || 'pt';
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('thermolab_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = getNestedTranslation(translations[lang], key);
    if (txt) el.innerHTML = txt;
  });
  // Atualiza contador de estados
  updateStateCounterText();
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function t(key) {
  return getNestedTranslation(translations[currentLang], key) || key;
}

function updateStateCounterText() {
  const counter = document.getElementById('stateCounter');
  if (counter) {
    const count = states.length;
    const template = translations[currentLang].stateCounter.replace('{count}', count);
    counter.textContent = template;
  }
}

// ── TEMA ESCURO ───────────────────────────────────────────────
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('thermolab_dark', isDark ? '1' : '0');
  const icon = document.querySelector('#dark-mode-toggle i');
  if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function initDarkMode() {
  const saved = localStorage.getItem('thermolab_dark');
  if (saved === '1') {
    document.body.classList.add('dark');
    const icon = document.querySelector('#dark-mode-toggle i');
    if (icon) icon.className = 'fas fa-sun';
  }
}

// ── SIDEBAR NAVIGATION ───────────────────────────────────────
function switchSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
  const section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  const activeLink = document.querySelector(`.sidebar-link[data-section="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
}

// ── STATE STORAGE (ORIGINAL) ─────────────────────────────────
const STORAGE_KEY = 'thermolab_states_v2';
let states = [];

function loadStates() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) states = JSON.parse(raw);
  } catch(e) { states = []; }
  renderAll();
}

function persistStates() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
  renderAll();
}

function pushState(name, xLabel, yValue, yUnit, formula, method) {
  const now = new Date();
  states.push({ id: Date.now(), name, xLabel, yValue, yUnit, formula, method, time: now.toLocaleTimeString('pt-BR'), date: now.toLocaleDateString('pt-BR') });
  persistStates();
  showToast('Estado salvo: ' + name);
}

function deleteState(id) {
  states = states.filter(s => s.id !== id);
  persistStates();
}

function clearAll() {
  if (!states.length) return;
  if (!confirm('Apagar todos os ' + states.length + ' estados?')) return;
  states = [];
  persistStates();
  showToast('Sessão limpa', 'error');
}

function stateCardHTML(s, idx) {
  return `
    <div class="state-card">
      <div class="state-card-header">
        <div class="state-name">[E${idx+1}] ${esc(s.name)}</div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="state-num">${s.method || 'linear'}</span>
          <button class="delete-btn" onclick="deleteState(${s.id})">✕</button>
        </div>
      </div>
      <div class="state-values">${s.xLabel ? s.xLabel + ' → ' : ''}Y = <b>${s.yValue}</b> ${s.yUnit}</div>
      <div class="state-meta"><span class="state-time">${s.date} ${s.time}</span></div>
    </div>`;
}

function emptyHTML() { return '<div class="state-empty">' + t('linear.noStates') + '</div>'; }

function renderAll() {
  const html = states.length ? states.map((s, i) => stateCardHTML(s, i)).join('') : emptyHTML();
  ['l-preview', 'b-preview', 'states-full'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
  updateStateCounterText();
}

function esc(str) { return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// ── LINEAR INTERPOLATION ─────────────────────────────────────
let linearResult = null;
function calcLinear() {
  const x1 = parseFloat(document.getElementById('l-x1').value);
  const y1 = parseFloat(document.getElementById('l-y1').value);
  const x2 = parseFloat(document.getElementById('l-x2').value);
  const y2 = parseFloat(document.getElementById('l-y2').value);
  const xT = parseFloat(document.getElementById('l-xT').value);
  const xUnit = document.getElementById('l-xUnit').value;
  const yUnit = document.getElementById('l-yUnit').value;
  const box = document.getElementById('l-result');

  if ([x1, y1, x2, y2, xT].some(isNaN)) { showError(box, 'Preencha todos os campos.'); linearResult = null; return; }
  if (x1 === x2) { showError(box, 'X₁ e X₂ não podem ser iguais.'); linearResult = null; return; }

  const y = y1 + (xT - x1) * (y2 - y1) / (x2 - x1);
  const formula = `y = ${y1} + (${xT} - ${x1}) × (${y2} - ${y1}) / (${x2} - ${x1})`;
  linearResult = { xLabel: `X = ${xT} ${xUnit}`, yValue: round(y), yUnit, formula, x1,y1,x2,y2,xT,xUnit,yUnit };
  box.className = 'result-box visible success';
  document.getElementById('l-value').className = 'result-value';
  document.getElementById('l-value').textContent = round(y);
  document.getElementById('l-unit-display').textContent = yUnit;
  document.getElementById('l-formula').textContent = formula;
}

function saveFromLinear() {
  if (!linearResult) { showToast('Calcule primeiro.', 'error'); return; }
  const name = document.getElementById('l-saveName').value.trim() || 'Estado sem nome';
  pushState(name, linearResult.xLabel, linearResult.yValue, linearResult.yUnit, linearResult.formula, 'linear');
  document.getElementById('l-saveName').value = '';
}

// ── BILINEAR INTERPOLATION ───────────────────────────────────
let bilinearResult = null;
function calcBilinear() {
  const p1 = parseFloat(document.getElementById('b-p1').value);
  const p2 = parseFloat(document.getElementById('b-p2').value);
  const t1 = parseFloat(document.getElementById('b-t1').value);
  const t2 = parseFloat(document.getElementById('b-t2').value);
  const f11 = parseFloat(document.getElementById('b-f11').value);
  const f12 = parseFloat(document.getElementById('b-f12').value);
  const f21 = parseFloat(document.getElementById('b-f21').value);
  const f22 = parseFloat(document.getElementById('b-f22').value);
  const pT = parseFloat(document.getElementById('b-pT').value);
  const tT = parseFloat(document.getElementById('b-tT').value);
  const yUnit = document.getElementById('b-yUnit').value;
  const box = document.getElementById('b-result');

  if ([p1,p2,t1,t2,f11,f12,f21,f22,pT,tT].some(isNaN)) { showError(box, 'Preencha todos os campos.'); bilinearResult = null; return; }
  if (p1 === p2) { showError(box, 'P₁ e P₂ não podem ser iguais.'); bilinearResult = null; return; }
  if (t1 === t2) { showError(box, 'T₁ e T₂ não podem ser iguais.'); bilinearResult = null; return; }

  const r1 = f11 + (tT - t1) * (f12 - f11) / (t2 - t1);
  const r2 = f21 + (tT - t1) * (f22 - f21) / (t2 - t1);
  const y  = r1  + (pT - p1) * (r2  - r1)  / (p2 - p1);
  const formula = `Passo 1 — interpola em T:\n  R₁ = Y(P₁,tT) = ${f11} + (${tT}-${t1})×(${f12}-${f11})/(${t2}-${t1}) = ${round(r1)}\n  R₂ = Y(P₂,tT) = ${f21} + (${tT}-${t1})×(${f22}-${f21})/(${t2}-${t1}) = ${round(r2)}\nPasso 2 — interpola em P:\n  Y = ${round(r1)} + (${pT}-${p1})×(${round(r2)}-${round(r1)})/(${p2}-${p1})`;
  bilinearResult = { xLabel: `P=${pT}, T=${tT}`, yValue: round(y), yUnit, formula, p1,p2,t1,t2,f11,f12,f21,f22,pT,tT,r1,r2 };
  box.className = 'result-box visible success';
  document.getElementById('b-value').className = 'result-value';
  document.getElementById('b-value').textContent = round(y);
  document.getElementById('b-unit-display').textContent = yUnit;
  document.getElementById('b-formula').textContent = formula;
}

function saveFromBilinear() {
  if (!bilinearResult) { showToast('Calcule primeiro.', 'error'); return; }
  const name = document.getElementById('b-saveName').value.trim() || 'Estado sem nome';
  pushState(name, bilinearResult.xLabel, bilinearResult.yValue, bilinearResult.yUnit, bilinearResult.formula, 'bilinear');
  document.getElementById('b-saveName').value = '';
}

// ── EXPORTAR (TXT, PDF, DOCX) ────────────────────────────────
function exportData(context) {
  const format = document.getElementById(`export-format-${context}`).value;
  if (!states.length) { showToast('Nenhum estado para exportar.', 'error'); return; }

  const now = new Date().toLocaleString('pt-BR');
  const lines = [
    'RELATORIO DE CICLO TERMICO - THERMOLAB v0.2.0',
    'Arvexa Technologies | UFAL',
    'Gerado em: ' + now,
    '============================================================',
    ''
  ];
  states.forEach((s, i) => {
    lines.push(`ESTADO ${i+1}: ${s.name}`);
    lines.push(`  Metodo: ${s.method}`);
    if (s.xLabel) lines.push(`  Entrada: ${s.xLabel}`);
    lines.push(`  Resultado: ${s.yValue} ${s.yUnit}`);
    lines.push(`  Salvo em: ${s.date} ${s.time}`);
    if (s.formula) { lines.push('  Formula:'); s.formula.split('\n').forEach(l => lines.push('    ' + l)); }
    lines.push('');
  });
  lines.push('============================================================', 'FIM DO RELATORIO');

  if (format === 'txt') {
    const BOM = '\uFEFF';
    const content = BOM + lines.join('\r\n');
    downloadBlob(content, 'thermolab_sessao.txt', 'text/plain;charset=utf-8');
  } else if (format === 'pdf') {
    // jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;
    doc.setFontSize(12);
    lines.forEach(line => {
      if (y > 280) { doc.addPage(); y = 10; }
      doc.text(line, 10, y);
      y += 7;
    });
    doc.save('thermolab_sessao.pdf');
  } else if (format === 'docx') {
    // docx
    const { Document, Packer, Paragraph, TextRun } = docx;
    const children = lines.map(text => new Paragraph({ children: [new TextRun(text)] }));
    const doc = new Document({ sections: [{ properties: {}, children }] });
    Packer.toBlob(doc).then(blob => {
      downloadBlob(blob, 'thermolab_sessao.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    });
  }
}

function downloadBlob(content, filename, mimeType) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Exportado como ' + filename.split('.').pop());
}

// ── GRÁFICOS ─────────────────────────────────────────────────
function showLinearGraph() {
  if (!linearResult) { showToast('Calcule primeiro.', 'error'); return; }
  const { x1,y1,x2,y2,xT, yValue, yUnit } = linearResult;
  const modal = document.getElementById('graph-modal');
  const canvas = document.getElementById('graph-canvas');
  const ctx = canvas.getContext('2d');
  document.getElementById('graph-title').textContent = 'Interpolação Linear';

  if (window._linearChart) window._linearChart.destroy();
  window._linearChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Pontos conhecidos',
        data: [{x: x1, y: y1}, {x: x2, y: y2}],
        backgroundColor: 'blue',
        pointRadius: 6
      }, {
        label: 'Interpolação',
        data: [{x: xT, y: yValue}],
        backgroundColor: 'red',
        pointRadius: 8
      }]
    },
    options: { responsive: true }
  });
  modal.classList.add('open');
}

function showBilinearGraph() {
  if (!bilinearResult) { showToast('Calcule primeiro.', 'error'); return; }
  const { p1,p2,t1,t2,f11,f12,f21,f22,pT,tT, yValue } = bilinearResult;
  // Desenha uma representação 2D simplificada no canvas
  const modal = document.getElementById('graph-modal');
  const canvas = document.getElementById('graph-canvas');
  const ctx = canvas.getContext('2d');
  document.getElementById('graph-title').textContent = 'Interpolação Bilinear';
  canvas.width = 600; canvas.height = 400;
  ctx.clearRect(0,0,600,400);

  // Desenha os quatro cantos
  const corners = [
    {x: p1, y: t1, val: f11, label: 'f11'},
    {x: p1, y: t2, val: f12, label: 'f12'},
    {x: p2, y: t1, val: f21, label: 'f21'},
    {x: p2, y: t2, val: f22, label: 'f22'}
  ];
  // Mapeia coordenadas para posições no canvas
  const xScale = (val) => 100 + (val - p1) / (p2 - p1) * 400;
  const yScale = (val) => 250 - (val - t1) / (t2 - t1) * 200;

  corners.forEach(c => {
    ctx.beginPath(); ctx.arc(xScale(c.x), yScale(c.y), 15, 0, 2*Math.PI);
    ctx.fillStyle = 'rgba(54, 162, 235, 0.6)'; ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'black'; ctx.font = '12px Arial'; ctx.fillText(`${c.label}=${c.val}`, xScale(c.x)+12, yScale(c.y)+5);
  });
  // Ponto alvo
  ctx.beginPath(); ctx.arc(xScale(pT), yScale(tT), 18, 0, 2*Math.PI);
  ctx.fillStyle = 'rgba(255, 99, 132, 0.7)'; ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'white'; ctx.font = 'bold 12px Arial'; ctx.fillText(`Y=${yValue}`, xScale(pT)+15, yScale(tT)-10);

  modal.classList.add('open');
}

function closeGraphModal() {
  document.getElementById('graph-modal').classList.remove('open');
  if (window._linearChart) { window._linearChart.destroy(); window._linearChart = null; }
}

// ── TABS ─────────────────────────────────────────────────────
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
}

// ── HELPERS ──────────────────────────────────────────────────
function round(n) { return parseFloat(n.toFixed(4)); }
function showError(box, msg) {
  box.className = 'result-box visible error';
  const valEl = box.querySelector('.result-value') || document.createElement('div');
  valEl.className = 'result-value error'; valEl.textContent = '⚠ ' + msg;
  const formulaEl = box.querySelector('.result-formula'); if (formulaEl) formulaEl.textContent = '';
  const unitEl = box.querySelector('.result-unit'); if (unitEl) unitEl.textContent = '';
}
let toastTimer;
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type === 'error' ? ' error' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ── CLOCK ────────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toLocaleString('pt-BR');
}
setInterval(updateClock, 1000);
updateClock();

// ── INICIALIZAÇÃO ────────────────────────────────────────────
function init() {
  // Sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('data-section');
      switchSection(section);
    });
  });

  // Toggle mobile
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Dark mode toggle
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

  // Language selector
  const langSelect = document.getElementById('language-select');
  langSelect.value = currentLang;
  langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

  // Fecha sidebar ao clicar fora (mobile)
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== document.getElementById('sidebarToggle')) {
      sidebar.classList.remove('open');
    }
  });

  initDarkMode();
  setLanguage(currentLang);
  loadStates();
}

document.addEventListener('DOMContentLoaded', init);
