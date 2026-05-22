/**********************
 * CONFIGURAÇÕES
 **********************/

let PRODUTOS_CARREGADOS = false;
let PRODUTOS_DESC_INDEX = [];

const CONFIG = {
  // Cole aqui as URLs geradas pelo gatilho "When an HTTP request is received".
  urlUnified: "https://default06219a4aa83544d5afaf3926343bfb.89.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9fe290593668452d8daf2db5458f1ff4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2hb_PXhj1NkGLaT-KkFhPcsFZZwzqS1pAMrMqJaR9lA",

  // Timeout de requisição
  requestTimeoutMs: 25000,

  // Emails dos clientes para reporte
  emailsClientes: {
    "TESTE":      ["teste@gmail.com.br"],
    "FMC":        ["emailficticio@fmc.com", "emailficticio1@fmc.com", "emailficticio3@fmc.com"],
    "Syngenta":   ["emailficticio@syngenta.com", "emailficticio1@syngenta.com", "emailficticio2@syngenta.com"],
    "Transporte": ["emailficticio@gmail.com.br"],
    "Citrosuco":  ["emailficticio@gmail.com.br", "emailficticio1@gmail.com.br"],
    "Helm":       ["emailficticio@gmail.com.br", "emailficticio1@gmail.com.br"],
    "Orígeo":     ["emailficticio@origeo.com", "emailficticio1@origeo.com", "emailficticio2@origeo.com"]
  },

  // Tipos de operação
  tiposOperacao: [
    "VENDA",
    "TRANSFERÊNCIA",
    "DEVOLUÇÃO",
    "CROSSDOCKING",
    "AMOSTRA",
    "MOVIMENTAÇÃO INTERNA",
    "EXPEDIÇÃO",
    "CARREGAMENTO"
  ],


  // Listas base (fallback se localStorage estiver vazio)
  BASE_RNC: [
    "AMOSTRA",
    "CARGA SEM MADEIRITE",
    "DIVERGENCIA BATELADA DO LOTE",
    "DIVERGÊNCIA DE CÓDIGO",
    "DIVERGENCIA DE LOTE E QUANTIDADE",
    "DIVERGÊNCIA DE LOTE",
    "DIVERGÊNCIA DE PRODUTO",
    "DIVERGÊNCIA DE QUANTIDADE",
    "FALTA DE PRODUTO",
    "LOTE ILEGIVEL",
    "PALLET TOMBADO",
    "ROTULO SOBRANDO",
    "SOBRA DE PRODUTO"
  ],

  BASE_RRA: [
    "SUJO",
    "AMASSADO",
    "RASGADO",
    "FRACIONADO",
    "VENCIDO",
    "PRODUTO BOM",
    "RÓTULO DANIFICADO",
    "VAZANDO",
    "AMOSTRA",
    "CARGA SEM MADEIRITE",
    "A VENCER"
  ],

  BASE_CLIENTES: [
"ACUCAR E ALCOOL OSWALDO RIBEIRO DE MENDO / GUAIRA",
"ADAMA BRASIL S/A / PAULINIA - SP",
"ADAMA BRASIL SA / LONDRINA - PR",
"ADM DO BRASIL LTDA / SAO PAULO - SP",
"ADUBOS REAL S.A. / ITAPETININGA - SP",
"ADUBOS REAL S.A. / JAGUARIUNA - SP",
"ADUBOS REAL SA / JAGUARIUNA - SP",
"ADVANTA COMERCIO DE SEMENTES LTDA / ITUVERAVA - SP",
"AGRICOLA AGUA BONITA LTDA / TARUMA - SP",
"AGRICOLA ALMEIDA S.A / ITAPETININGA - SP",
"AGRICOLA BALDIN S.A / PIRASSUNUNUNGA - SP",
"AGRIVITTA INSUMOS AGRICOLAS LTDA / MATAO - SP",
"AGRIVITTA INSUMOS AGRICOLAS LTDA / TUPA - SP",
"AGRO MARAPOAMA C.DE PROD AGRICOLAS LTDA / MARAPOAM",
"AGRO VALLER LTDA / ITAÍ - SP",
"AGROALLIANZ S.A. / CAMPINAS - SP",
"AGROFITO INSUMOS AGRICOLAS LTDA / GARCA - SP",
"AGROFRESH BRASIL LTDA / SÃO PAULO - SP",
"AGROMEC JALES AGRICOLA LTDA / JALES - SP",
"AGROMEN SEMENTES AGRICOLAS LT / ORLANDIA - SP",
"AGRONIL AGRONEG DO NORDESTE LTDA / MAMANGUAPE - PB",
"AGROTECNICA SOLUCOES AGRICOLAS COMERCIO / ELDORADO",
"AGROTERENAS S.A. CITRUS / SANTA CRUZ RIO PARDO - S",
"AGRO-VIVA INSUMOS AGRICOLAS LTDA / TRES PONTAS - M",
"ALTA - AMERICA LATINA TEC AGRICOLA LTDA / BARUERI",
"ALTA - AMERICA LATINA TECNOLOGIA AGRICOL / PAULINI",
"ALTA AMERICA LATINA TECN AGRICOLA / CUIABA - MT",
"ALVORADA COMERCIO DE PRODUTOS AGROP / PRESIDENTE P",
"ANDREA FELLET ORSI E OUTROS / ITABERA - SP",
"BARBOSAO E GALDINO COM P AGR LTDA / ITUVERAVA - SP",
"BASF S.A / GUARULHOS - SP",
"BASF S/A / PAULINIA - SP",
"BASF SA / GUARATINGUETA - SP",
"BEATRICE HASSON SVERNER / TAQUARITUBA - SP",
"BIOATLANTIS COMERCIO E SERVICOS DO / PARAISOPOLIS",
"BIOVIRTUS SOLUCOES AMBIENTAIS LTDA / VINhedO - SP",
"BOLSA AGRONEGOCIOS REPRESENTACOES LTDA / FRANCA -",
"BRASILAGRO - COMPANHIA BRASILEIRA DE PRO / BROTAS",
"BRAVO ARMAZENS GERAIS LTDA - SOBRAS / PAULINIA - S",
"BRAVO ARMAZENS GERAIS LTDA / PAULINIA - SP",
"BRUNO HIDEKI IOSHIDA ARIKITA / TAQUARITUBA - SP",
"CAFEALCOOL AGROINDUSTRIAL LTDA / CAFELANDIA - SP",
"CAMBUHY AGRICOLA LTDA / MATAO - SP",
"CARGILL AGRICOLA S A / COLINA - SP",
"CARGILL AGRICOLA SA / BALSAS - MA",
"CASA DO ADUBO S.A / MONTE AZUL PAULISTA - SP",
"CASA DO ADUBO S.A / TEIXEIRA DE FREITAS - BA",
"CASA DO CAFE COM. E REP. DE PROD.AGRIC. / FRANCA -",
"CASAL COM SERV LTDA / INDAIATUBA - SP",
"CCAB AGRO SA / BARUERI - SP",
"CELULOSE NIPO-BRASILEIRA S.A. CENIBRA / BELO ORIEN",
"CERCA VIVA AGRO COMERCIAL LTDA / MOGI GUACU - SP",
"CIMOAGRO - COMERCIO E REPRESENTACAO / ITAPOLIS - S",
"CIMOAGRO COMERCIO E REP.AGROP.LTDA / ITAPOLIS - SP",
"CITROSUCO S/A AGROINDUSTRIA / ITAPETININGA - SP",
"COCAL COM IND CANAA ACUCAR E ALCOOL / NARANDIBA -",
"COCAL COM.IND. CANAA ACUCAR ALCOOL LTDA / PARAGUAÇ",
"COCAMAR COOP AGROINDUSTRIAL / IEPE - SP",
"COLOMBO AGROINDUSTRIA S.A / PALESTINA - SP",
"COLOMBO AGROINDUSTRIA S.A / SANTA ALBERTINA - SP",
"COLOMBO AGROINDUSTRIA SA / SANTA ADELIA - SP",
"COOP AGR ASS ASS FORN CANA ACUCAR / BAYEUX - PB",
"COOP AGR M ADAMANTINA / ARACATUBA - SP",
"COOP AGR M ADAMANTINA / ASSIS - SP",
"COOP AGR M ADAMANTINA / JUNQUEIROPOLIS - SP",
"COOP AGR MISTA DE ADAMANTINA / SAO JOSE DO RIO PRE",
"COOP AGRIC MISTA ADAMANTINA -CAMDA / ADAMANTINA -",
"COOP AGRIC MISTA ADAMANTINA -CAMDA / LINS - SP",
"COOP AGRIC MISTA DE ADAMANTINA / ADAMANTINA - SP",
"COOP AGRIC MISTA NOVA PALMA LTDA / NOVA PALMA -",
"COOP AGRIC. MISTA ADAMANTINA-CANDA / ANDRADINA - S",
"COOP.AGRICOLA MISTA DE ADAMANTINA / PRESIDENTE PRU",
"COOPERATIVA AGRIC. MISTA DE ADAMANTINA / PACAEMBU",
"COOPERATIVA AGRICOLA MISTA NOVA PALMA LT / FAXINAL",
"COOPERATIVA AGROPECUARIA DE PARAPUA / JALES - SP",
"COOPERATIVA DE PRODUTORES DE SEMENTES CO / LARANJE",
"COOPERATIVA DOS PLANTADORES DE CANA DO E / CERQUIL",
"COOPERCITRUS COOP DE PRODUTORES RURAIS / BEBEDOURO",
"COOPERCITRUS COOP.DE PROD.RURAIS / OLIMPIA - SP",
"COPLANA COOP AGROINDUSTRIAL / GUARIBA - SP",
"COTRIJAL COOP AGROP E INDUSTRIAL / NAO ME TOQUE -",
"CRESCIUMAL AGROINDUSTRIA LTDA / LEME",
"CRIALT COM REPRES INSUMOS LTDA / ADAMANTINA - SP",
"CROP AGRICOLA LTDA / RUSSAS - CE",
"CROSS DOCKING  BRAVO",
"CTVA PROTECAO DE CULTIVOS LTDA / PAULINIA - SP",
"CULTIVAR COMERCIO AGRICOLA LTDA / MACEIO - AL",
"DELLA COLETTA BIOENERGIA SA / BARIRI - SP",
"DIANA BIOENERGIA AVANHANDAVA SA / AVANHANDAVSA - SP",
"EMIS COMERCIO E REP LTDA / FORTALEZA - CE",
"EMIS COMERCIO E REPR LTDA / PETROLINA - PE",
"EMIS COMERCIO E REPRESENTACOE LTDA / ITABAIANA - S",
"EMIS COMERCIO E REPRESENTACOES LTDA / FEIRA DE SAN",
"EMIS COMERCIO E REPRESENTACOES LTDA / JABOATAO DOS",
"EMIS COMERCIO E REPRESENTACOES LTDA / VITORIA DA C",
"FARO CAPITAL COML AGRICOLA DO BRASIL / BEBEDOURO - SP",
"FERRARI AGROINDUSTRIA S/A / PORTO FERREIRA - SP",
"FIGUEIRA INDUSTRIA E COMERCIO SA / BURITAMA - SP",
"FMC QUIMICA DO BRASIL LTDA / CARAZINHO - RS",
"FMC QUIMICA DO BRASIL LTDA / IGARAPAVA - SP",
"FMC QUIMICA DO BRASIL LTDA / PAULINIA - SP",
"FMC QUIMICA DO BRASIL LTDA / UBERABA - MG",
"GERALDO RIBEIRO DE MENDONCA JUNIOR E OUT / GUAIRA",
"GERMANICA AGRONEGOCIOS EIRELI / JUNDAI - SP",
"GETULIO SHOITI YOKOTOBI / PILAR DO SUL - SP",
"GLOBACHEM PROTECAO DE CULTIVOS DO BRASIL / CAMPINA",
"GREENLIGHT BIOSCIENCES BR PTC LTDA / PIRACICABA -",
"H & F CARIACICA AGRICOLA DO BRASIL LTDA / CARIACIC",
"H & F GAUCHA AGRIC DO BRASIL LTDA / CARAZINHO - RS",
"H & F PAULISTA AGRICOLA DO BRASIL LTDA / LINS - SP",
"H E F NORDESTE AGR DO BRASIL LTDA / PETROLINA - PE",
"H&F SETE LAGOAS AGR.DO BRASIL LTDA / SETE LAGOAS -",
"HANS THEODORO SCHOLTEN / PARANAPANEMA - SP",
"HEITOR YOSHIMITSU ARIKITA / TAQUARITUBA - SP",
"HELM DO BRASIL MERCANTIL LTDA / PAULINIA - SP",
"IASHUMARO IOSHIDA / TAQUARITUBA - SP",
"INDIGO BRASIL AGRICULTURA LTDA / SAO PAULO - SP",
"INNOVAR AGRONEGOCIOS LTDA / ME / RIO REAL - BA",
"INSTAAGRO SOLUCOES EM AGRO LTDA / SAO PAULO - SP",
"INSTAAGRO SOLUCOES EM AGRONEGOCIOS LTDA / PAULINIA",
"JF CITRUS AGROPECUARIA S/A / BEBEDOURO - SP",
"JOAO LUIZ QUAGLIATO NETO E OUTROS / OURINHOS - SP",
"JOAO PAULO BRANCO PERES E OUTROS / ADAMANTINA - SP",
"JOSE RIBEIRO DE MENDONCA E OUTRO / ARARAS - SP",
"JOSIMARA RIBEIRO MENDONCA CAMARGO / GUAIRA - SP",
"KARINA BRANCO PERES / IACANGA - SP",
"KE SOJA COM DE INSUM MAQ AGRIC LTDA / ERECHIM - RS",
"LAGOA BONITA SEMENTES LTDA / ITABERA - SP",
"LAVROBRAS COM REP LTDA / LUIS EDUARDO MAGALHAES -",
"LAVROBRAS COM.REPRES.LTDA / CORRENTINA - BA",
"LEMEFERTIL PRODUTOS AGRICOLAS LTDA / LEME - SP",
"LONGPING HIGH - TECH BIOTECNOLOGIA LTDA / CRAVINHO",
"LONGPING HIGH TECH BIOTEC. LTDA / JARDINÓPOLIS - S",
"LONGWIND CROPSCIENCE BRAZIL LTDA / PAULINIA - SP",
"LOUIS DREYFUS COMPANY BRASIL SA / CUIABA - MT",
"LOUIS DREYFUS COMPANY BRASIL SA / PARAGUACU PAULIS",
"LOUIS DREYFUS COMPANY SUCOS S.A / PAULINIA - SP",
"LUIS AUGUSTO ROSA VALIM E OUTROS / SAO JOAO DA BOA",
  ]
};

let currentType = 'RRA';

let emailsClientes = CONFIG.emailsClientes;
let BASE_RRA       = CONFIG.BASE_RRA;
let BASE_RNC       = CONFIG.BASE_RNC;
let tiposOperacao  = CONFIG.tiposOperacao;

// o modo admin foi removido; os dados agora são estáticos no CONFIG.

/* ================================
   UTILITÁRIOS GERAIS
================================ */

function isoToday() {
  const d = new Date();
  return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function carregarClientes(){
  const BASE_CLIENTES = CONFIG.BASE_CLIENTES;
	const emitente = document.getElementById("produtos_emi");
	const destinatario = document.getElementById("produtos_des");
	for (let cliente of BASE_CLIENTES){
		let cli1 = document.createElement("option");
		let cli2 = document.createElement("option");
		cli1.value = cliente;
		cli2.value = cliente;
		emitente.appendChild(cli1);
		destinatario.appendChild(cli2);
	}
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&',  '&amp;')
    .replaceAll('<',  '&lt;')
    .replaceAll('>',  '&gt;')
    .replaceAll('"',  '&quot;')
    .replaceAll("'",  '&#039;');
}

// Retorna hash SHA-256 usando a Web Crypto API.
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

// Mantemos localStorage apenas para o tema, o resto usa valores fixos de CONFIG.


function fileToBase64Pure(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ================================
   MODAL CUSTOMIZADO
   Substitui prompt() / alert() / confirm() nativos.
   Permite estilização e melhor controle de interação.
================================ */

function showModal({ title, message = '', input = false, placeholder = '', confirmText = 'Confirmar', cancelText = 'Cancelar', danger = false }) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'modal';
    overlay.style.display = 'flex';
    overlay.innerHTML = `
      <div class="modal-content">
        <h3>${escapeHtml(title)}</h3>
        ${message ? `<p style="color:var(--muted);font-size:14px;margin:0 0 16px">${escapeHtml(message)}</p>` : ''}
        ${input ? `<input id="modal-input" class="modal-field" placeholder="${escapeHtml(placeholder)}" style="width:100%;margin-bottom:16px" />` : ''}
        <div class="modal-actions">
          <button class="btn secondary" id="modal-cancel">${escapeHtml(cancelText)}</button>
          ${confirmText ? `<button class="btn${danger ? ' danger' : ''}" id="modal-confirm">${escapeHtml(confirmText)}</button>` : ''}
        </div>
      </div>`;

    document.body.appendChild(overlay);

    const field   = overlay.querySelector('#modal-input');
    const confirm = overlay.querySelector('#modal-confirm');
    const cancel  = overlay.querySelector('#modal-cancel');

    if (field) field.focus();
    else if (confirm) confirm.focus();

    const close = value => { overlay.remove(); resolve(value); };

    if (confirm) confirm.addEventListener('click', () => close(input ? (field.value.trim() || null) : true));
    cancel.addEventListener('click', () => close(null));

    overlay.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); if (confirm) confirm.click(); }
      if (e.key === 'Escape') { e.preventDefault(); cancel.click(); }
    });
  });
}

/* ================================
   STATUS
================================ */

function setStatus(kind, message) {
  const el = document.getElementById('status');
  el.className  = 'status ' + kind;
  el.textContent = message;
  if (kind) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearStatus() { setStatus('', ''); }

/* ================================
   FORMULÁRIO
================================ */

function updateDestinatarios() {
  const cliente = document.getElementById('cliente').value;
  const el      = document.getElementById('destinatariosEmail');
  el.value = (cliente && emailsClientes[cliente])
    ? emailsClientes[cliente].join('; ')
    : '';
}

function switchForm(type) {
  currentType = type;

  // tabs
  document.getElementById('tab-rra').classList.toggle('active', type === 'RRA');
  document.getElementById('tab-rnc').classList.toggle('active', type === 'RNC');
  document.getElementById('tab-rra').setAttribute('aria-pressed', type === 'RRA');
  document.getElementById('tab-rnc').setAttribute('aria-pressed', type === 'RNC');

  // forms
  document.getElementById('form-RRA').style.display = type === 'RRA' ? 'block' : 'none';
  document.getElementById('form-RNC').style.display = type === 'RNC' ? 'block' : 'none';

  // Reset dos itens ao alternar a aba
  resetItensPorTipo('RRA');
  resetItensPorTipo('RNC');

  clearStatus();
}

function optionList(options, placeholder = 'Selecione...') {
  return `<option value="">${escapeHtml(placeholder)}</option>` +
    options.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
}

/* ================================
   SCHEMA DE LINHAS
   Estrutura única para RRA e RNC.
================================ */


const NUMERIC_HANDLER = `
inputmode="numeric"
pattern="[0-9]*"
oninput="this.value=this.value.replace(/[^0-9]/g,'')"
`;

const ROW_SCHEMA = {
  RRA: [
    { key: 'codigo',     placeholder: 'Ex.: 55971', list: 'lista_codigos' },
    { key: 'produto',    placeholder: 'Ex.: COMET 4X5' },
    { key: 'lote',       placeholder: 'Ex.: 001-25' },
    { key: 'quantidade', placeholder: 'Ex.: 10,5', numeric: true },
    
    { key: 'unitizador', placeholder: 'Ex.: B3031112223' },
    { key: 'tipoMov',    placeholder: 'Ex.: 7000181503' },

    { key: 'descricao',  multiSelect: () => BASE_RRA }],
  RNC: [
    { key: 'codigo',     placeholder: 'Ex.: 55971', list: 'lista_codigos' },
    { key: 'produto',    placeholder: 'Ex.: KLERAT PELLET' },
    { key: 'loteNF',     placeholder: 'Ex.: 001-25' },
    { key: 'qtdNF',      placeholder: 'Ex.: 10,5', numeric: true },
    { key: 'loteFisico', placeholder: 'Ex.: 001-26' },
    { key: 'qtdFisico',  placeholder: 'Ex.: 10,5', numeric: true },
    { key: 'descricao',  select: () => BASE_RNC, selectPlaceholder: 'Selecione o tipo de não conformidade...' }
  ]
};


function applyCodigoProdutoToLastRow(type) {
  const tbody = document.querySelector(`#table${type} tbody`);
  if (!tbody) return;

  const tr = tbody.lastElementChild;
  if (!tr) return;

  bindCodigoProdutoRow(tr);
}

function bindCodigoProdutoRow(tr) {
  const inputCodigo  = tr.querySelector('[data-k="codigo"]');
  const inputProduto = tr.querySelector('[data-k="produto"]');

  if (!inputProduto) return;

  // Autocomplete por descrição
  attachProdutoAutocomplete(inputProduto, inputCodigo);

  // Lookup automático por código, quando disponível
  if (inputCodigo) {
    inputCodigo.addEventListener('blur', () => {
      const codigo = inputCodigo.value.trim();
      if (codigo && window.BASE_PRODUTOS[codigo]) {
        inputProduto.value = window.BASE_PRODUTOS[codigo];
      }
    });
  }
}






function addRow(type) {
  const tbody = document.querySelector(`#table${type} tbody`);
  const tr    = document.createElement('tr');

  const cells = ROW_SCHEMA[type].map(col => {
    // RRA: permitir múltiplas avarias (somar seleções)
    if (col.multiSelect) {
      const options = col.multiSelect();

      const selectInicial = `
        <span class="avaria-item">
          <select data-k="${col.key}" class="multi-select" onchange="atualizarOutrosSelects(this, '${col.key}')">
            ${optionList(options, 'Selecione...')}
          </select>
          <button type="button" class="btn-remove-avaria" onclick="removerSelect(this, '${col.key}')">✕</button>
        </span>`;

      const botaoOutro = `
        <button type="button" class="btn btn-small" onclick="adicionarNovoSelect(this, '${col.key}')">+ Outro</button>`;

      return `
        <td>
          <div class="multi-select-group">
            <div class="avaria-selects">
              ${selectInicial}
            </div>
            ${botaoOutro}
          </div>
        </td>`;
    }

    // Select comum (RNC e demais)
    if (col.select) {
      return `<td><select data-k="${col.key}">${optionList(col.select(), col.selectPlaceholder)}</select></td>`;
    }

    // Input comum
    const num = col.numeric ? NUMERIC_HANDLER : '';
    return `<td><input data-k="${col.key}" placeholder="${escapeHtml(col.placeholder)}" ${num}/></td>`;
  });

  tr.innerHTML = cells.join('') +
    `<td><button class="btn danger" type="button" onclick="removeRow(this)">Remover</button></td>`;

  tbody.appendChild(tr);
  applyCodigoProdutoToLastRow(type);
}

function removeRow(btn) { btn.closest('tr')?.remove(); }



/* ================================
   RRA: Múltiplas avarias (somar seleções)
================================ */

function adicionarNovoSelect(btn, key) {
  const group = btn.closest('.multi-select-group');
  if (!group) return;

  const wrapper = document.createElement('span');
  wrapper.className = 'avaria-item';

  const novoSelect = document.createElement('select');
  novoSelect.className = 'multi-select';
  novoSelect.setAttribute('data-k', key);
  novoSelect.onchange = () => atualizarOutrosSelects(novoSelect, key);

  // opções disponíveis (evita duplicar)
  const selecionados = [...group.querySelectorAll('.multi-select')]
    .map(s => s.value)
    .filter(v => v);

  const options = BASE_RRA.filter(opt => !selecionados.includes(opt));

  novoSelect.innerHTML =
    '<option value="">Selecione...</option>' +
    options.map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('');

  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.className = 'btn-remove-avaria';
  btnRemover.textContent = '✕';
  btnRemover.onclick = () => removerSelect(btnRemover, key);

  wrapper.appendChild(novoSelect);
  wrapper.appendChild(btnRemover);

  const selectsContainer = group.querySelector('.avaria-selects');
  selectsContainer.appendChild(wrapper);

  atualizarOutrosSelects(novoSelect, key);
}

function removerSelect(botao, key) {
  const item  = botao.closest('.avaria-item');
  const group = botao.closest('.multi-select-group');
  if (!item || !group) return;

  // mantém ao menos 1 select
  if (group.querySelectorAll('.avaria-item').length <= 1) return;

  item.remove();

  // revalida opções restantes
  group.querySelectorAll('.multi-select').forEach(sel => atualizarOutrosSelects(sel, key));
}

// Atualiza opções para evitar avarias repetidas no mesmo item
function atualizarOutrosSelects(selectAlterado, key) {
  const group = selectAlterado.closest('.multi-select-group');
  if (!group) return;

  const selecionados = [...group.querySelectorAll('.multi-select')]
    .map(sel => sel.value)
    .filter(v => v);

  group.querySelectorAll('.multi-select').forEach(select => {
    const valorAtual = select.value;

    const options = BASE_RRA.filter(opt => !selecionados.includes(opt) || opt === valorAtual);

    select.innerHTML =
      '<option value="">Selecione...</option>' +
      options.map(opt => `
        <option value="${escapeHtml(opt)}" ${opt === valorAtual ? 'selected' : ''}>
          ${escapeHtml(opt)}
        </option>`).join('');
  });
}
function removeRow(btn) { btn.closest('tr')?.remove(); }

/* ================================
   LEITURA DE DADOS
================================ */

function readCommon() {
  const cliente = document.getElementById('cliente').value;
  return {
    dataHoje:            document.getElementById('dataHoje').value,
    reporterName:        document.getElementById('reporterName').value.trim(),
    nfNumero:            document.getElementById('nfNumero').value.trim(),
    tipoOperacao:        document.getElementById('tipoOperacao').value.trim(),
    emitente:            document.getElementById('emitente').value.trim(),
    destinatario:        document.getElementById('destinatario').value.trim(),
    agendamento:         document.getElementById('agendamento').value.trim(),
    observacoes:         document.getElementById('observacoes').value.trim(),
    cliente,
    emailsDestinatarios: (cliente && emailsClientes[cliente]) ? emailsClientes[cliente] : []
  };
}

function formatarListaComE(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return '';
  if (lista.length === 1) return lista[0];
  if (lista.length === 2) return `${lista[0]} E ${lista[1]}`;

  const ultimo = lista[lista.length - 1];
  const anteriores = lista.slice(0, -1).join(', ');
  return `${anteriores} E ${ultimo}`;
}

function readRows(type) {
  const keys = ROW_SCHEMA[type].map(c => c.key);

  return [...document.querySelectorAll(`#table${type} tbody tr`)]
    .map(tr => {
      const rowData = {};

      keys.forEach(k => {
        const col = ROW_SCHEMA[type].find(c => c.key === k);

        if (col && col.multiSelect) {
          // pega todos os selects do mesmo campo e concatena
          const values = [...tr.querySelectorAll(`[data-k="${k}"].multi-select`)]
            .map(s => s.value)
            .filter(v => v);
          rowData[k] = formatarListaComE(values);
        } else {
          rowData[k] = tr.querySelector(`[data-k="${k}"]`)?.value?.trim() || '';
        }
      });

      return rowData;
    })
    .filter(r => Object.values(r).some(v => v));
}
/* ================================
   VALIDAÇÃO DE PAYLOAD
   Verifica campos obrigatórios sem redundância.
================================ */

function validatePayload(type, payload) {
  const missing = [];

  // Os campos do formulário ficam dentro de payload.cabecalho
  const c = payload.cabecalho || {};

  // Campos obrigatórios globais: apenas Nome do repórter e Cliente
  if (!c.reporterName)  missing.push('Nome do repórter');
  if (!c.cliente)       missing.push('Cliente para reporte');

  // Conferente e pelo menos 1 item são obrigatórios
  if (!payload.conferente)    missing.push(`Conferente (${type})`);
  if (!payload.itens?.length) missing.push(`Ao menos 1 item no ${type}`);

  // Campos obrigatórios por item, dependendo do tipo
  const requiredKeys = type === 'RRA'
    ? ['produto', 'lote', 'quantidade', 'descricao']
    : ['produto', 'loteFisico', 'qtdFisico', 'descricao'];

  if ((payload.itens || []).some(it => requiredKeys.some(k => !it[k]))) {
    missing.push('Campos obrigatórios em itens: produto, lote físico/qtd físico (RNC) ou produto, lote, quantidade (RRA), e tipo de avaria/não conformidade');
  }

  return missing;
}

/* ================================
   SUBMISSÃO DE FORMULÁRIO
   Lê os itens apenas uma vez antes do envio.
================================ */

async function submitForm() {
  clearStatus();

  const common    = readCommon();
  const idSuffix  = currentType === 'RRA' ? '' : '_RNC';
  const pdfInput  = document.getElementById(`anexoPDF${idSuffix}`);
  const fotosInput = document.getElementById(`anexoFotos${idSuffix}`);
  const conferente = document.getElementById(`conferente${currentType}`).value.trim();

  // Lê itens UMA única vez e reutiliza
  const itens = readRows(currentType);

  if (!itens.length || !common.reporterName || !conferente || !pdfInput?.files?.length || !fotosInput?.files?.length) {
    setStatus('err', 'Preencha todos os campos obrigatórios: Nome do repórter, Itens, Conferente, Anexo PDF e Anexo Fotos.');
    return;
  }

  const pdfBase64   = await fileToBase64(pdfInput.files[0]);
  const fotos = await Promise.all([...fotosInput.files].map((file, i) => fileToBase64Pure(file).then(b64 => ({ nome: `Foto_${i+1}_${file.name}`, contentType: file.type, conteudo: b64 }))));


const payload = {
  meta: {
    tipoReporte: currentType,
    dataEnvio: new Date().toISOString()
  },

  cabecalho: {
    dataHoje: common.dataHoje,
    reporterName: common.reporterName,
    nfNumero: common.nfNumero,
    tipoOperacao: common.tipoOperacao,
    emitente: common.emitente,
    destinatario: common.destinatario,
    agendamento: common.agendamento,
    cliente: common.cliente,
    emailsDestinatarios: common.emailsDestinatarios,
    observacoes: common.observacoes
  },

  itens: itens,

  anexos: {
    pdf: pdfBase64,
    fotos: fotos
  },

  conferente: conferente
};


  const url = CONFIG.urlUnified || CONFIG[`url${currentType}`];

  if (!url) {
    setStatus('warn', 'Configure a URL do Power Automate no bloco CONFIG (urlUnified ou urlRRA/urlRNC).');
    return;
  }

  const missing = validatePayload(currentType, payload);
  if (missing.length) {
    setStatus('err', 'Preencha os campos obrigatórios: ' + missing.join(' • '));
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CONFIG.requestTimeoutMs);
  const btn = document.getElementById('btnEnviar');
  btn.disabled    = true;
  btn.textContent = 'Enviando…';

  try {
    const res = await fetch(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
      signal:  controller.signal
    });

    if (res.ok) {
      setStatus('ok', `${currentType} enviado com sucesso!`);
    } else {
      const text = await res.text().catch(() => '');
      setStatus('err', `Falha ao enviar (${res.status}).${text ? ' Detalhe: ' + text : ''}`);
    }
  } catch (e) {
    setStatus('err', e.name === 'AbortError'
      ? 'Tempo excedido ao tentar enviar.'
      : 'Erro de conexão ao enviar.');
  } finally {
    clearTimeout(timer);
    btn.disabled    = false;
    btn.textContent = 'Enviar';
  }
}

/* ================================
   RESETAR
================================ */

function resetAll() {
  ['nfNumero','tipoOperacao','emitente','destinatario','cliente',
   'destinatariosEmail','agendamento','observacoes',
   'conferenteRRA','conferenteRNC',
   'anexoPDF','anexoFotos','anexoPDF_RNC','anexoFotos_RNC'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.querySelector('#tableRRA tbody').innerHTML = '';
  document.querySelector('#tableRNC tbody').innerHTML = '';
  addRow('RRA');
  addRow('RNC');
  clearStatus();
}

/* ================================
   MENU / TEMA
================================ */

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function initMenu() {
  const menuToggle   = document.getElementById('menuToggle');
  const menuDropdown = document.getElementById('menuDropdown');
  const themeToggle  = document.getElementById('themeToggle');
  const themeText    = document.querySelector('.theme-text');

  menuToggle.addEventListener('click', e => {
    e.stopPropagation();
    menuDropdown.classList.toggle('show');
  });

  document.addEventListener('click', e => {
    if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target))
      menuDropdown.classList.remove('show');
  });

  themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'light' : 'dark';
    setTheme(theme);
    themeText.textContent = themeToggle.checked ? 'Claro' : 'Escuro';
    localStorage.setItem('theme', theme);
  });

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  themeToggle.checked   = savedTheme === 'light';
  themeText.textContent = savedTheme === 'dark' ? 'Escuro' : 'Claro';
}

/* ================================
   META DE LISTAS DE ADMIN
   Retorna metadados centralizados para cada tipo.
================================ */

function getListMeta(type) {
  return {
    rra:       { list: BASE_RRA,      storageKey: 'BASE_RRA',      label: 'tipo de avaria',           containerId: 'rraList' },
    rnc:       { list: BASE_RNC,      storageKey: 'BASE_RNC',      label: 'tipo de não conformidade', containerId: 'rncList' },
    operation: { list: tiposOperacao, storageKey: 'tiposOperacao', label: 'tipo de operação',         containerId: 'operationsList' }
  }[type];
}

function renderItems(type) {
  const { list, containerId } = getListMeta(type);
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  list.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'item-row';
    div.innerHTML = `
      <input type="text" class="item-input" value="${escapeHtml(item)}"
             onchange="updateItem('${type}', ${index}, this.value)" />
      <div class="item-actions">
        <button class="btn danger" onclick="removeItem('${type}', ${index})">Remover</button>
      </div>`;
    container.appendChild(div);
  });
}

async function addItem(type) {
  const { list, storageKey, label } = getListMeta(type);
  const newItem = await showModal({
    title:       'Adicionar item',
    input:       true,
    placeholder: `Novo ${label}…`,
    confirmText: 'Adicionar'
  });
  if (!newItem) return;
  list.push(newItem.toUpperCase());
  renderItems(type);
  if (type === 'operation') updateOperationOptions();
}

function updateItem(type, index, newValue) {
  const { list } = getListMeta(type);
  list[index] = newValue.trim().toUpperCase();
  if (type === 'operation') updateOperationOptions();
}

async function removeItem(type, index) {
  const { list } = getListMeta(type);
  const confirmed = await showModal({
    title:       'Remover item',
    message:     `Remover "${list[index]}"?`,
    confirmText: 'Remover',
    danger:      true
  });
  if (!confirmed) return;
  list.splice(index, 1);
  renderItems(type);
  if (type === 'operation') updateOperationOptions();
}

// o modo admin foi removido; os dados do cliente e listas são estáticos em CONFIG.

/* ================================
   ADMIN — LOGIN / PAINEL
   Compara hash SHA-256 em vez de texto puro.
================================ */


function updateOperationOptions() {
  document.getElementById('tipoOperacao').innerHTML =
    optionList(tiposOperacao, 'Selecione o tipo de operação…');
}

function updateClientOptions() {
  const select  = document.getElementById('cliente');
  const current = select.value;
  select.innerHTML = optionList(Object.keys(emailsClientes).sort(), 'Selecione o cliente…');
  if (current && emailsClientes[current]) select.value = current;
}

/* ================================
   INICIALIZAÇÃO
================================ */






(async function init() {
  document.getElementById('dataHoje').value = isoToday();

  addRow('RRA');
  addRow('RNC');

  initMenu();
  updateOperationOptions();
  updateClientOptions();
})();



function indexarProdutos() {
  if (
    !window.BASE_PRODUTOS ||
    typeof window.BASE_PRODUTOS !== 'object'
  ) {
    console.error('BASE_PRODUTOS não carregado.');
    PRODUTOS_DESC_INDEX = [];
    return;
  }

  const index = [];

  for (const codigo in window.BASE_PRODUTOS) {
    const desc = window.BASE_PRODUTOS[codigo];
    if (!desc) continue;

    index.push([
      String(codigo),
      desc.toUpperCase(), // usado na busca
      desc                // exibido
    ]);
  }

  PRODUTOS_DESC_INDEX = index;
  PRODUTOS_CARREGADOS = true;
}

function debounce(fn, delay = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}


function posicionarAutocomplete(box, input) {
  const rect = input.getBoundingClientRect();
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  const listHeight = box.offsetHeight || 360;

  // Abre a caixa acima do input e a posiciona no documento
  box.style.top  = `${rect.top + scrollY - listHeight - 4}px`;
  box.style.left = `${rect.left + scrollX}px`;
  box.style.width = `${rect.width}px`;
}


function resetItensPorTipo(type) {
  const tbody = document.querySelector(`#table${type} tbody`);
  if (!tbody) return;

  // remove todos os itens
  tbody.innerHTML = '';

  // adiciona UMA linha vazia
  addRow(type);
}

function attachProdutoAutocomplete(inputProduto, inputCodigo) {
  let box = null;
  let posicionada = false;

  const runSearch = debounce(() => {
    const termo = inputProduto.value.trim().toUpperCase();
    if (termo.length < 3) {
      removeBox();
      return;
    }

    const resultados = [];
    const max = 25;

    for (let i = 0; i < PRODUTOS_DESC_INDEX.length; i++) {
      const [codigo, descUpper, desc] = PRODUTOS_DESC_INDEX[i];
      if (descUpper.includes(termo)) {
        resultados.push({ codigo, desc });
        if (resultados.length >= max) break;
      }
    }

    if (!resultados.length) {
      removeBox();
      return;
    }

    if (!box) {
      box = document.createElement('div');
      box.className = 'autocomplete-box';
      document.body.appendChild(box);
      posicionada = false;
    }

    box.innerHTML = resultados.map(p =>
      `<div class="autocomplete-item" data-c="${p.codigo}">
        ${p.desc}
      </div>`
    ).join('');

    // Posiciona apenas uma vez enquanto o box estiver ativo
    if (!posicionada) {
      posicionarAutocomplete(box, inputProduto);
      posicionada = true;
    }

  }, 300);

  inputProduto.addEventListener('input', runSearch);

  function removeBox() {
    if (box) {
      box.remove();
      box = null;
      posicionada = false;
    }
  }

  document.addEventListener('click', e => {
    if (!box || !box.contains(e.target)) return;

    const codigo = e.target.dataset.c;
    inputProduto.value = window.BASE_PRODUTOS[codigo] || inputProduto.value;
    if (inputCodigo) inputCodigo.value = codigo;

    removeBox();
  });

  inputProduto.addEventListener('blur', () => {
    setTimeout(removeBox, 150);
  });
}
indexarProdutos();