// ═══════════════════════════════════════════════════════════════════
// ThermoLab v0.2.0-alpha – Motor de Interpolação Termodinâmica
// Arvexa Technologies · UFAL
// Módulo principal de lógica (app.js)
// ═══════════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────────
// 1. INTERNACIONALIZAÇÃO (i18n)
// ────────────────────────────────────────────────────────────────
const translations = {
  pt: {
    sidebar: { home: "Início", docs: "Documentação", team: "Equipe", support: "Suporte", donate: "Apoie o Projeto" },
    stateCounter: "{count} estado(s) salvo(s)",
    tabs: { linear: "↗ Interpolação Linear", bilinear: "⊞ Interpolação Dupla", states: "≡ Rastreador" },
    linear: {
      title: "Interpolação Linear",
      x1: "X₁ — limite inferior",
      y1: "Y₁ — propriedade em X₁",
      x2: "X₂ — limite superior",
      y2: "Y₂ — propriedade em X₂",
      xt: "▶ X alvo — valor desejado",
      xunit: "Grandeza de X",
      yunit: "Grandeza de Y",
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
      p1: "P₁ — pressão inferior",
      p2: "P₂ — pressão superior",
      t1: "T₁ — temp. inferior",
      t2: "T₂ — temp. superior",
      corners: "Quatro cantos da tabela — Y(P,T)",
      f11: "Y(P₁, T₁)",
      f12: "Y(P₁, T₂)",
      f21: "Y(P₂, T₁)",
      f22: "Y(P₂, T₂)",
      pt: "▶ P alvo",
      tt: "▶ T alvo",
      xunit: "Grandeza de P/T",
      yunit: "Grandeza de Y",
      calc: "Calcular Y(P,T) →",
      resultLabel: "Resultado Bilinear",
      savePlaceholder: "Nome do estado (ex: Estado 3)",
      saveBtn: "+ Salvar",
      graph: "📈 Ver gráfico 3D",
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
      intro: "Bem-vindo à documentação do ThermoLab. Aqui você encontra as bases teóricas e guias práticos para utilizar os módulos de interpolação.",
      linearTitle: "1. Interpolação Linear",
      linearDesc: "Dados dois pontos (X₁, Y₁) e (X₂, Y₂), o valor interpolado em Xₜ é obtido por:",
      linearFormula: "Y = Y₁ + (Xₜ - X₁) * (Y₂ - Y₁) / (X₂ - X₁)",
      linearApp: "Aplicação típica: propriedades de líquido sub-resfriado quando a variação com a temperatura é aproximadamente linear.",
      bilinearTitle: "2. Interpolação Bilinear",
      bilinearDesc: "Para tabelas bidimensionais (ex.: vapor superaquecido), a interpolação é feita em três passos:",
      bilinearSteps: "1. R₁ = f(P₁, Tₜ) via interpolação linear em T\n2. R₂ = f(P₂, Tₜ) via interpolação linear em T\n3. Y = f(Pₜ, Tₜ) via interpolação linear em P entre R₁ e R₂",
      tables: "3. Tabelas Suportadas",
      tablesDesc: "Atualmente, você pode inserir manualmente os dados de tabelas de vapor saturado e superaquecido. A futura integração com CoolProp permitirá chamadas diretas às equações de estado.",
      update: "Última atualização: abril/2026."
    },
    team: {
      title: "Equipe AAD-Systems",
      credits: "Este projeto nasceu como um trabalho acadêmico e foi evoluindo para uma ferramenta open source de referência para estudantes e engenheiros."
    },
    support: {
      title: "Suporte & Feedback",
      desc: "Encontrou um bug? Tem uma ideia de melhoria? Quer contribuir com código?",
      contribute: "Toda contribuição é bem-vinda. Siga o guia de contribuição no repositório para enviar pull requests."
    },
    donate: {
      title: "Apoie o Desenvolvimento",
      desc: "O ThermoLab é gratuito e de código aberto. Sua contribuição ajuda a cobrir custos de infraestrutura e a implementar novas bibliotecas (ex.: CoolProp).",
      oneTime: "Apoio único",
      direct: "Doação direta",
      showData: "Ver dados",
      free: "A ferramenta permanece gratuita para uso acadêmico. Toda ajuda é destinada à manutenção e evolução do projeto."
    }
  },
  en: {
    sidebar: { home: "Home", docs: "Documentation", team: "Team", support: "Support", donate: "Support Us" },
    stateCounter: "{count} saved state(s)",
    tabs: { linear: "↗ Linear Interpolation", bilinear: "⊞ Bilinear Interpolation", states: "≡ Tracker" },
    linear: {
      title: "Linear Interpolation",
      x1: "X₁ — lower bound",
      y1: "Y₁ — property at X₁",
      x2: "X₂ — upper bound",
      y2: "Y₂ — property at X₂",
      xt: "▶ Target X",
      xunit: "X unit",
      yunit: "Y unit",
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
      p1: "P₁ — lower pressure",
      p2: "P₂ — upper pressure",
      t1: "T₁ — lower temp.",
      t2: "T₂ — upper temp.",
      corners: "Four table corners — Y(P,T)",
      f11: "Y(P₁, T₁)",
      f12: "Y(P₁, T₂)",
      f21: "Y(P₂, T₁)",
      f22: "Y(P₂, T₂)",
      pt: "▶ Target P",
      tt: "▶ Target T",
      xunit: "P/T unit",
      yunit: "Y unit",
      calc: "Calculate Y(P,T) →",
      resultLabel: "Bilinear Result",
      savePlaceholder: "State name (e.g. State 3)",
      saveBtn: "+ Save",
      graph: "📈 Show 3D plot",
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
      intro: "Welcome to ThermoLab documentation. Here you will find the theoretical basis and practical guides to use the interpolation modules.",
      linearTitle: "1. Linear Interpolation",
      linearDesc: "Given two points (X₁, Y₁) and (X₂, Y₂), the interpolated value at Xₜ is obtained by:",
      linearFormula: "Y = Y₁ + (Xₜ - X₁) * (Y₂ - Y₁) / (X₂ - X₁)",
      linearApp: "Typical application: subcooled liquid properties when temperature variation is approximately linear.",
      bilinearTitle: "2. Bilinear Interpolation",
      bilinearDesc: "For two-dimensional tables (e.g. superheated steam), interpolation is performed in three steps:",
      bilinearSteps: "1. R₁ = f(P₁, Tₜ) by linear interpolation in T\n2. R₂ = f(P₂, Tₜ) by linear interpolation in T\n3. Y = f(Pₜ, Tₜ) by linear interpolation in P between R₁ and R₂",
      tables: "3. Supported Tables",
      tablesDesc: "Currently, you can manually input saturated and superheated steam table data. Future integration with CoolProp will allow direct equation-of-state calls.",
      update: "Last update: April 2026."
    },
    team: {
      title: "AAD-Systems Team",
      credits: "This project started as an academic and evolving into a reference open source tool for students and engineers."
    },
    support: {
      title: "Support & Feedback",
      desc: "Found a bug? Have an improvement idea? Want to contribute with code?",
      contribute: "All contributions are welcome. Follow the contribution guide in the repository to submit pull requests."
    },
    donate: {
      title: "Support Development",
      desc: "ThermoLab is free and open source. Your contribution helps cover infrastructure costs and implement new libraries (e.g., CoolProp).",
      oneTime: "One-time support",
      direct: "Direct donation",
      showData: "Show details",
      free: "The tool remains free for academic use. All help is intended for maintenance and project evolution."
    }
  },
  zh: {
    sidebar: { home: "首页", docs: "文档", team: "团队", support: "支持", donate: "支持我们" },
    stateCounter: "{count} 个保存的状态",
    tabs: { linear: "↗ 线性插值", bilinear: "⊞ 双线性插值", states: "≡ 追踪器" },
    linear: {
      title: "线性插值",
      x1: "X₁ — 下限",
      y1: "Y₁ — X₁处的属性",
      x2: "X₂ — 上限",
      y2: "Y₂ — X₂处的属性",
      xt: "▶ 目标 X",
      xunit: "X 单位",
      yunit: "Y 单位",
      calc: "计算 Y →",
      resultLabel: "结果",
      savePlaceholder: "状态名称（例如：泵出口）",
      saveBtn: "+ 保存",
      graph: "📈 查看图表",
      lastStates: "最近状态",
      noStates: "暂无状态。<br/>请计算并保存 →",
      export: "⬇ 导出",
      clear: "✕ 全部清除"
    },
    bilinear: {
      title: "双线性插值",
      desc: "用于具有两个变量的过热蒸汽表（例如：P 和 T）。",
      p1: "P₁ — 较低压力",
      p2: "P₂ — 较高压力",
      t1: "T₁ — 较低温度",
      t2: "T₂ — 较高温度",
      corners: "表格四个角 — Y(P,T)",
      f11: "Y(P₁, T₁)",
      f12: "Y(P₁, T₂)",
      f21: "Y(P₂, T₁)",
      f22: "Y(P₂, T₂)",
      pt: "▶ 目标 P",
      tt: "▶ 目标 T",
      xunit: "P/T 单位",
      yunit: "Y 单位",
      calc: "计算 Y(P,T) →",
      resultLabel: "双线性结果",
      savePlaceholder: "状态名称（例如：状态 3）",
      saveBtn: "+ 保存",
      graph: "📈 查看 3D 图表",
      howto: "使用方法",
      example: "示例：过热蒸汽，P=1.2 MPa，T=250 °C。",
      step1: "填写下限 P₁=1.0，P₂=1.5",
      step2: "填写下限 T₁=200，T₂=300",
      step3: "填写表格中的四个角值",
      step4: "输入目标 P=1.2，T=250",
      step5: "点击计算",
      stepsDesc: "双线性插值步骤：<br/>1. 对 P₁ 进行 T 插值 → R₁<br/>2. 对 P₂ 进行 T 插值 → R₂<br/>3. 在 P 方向上于 R₁ 与 R₂ 之间插值",
      noStates: "此处显示已保存的状态"
    },
    states: {
      title: "状态追踪器 — 完整会话",
      noStates: "尚未保存任何状态。<br/>请使用插值模块进行计算并保存。",
      export: "⬇ 导出",
      clear: "✕ 清除所有状态"
    },
    docs: {
      title: "技术文档",
      intro: "欢迎查阅 ThermoLab 文档。在这里您可以找到插值模块的理论基础和实践指南。",
      linearTitle: "1. 线性插值",
      linearDesc: "给定两点 (X₁, Y₁) 和 (X₂, Y₂)，目标 Xₜ 处的插值通过以下公式获得：",
      linearFormula: "Y = Y₁ + (Xₜ - X₁) * (Y₂ - Y₁) / (X₂ - X₁)",
      linearApp: "典型应用：过冷液体性质，当温度变化近似线性时。",
      bilinearTitle: "2. 双线性插值",
      bilinearDesc: "对于二维表格（例如过热蒸汽），插值分三步进行：",
      bilinearSteps: "1. R₁ = f(P₁, Tₜ) 通过 T 方向线性插值\n2. R₂ = f(P₂, Tₜ) 通过 T 方向线性插值\n3. Y = f(Pₜ, Tₜ) 通过 P 方向在 R₁ 与 R₂ 之间线性插值",
      tables: "3. 支持的表格",
      tablesDesc: "目前，您可以手动输入饱和蒸汽和过热蒸汽表格数据。未来集成 CoolProp 将允许直接调用状态方程。",
      update: "最后更新：2026 年 4 月。"
    },
    team: {
      title: "AAD-Systems 团队",
      credits: "该项目起源于 指导的一项学术作业，现已发展成为面向学生和工程师的参考开源工具。"
    },
    support: {
      title: "支持与反馈",
      desc: "发现错误？有改进想法？想贡献代码？",
      contribute: "欢迎所有贡献。请按照仓库中的贡献指南提交拉取请求。"
    },
    donate: {
      title: "支持开发",
      desc: "ThermoLab 是免费且开源的。您的贡献有助于覆盖基础设施成本并实施新库（例如 CoolProp）。",
      oneTime: "一次性支持",
      direct: "直接捐赠",
      showData: "显示详情",
      free: "该工具对学术用途保持免费。所有帮助均用于维护和项目发展。"
    }
  }
};

let currentLang = localStorage.getItem('thermolab_lang') || 'pt';

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function t(key) {
  return getNestedTranslation(translations[currentLang], key) ||
         getNestedTranslation(translations.pt, key) || key; // fallback para pt
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('thermolab_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = t(key);
    if (txt) el.innerHTML = txt;
  });
  // Atualiza contador de estados e textos que dependem de t()
  renderAll(); // re-renderiza toda a interface com novo idioma
}

function updateStateCounterText() {
  const counter = document.getElementById('stateCounter');
  if (counter) {
    const count = states.length;
    const template = t('stateCounter').replace('{count}', count);
    counter.textContent = template;
  }
}




// ─────────────── MODAL DE BOAS-VINDAS / CHANGELOG ───────────────
(function() {
  const STORAGE_KEY = 'thermolab_welcome_agreed';
  const modal = document.getElementById('welcomeModal');
  if (!modal) return;

  function hideModal() {
    modal.style.display = 'none';
  }

  function agreeAndClose() {
    localStorage.setItem(STORAGE_KEY, 'true');
    hideModal();
  }

  // Se já concordou, esconde o modal imediatamente
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    hideModal();
  } else {
    // Garante que o modal esteja visível (caso algum script anterior tenha escondido)
    modal.style.display = 'flex';
  }

  // Configura os eventos após o DOM estar pronto
  function bindEvents() {
    const agreeBtn = document.getElementById('agreeBtn');
    const closeBtn = document.getElementById('closeWelcomeBtn');
    const overlay = modal.querySelector('.welcome-modal-overlay');
    if (agreeBtn) agreeBtn.addEventListener('click', agreeAndClose);
    if (closeBtn) closeBtn.addEventListener('click', agreeAndClose);
    if (overlay) overlay.addEventListener('click', agreeAndClose);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEvents);
  } else {
    bindEvents();
  }
})();



// ────────────────────────────────────────────────────────────────
// 2. TEMA ESCURO
// ────────────────────────────────────────────────────────────────
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('thermolab_dark', isDark ? '1' : '0');
  const icon = document.querySelector('#dark-mode-toggle i');
  if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  // Atualiza gráfico se estiver aberto (linear)
  if (window._linearChart) {
    updateChartColors();
  }
}

function initDarkMode() {
  const saved = localStorage.getItem('thermolab_dark');
  if (saved === '1') {
    document.body.classList.add('dark');
    const icon = document.querySelector('#dark-mode-toggle i');
    if (icon) icon.className = 'fas fa-sun';
  }
}

function updateChartColors() {
  if (!window._linearChart) return;
  const isDark = document.body.classList.contains('dark');
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = isDark ? '#f1f5f9' : '#0f172a';
  window._linearChart.options.scales.x.grid.color = gridColor;
  window._linearChart.options.scales.y.grid.color = gridColor;
  window._linearChart.options.scales.x.ticks.color = textColor;
  window._linearChart.options.scales.y.ticks.color = textColor;
  window._linearChart.update();
}

// ────────────────────────────────────────────────────────────────
// 3. NAVEGAÇÃO DA SIDEBAR
// ────────────────────────────────────────────────────────────────
function switchSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
  const section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  const activeLink = document.querySelector(`.sidebar-link[data-section="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
}

// ────────────────────────────────────────────────────────────────
// 4. GERENCIAMENTO DE ESTADOS (ORIGINAL)
// ────────────────────────────────────────────────────────────────
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
  states.push({
    id: Date.now(),
    name,
    xLabel,
    yValue,
    yUnit,
    formula,
    method,
    time: now.toLocaleTimeString('pt-BR'),
    date: now.toLocaleDateString('pt-BR')
  });
  persistStates();
  showToast('Estado salvo: ' + name);
}

function deleteState(id) {
  states = states.filter(s => s.id !== id);
  persistStates();
}

function clearAll() {
  if (!states.length) return;
  if (!confirm(t('confirmClear') || 'Apagar todos os ' + states.length + ' estados?')) return;
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

function emptyHTML() {
  return `<div class="state-empty">${t('linear.noStates')}</div>`;
}

function renderAll() {
  const html = states.length ? states.map((s, i) => stateCardHTML(s, i)).join('') : emptyHTML();
  ['l-preview', 'b-preview', 'states-full'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });
  updateStateCounterText();
}

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ────────────────────────────────────────────────────────────────
// 5. INTERPOLAÇÃO LINEAR (ORIGINAL + MELHORIAS)
// ────────────────────────────────────────────────────────────────
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

  if ([x1, y1, x2, y2, xT].some(isNaN)) {
    showError(box, 'Preencha todos os campos.');
    linearResult = null;
    return;
  }
  if (x1 === x2) {
    showError(box, 'X₁ e X₂ não podem ser iguais.');
    linearResult = null;
    return;
  }

  const y = y1 + (xT - x1) * (y2 - y1) / (x2 - x1);
  const formula = `y = ${y1} + (${xT} - ${x1}) × (${y2} - ${y1}) / (${x2} - ${x1})`;

  linearResult = {
    xLabel: `X = ${xT} ${xUnit}`,
    yValue: round(y),
    yUnit,
    formula,
    x1, y1, x2, y2, xT, xUnit, yUnit
  };

  box.className = 'result-box visible success';
  document.getElementById('l-value').className = 'result-value';
  document.getElementById('l-value').textContent = round(y);
  document.getElementById('l-unit-display').textContent = yUnit;
  document.getElementById('l-formula').textContent = formula;

  // Se o gráfico estiver aberto, atualiza automaticamente
  if (document.getElementById('graph-modal').classList.contains('open')) {
    showLinearGraph();
  }
}

function saveFromLinear() {
  if (!linearResult) {
    showToast('Calcule primeiro.', 'error');
    return;
  }
  const name = document.getElementById('l-saveName').value.trim() || 'Estado sem nome';
  pushState(name, linearResult.xLabel, linearResult.yValue, linearResult.yUnit, linearResult.formula, 'linear');
  document.getElementById('l-saveName').value = '';
}

// ────────────────────────────────────────────────────────────────
// 6. INTERPOLAÇÃO BILINEAR (ORIGINAL + MELHORIAS)
// ────────────────────────────────────────────────────────────────
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

  if ([p1, p2, t1, t2, f11, f12, f21, f22, pT, tT].some(isNaN)) {
    showError(box, 'Preencha todos os campos.');
    bilinearResult = null;
    return;
  }
  if (p1 === p2) {
    showError(box, 'P₁ e P₂ não podem ser iguais.');
    bilinearResult = null;
    return;
  }
  if (t1 === t2) {
    showError(box, 'T₁ e T₂ não podem ser iguais.');
    bilinearResult = null;
    return;
  }

  const r1 = f11 + (tT - t1) * (f12 - f11) / (t2 - t1);
  const r2 = f21 + (tT - t1) * (f22 - f21) / (t2 - t1);
  const y  = r1  + (pT - p1) * (r2  - r1)  / (p2 - p1);

  const formula =
    `Passo 1 — interpola em T:\n` +
    `  R₁ = Y(P₁,tT) = ${f11} + (${tT}-${t1})×(${f12}-${f11})/(${t2}-${t1}) = ${round(r1)}\n` +
    `  R₂ = Y(P₂,tT) = ${f21} + (${tT}-${t1})×(${f22}-${f21})/(${t2}-${t1}) = ${round(r2)}\n` +
    `Passo 2 — interpola em P:\n` +
    `  Y = ${round(r1)} + (${pT}-${p1})×(${round(r2)}-${round(r1)})/(${p2}-${p1})`;

  bilinearResult = {
    xLabel: `P=${pT}, T=${tT}`,
    yValue: round(y),
    yUnit,
    formula,
    p1, p2, t1, t2, f11, f12, f21, f22, pT, tT, r1, r2
  };

  box.className = 'result-box visible success';
  document.getElementById('b-value').className = 'result-value';
  document.getElementById('b-value').textContent = round(y);
  document.getElementById('b-unit-display').textContent = yUnit;
  document.getElementById('b-formula').textContent = formula;

  if (document.getElementById('graph-modal').classList.contains('open')) {
    showBilinearGraph();
  }
}

function saveFromBilinear() {
  if (!bilinearResult) {
    showToast('Calcule primeiro.', 'error');
    return;
  }
  const name = document.getElementById('b-saveName').value.trim() || 'Estado sem nome';
  pushState(name, bilinearResult.xLabel, bilinearResult.yValue, bilinearResult.yUnit, bilinearResult.formula, 'bilinear');
  document.getElementById('b-saveName').value = '';
}

// ────────────────────────────────────────────────────────────────
// 7. EXPORTAÇÃO (TXT, PDF, DOCX) – ORIGINAL + VERIFICAÇÕES
// ────────────────────────────────────────────────────────────────
function exportData(context) {
  const formatEl = document.getElementById(`export-format-${context}`);
  if (!formatEl) {
    showToast('Seletor de formato não encontrado.', 'error');
    return;
  }
  const format = formatEl.value;
  if (!states.length) {
    showToast('Nenhum estado para exportar.', 'error');
    return;
  }

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
    if (s.formula) {
      lines.push('  Formula:');
      s.formula.split('\n').forEach(l => lines.push('    ' + l));
    }
    lines.push('');
  });
  lines.push('============================================================', 'FIM DO RELATORIO');

  if (format === 'txt') {
    const BOM = '\uFEFF';
    const content = BOM + lines.join('\r\n');
    downloadBlob(content, `thermolab_sessao_${Date.now()}.txt`, 'text/plain;charset=utf-8');
  } else if (format === 'pdf') {
    if (!window.jspdf) {
      showToast('Biblioteca PDF não carregada.', 'error');
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;
    doc.setFontSize(12);
    lines.forEach(line => {
      if (y > 280) { doc.addPage(); y = 10; }
      doc.text(line, 10, y);
      y += 7;
    });
    doc.save(`thermolab_sessao_${Date.now()}.pdf`);
    showToast('PDF exportado.');
  } else if (format === 'docx') {
    if (!window.docx) {
      showToast('Biblioteca DOCX não carregada.', 'error');
      return;
    }
    const { Document, Packer, Paragraph, TextRun } = docx;
    const children = lines.map(text => new Paragraph({ children: [new TextRun(text)] }));
    const doc = new Document({ sections: [{ properties: {}, children }] });
    Packer.toBlob(doc).then(blob => {
      downloadBlob(blob, `thermolab_sessao_${Date.now()}.docx`, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      showToast('DOCX exportado.');
    });
  }
}

function downloadBlob(content, filename, mimeType) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ────────────────────────────────────────────────────────────────
// 8. GRÁFICOS (MELHORADOS)
// ────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════
// 8. GRÁFICOS (MELHORADOS)
// ═══════════════════════════════════════════════════════════════

// 8.1 Linear (Chart.js com linha de interpolação e pontos)
function showLinearGraph() {
  if (!linearResult) { showToast('Calcule primeiro.', 'error'); return; }
  
  const modal = document.getElementById('graph-modal');
  const canvas = document.getElementById('graph-canvas');
  const plotlyDiv = document.getElementById('plotly-container');
  const title = document.getElementById('graph-title');
  
  title.textContent = t('linear.title') || 'Interpolação Linear';
  
  // Mostra canvas, esconde plotly
  canvas.style.display = 'block';
  plotlyDiv.style.display = 'none';
  
  // Destroi gráfico Plotly se existir
  if (window._bilinearPlotly && typeof Plotly !== 'undefined') {
    Plotly.purge(plotlyDiv);
    window._bilinearPlotly = null;
  }
  
  const ctx = canvas.getContext('2d');
  if (window._linearChart) window._linearChart.destroy();
  
  const { x1, y1, x2, y2, xT, yValue, xUnit, yUnit } = linearResult;
  window._linearChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Pontos conhecidos',
          data: [{x: x1, y: y1}, {x: x2, y: y2}],
          backgroundColor: '#2563eb',
          pointRadius: 6,
          showLine: true,
          borderColor: '#2563eb',
          borderWidth: 2
        },
        {
          label: 'Interpolação',
          data: [{x: xT, y: yValue}],
          backgroundColor: '#dc2626',
          pointRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: xUnit } },
        y: { title: { display: true, text: yUnit } }
      }
    }
  });
  
  modal.classList.add('open');
}

// 8.2 Bilinear (Plotly 3D ou fallback canvas 2D)
function showBilinearGraph() {
  if (!bilinearResult) { showToast('Calcule primeiro.', 'error'); return; }
  
  const modal = document.getElementById('graph-modal');
  const canvas = document.getElementById('graph-canvas');
  const plotlyDiv = document.getElementById('plotly-container');
  const title = document.getElementById('graph-title');
  
  title.textContent = t('bilinear.title') || 'Interpolação Bilinear';
  
  // Mostra plotly, esconde canvas
  canvas.style.display = 'none';
  plotlyDiv.style.display = 'block';
  
  // Destroi Chart.js se existir
  if (window._linearChart) {
    window._linearChart.destroy();
    window._linearChart = null;
  }
  
  // Se Plotly não estiver carregado, carrega dinamicamente
  if (typeof Plotly === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
    script.onload = () => drawBilinear3D();
    script.onerror = () => {
      console.warn('Plotly não carregou, usando fallback 2D.');
      drawBilinearFallback2D();
    };
    document.head.appendChild(script);
  } else {
    drawBilinear3D();
  }
  
  modal.classList.add('open');
}

function drawBilinear3D() {
  const { p1, p2, t1, t2, f11, f12, f21, f22, pT, tT, yValue, r1, r2 } = bilinearResult;
  const plotlyDiv = document.getElementById('plotly-container');
  
  plotlyDiv.style.height = '100%';
  
  const corners = {
    x: [p1, p1, p2, p2],
    y: [t1, t2, t1, t2],
    z: [f11, f12, f21, f22],
    type: 'scatter3d',
    mode: 'markers+text',
    marker: { size: 8, color: '#2563eb' },
    text: ['f11', 'f12', 'f21', 'f22'],
    textposition: 'top center',
    name: 'Cantos'
  };
  
  const intermediates = {
    x: [p1, p2],
    y: [tT, tT],
    z: [r1, r2],
    type: 'scatter3d',
    mode: 'markers+text',
    marker: { size: 6, color: '#f59e0b' },
    text: ['R₁', 'R₂'],
    textposition: 'top center',
    name: 'Intermediários'
  };
  
  const target = {
    x: [pT],
    y: [tT],
    z: [yValue],
    type: 'scatter3d',
    mode: 'markers+text',
    marker: { size: 10, color: '#dc2626' },
    text: ['Y'],
    textposition: 'top center',
    name: 'Interpolação'
  };
  
  const surface = {
    type: 'mesh3d',
    x: [p1, p1, p2, p2],
    y: [t1, t2, t1, t2],
    z: [f11, f12, f21, f22],
    opacity: 0.6,
    color: '#0d9488',
    name: 'Superfície'
  };
  
  const layout = {
    autosize: true,
    scene: {
      xaxis: { title: 'P' },
      yaxis: { title: 'T' },
      zaxis: { title: 'Y' }
    },
    paper_bgcolor: document.body.classList.contains('dark') ? '#1e293b' : '#ffffff',
    plot_bgcolor: document.body.classList.contains('dark') ? '#1e293b' : '#ffffff',
    font: { color: document.body.classList.contains('dark') ? '#f1f5f9' : '#0f172a' }
  };
  
  Plotly.newPlot('plotly-container', [surface, corners, intermediates, target], layout, {
    responsive: true,
    displayModeBar: true
  });
  
  window._bilinearPlotly = true;
}

// Fallback 2D completo
function drawBilinearFallback2D() {
  const canvas = document.getElementById('graph-canvas');
  const plotlyDiv = document.getElementById('plotly-container');
  plotlyDiv.style.display = 'none';
  canvas.style.display = 'block';
  
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const { p1, p2, t1, t2, f11, f12, f21, f22, pT, tT, yValue } = bilinearResult;
  const margin = 60;
  const w = canvas.width - margin * 2;
  const h = canvas.height - margin * 2;
  
  const xScale = (val) => margin + (val - p1) / (p2 - p1) * w;
  const yScale = (val) => margin + h - (val - t1) / (t2 - t1) * h; // inverte eixo Y
  
  // Grade
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(xScale(p1), yScale(t1)); ctx.lineTo(xScale(p1), yScale(t2));
  ctx.moveTo(xScale(p2), yScale(t1)); ctx.lineTo(xScale(p2), yScale(t2));
  ctx.moveTo(xScale(p1), yScale(t1)); ctx.lineTo(xScale(p2), yScale(t1));
  ctx.moveTo(xScale(p1), yScale(t2)); ctx.lineTo(xScale(p2), yScale(t2));
  ctx.stroke();
  
  // Cantos
  const corners = [
    { x: p1, y: t1, val: f11, label: `f11=${f11}` },
    { x: p1, y: t2, val: f12, label: `f12=${f12}` },
    { x: p2, y: t1, val: f21, label: `f21=${f21}` },
    { x: p2, y: t2, val: f22, label: `f22=${f22}` }
  ];
  corners.forEach(c => {
    ctx.beginPath();
    ctx.arc(xScale(c.x), yScale(c.y), 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#2563eb';
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px Inter';
    ctx.fillText(c.label, xScale(c.x) + 12, yScale(c.y) + 4);
  });
  
  // Ponto alvo
  ctx.beginPath();
  ctx.arc(xScale(pT), yScale(tT), 10, 0, 2 * Math.PI);
  ctx.fillStyle = '#dc2626';
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px Inter';
  ctx.fillText(`Y=${yValue}`, xScale(pT) + 14, yScale(tT) - 10);
}

function closeGraphModal() {
  document.getElementById('graph-modal').classList.remove('open');
  if (window._linearChart) {
    window._linearChart.destroy();
    window._linearChart = null;
  }
  const plotlyDiv = document.getElementById('plotly-container');
  if (plotlyDiv && typeof Plotly !== 'undefined') {
    Plotly.purge(plotlyDiv);
  }
  window._bilinearPlotly = null;
}

// ────────────────────────────────────────────────────────────────
// 9. TABS DOS MÓDULOS DE CÁLCULO (ORIGINAL)
// ────────────────────────────────────────────────────────────────
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
}

// ────────────────────────────────────────────────────────────────
// 10. FUNÇÕES AUXILIARES (ORIGINAL)
// ────────────────────────────────────────────────────────────────
function round(n) { return parseFloat(n.toFixed(4)); }

function showError(box, msg) {
  box.className = 'result-box visible error';
  const valEl = box.querySelector('.result-value') || document.createElement('div');
  valEl.className = 'result-value error';
  valEl.textContent = '⚠ ' + msg;
  const formulaEl = box.querySelector('.result-formula');
  if (formulaEl) formulaEl.textContent = '';
  const unitEl = box.querySelector('.result-unit');
  if (unitEl) unitEl.textContent = '';
}

let toastTimer;
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type === 'error' ? ' error' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ────────────────────────────────────────────────────────────────
// 11. RELÓGIO (ORIGINAL)
// ────────────────────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toLocaleString('pt-BR');
}
setInterval(updateClock, 1000);
updateClock();

// ────────────────────────────────────────────────────────────────
// 12. INICIALIZAÇÃO (MELHORADA)
// ────────────────────────────────────────────────────────────────
function init() {
  // Sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('data-section');
      switchSection(section);
    });
  });

  // Toggle mobile
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  // Dark mode toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', toggleDarkMode);
  }

  // Language selector
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  // Fecha sidebar ao clicar fora (mobile)
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
      sidebar.classList.remove('open');
    }
  });

  // Inicializa tema e idioma
  initDarkMode();
  setLanguage(currentLang);
  loadStates();

  console.log('ThermoLab inicializado – pronto para uso.');
}

document.addEventListener('DOMContentLoaded', init);
