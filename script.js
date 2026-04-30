/**********************
 * CONFIG - velho
 **********************/

let PRODUTOS_CARREGADOS = false
let PRODUTOS_DESC_INDEX = [];

const CONFIG = {
  // Cole aqui as URLs geradas pelo gatilho "When an HTTP request is received".
  urlUnified: "https://default06219a4aa83544d5afaf3926343bfb.89.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9fe290593668452d8daf2db5458f1ff4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2hb_PXhj1NkGLaT-KkFhPcsFZZwzqS1pAMrMqJaR9lA",

  // Timeout de requisição
  requestTimeoutMs: 25000,

  // Emails dos clientes para reporte
  emailsClientes: {
    "FMC":        ["email1@fmc.com", "email2@fmc.com"],
    "Syngenta":   ["email1@syngenta.com", "email2@syngenta.com"],
    "Transporte": ["email1@transporte.com", "email2@transporte.com"],
    "Citrosuco":  ["email1@citrosuco.com", "email2@citrosuco.com"],
    "Helm":       ["email1@helm.com", "email2@helm.com"],
    "Orígeo":     ["email1@origeo.com", "email2@origeo.com"]
  },

  // Tipos de operação
  tiposOperacao: [
    "AMOSTRA",
    "CARREGAMENTO",
    "CROSSDOCKING",
    "DEVOLUÇÃO",
    "EXPEDIÇÃO",
    "MOVIMENTAÇÃO INTERNA",
    "RECEBIMENTO",
    "TRANSFERÊNCIA",
    "VENDA"
  ],

  // CORREÇÃO 1: Senha nunca fica em texto puro no código.
  // Use um hash SHA-256 da senha real. Para gerar o hash:
  //   1. Abra o console do navegador (F12)
  //   2. Cole e execute:
  //      crypto.subtle.digest('SHA-256', new TextEncoder().encode('SUA_SENHA'))
  //        .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
  //   3. Copie o hash gerado e substitua o valor abaixo.
  // O hash abaixo corresponde à senha "admin123" — TROQUE para produção!
  adminPasswordHash: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",

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
    "BOMBONA AMASSADA",
    "CAIXAS AMASSADAS",
    "CAIXAS RASGADAS E AMASSADAS",
    "CAIXAS RASGADAS",
    "FRACIONADO E VENCIDO",
    "FRACIONADO",
    "FRACIONADO, SUJO E VENCIDO",
    "PRODUTO AVARIADO",
    "PRODUTO BOM",
    "ROTULO DANIFICADO",
    "SUJO E AMASSADO",
    "SUJO E RASGADO",
    "SUJO"
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
"AGRICOLA BALDIN S.A / PIRASSUNUNGA - SP",
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
"BEATRICE HASSON SVERNER / TAQUARIVAI - SP",
"BIOATLANTIS COMERCIO E SERVICOS DO / PARAISOPOLIS",
"BIOVIRTUS SOLUCOES AMBIENTAIS LTDA / VINHEDO - SP",
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
"COOP AGRIC MISTA NOVA PALMA LTDA / NOVA PALMA - RS",
"COOP AGRIC. MISTA ADAMANTINA-CANDA / ANDRADINA - S",
"COOP AGROP INSUMOS HOLAMBRA / HOLAMBRA - SP",
"COOP CAFEICULTORES AGROPECUARISTA / FRANCA - SP",
"COOP DO AGRONEG DOS ASS DOS FORN DE CANA / RECIFE",
"COOP DOS PLANT DE CANA DO EST DE SP / ARARAS - SP",
"COOP DOS PLANT DE CANA DO EST DE SP / CATANDUVA -",
"COOP DOS PLANT DE CANA DO EST S.PAULO / CHARQUEADA",
"COOP EMP RURAIS TRIANG MINEIRO LTDA / UBERABA - MG",
"COOP PL CANA ESTADO DE SAO PAULO / ARACATUBA - SP",
"COOP PLANT CANA DO EST DE SAO PAULO / PIRACICABA -",
"COOP PLANT CANA DO EST SP / AVARE - SP",
"COOP PLANT CANA EST SAO PAULO / COSMOPOLIS - SP",
"COOP PLANT CANA ESTADO DE SAO PAULO / ARARAQUARA -",
"COOP PLANT CANA ESTADO DE SAO PAULO / ASSIS - SP",
"COOP PLANT CANA ESTADO DE SAO PAULO LTDA / SANTA C",
"COOP PLANT CANA ESTADO SAO PAULO / CHAVANTES - SP",
"COOP PLANT CANA ESTADO SP LTDA / BARRA BONITA - SP",
"COOP PLANT CANA OESTE ESTADO SP / SERTAOZINHO - SP",
"COOP PLANT.CANA DO EST SAO PAULO LT / IGARAPAVA -",
"COOP PLANT.DE.CAN.DO ESTADO DE S. PAULO / PENAPOLI",
"COOP. AGR. MISTA NOVA PALMA LTDA / JULIO DE CASTIL",
"COOP.AGRICOLA MISTA DE ADAMANTINA / PRESIDENTE PRU",
"COOPERATIVA AGRIC. MISTA DE ADAMANTINA / PACAEMBU",
"COOPERATIVA AGRICOLA MISTA NOVA PALMA LT / FAXINAL",
"COOPERATIVA AGROPECUARIA DE PARAPUA / JALES - SP",
"COOPERATIVA DE PRODUTORES DE SEMENTES CO / LARANJE",
"COOPERATIVA DOS PLANTADORES DE CANA DO E / CERQUIL",
"COOPERCITRUS COOP DE PRODUTORES RURAIS / BEBEDOURO",
"COOPERCITRUS COOP DE PRODUTORES RURAIS / LIMEIRA -",
"COOPERCITRUS COOP PROD RURAIS / BEBEDOURO - SP",
"COOPERCITRUS COOPERATIVA DE PRODUTORES R / LIMEIRA",
"COOPERCITRUS COOPERATIVA DE PRODUTORES R / MARILIA",
"COOPERMOTA COOP AGROINDUSTRIAL / SANTA CRUZ DO RIO",
"COOPERMOTA COOPERATIVA AGROINDUSTRIAL / CANDIDO MO",
"COOPERMOTA COOPERATIVA AGROINDUSTRIAL / PALMITAL -",
"COPERCITRUS COOP.PROD.RURAIS / OLIMPIA - SP",
"COPLANA COOP AGROINDUSTRIAL / GUARIBA - SP",
"COTRIJAL COOP AGROP E INDUSTRIAL / NAO ME TOQUE -",
"CRESCIUMAL AGROINDUSTRIA LTDA / LEME",
"CRIALT COM REPRES INSUMOS LTDA / ADAMANTINA - SP",
"CROP AGRICOLA LTDA / RUSSAS - CE",
"CROSS DOCKING  BRAVO",
"CTVA PROTECAO DE CULTIVOS LTDA / PAULINIA - SP",
"CULTIVAR COMERCIO AGRICOLA LTDA / MACEIO - AL",
"DELLA COLETTA BIOENERGIA SA / BARIRI - SP",
"DIANA BIOENERGIA AVANHANDAVA SA / AVANHANDAVA - SP",
"EMIS COMERCIO E REP LTDA / FORTALEZA - CE",
"EMIS COMERCIO E REPR LTDA / PETROLINA - PE",
"EMIS COMERCIO E REPRESENTACOE LTDA / ITABAIANA - S",
"EMIS COMERCIO E REPRESENTACOES LTDA / FEIRA DE SAN",
"EMIS COMERCIO E REPRESENTACOES LTDA / JABOATAO DOS",
"EMIS COMERCIO E REPRESENTACOES LTDA / VITORIA DA C",
"FARO CAPITAL COML AGRICOLA LTDA / BEBEDOURO - SP",
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
"INNOVAR AGRONEGOCIOS LTDA - ME / RIO REAL - BA",
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
"MAFER MARILIA COMERCIO E REPRESENTACOES / MARILIA",
"MALOSSO BIOENERGIA SA / ITAPOLIS - SP",
"MARCELO RIBEIRO MENDONCA / IPUA - SP",
"MARCELO RIBEIRO MENDONCA OUTRA / IPUA - SP",
"MARIA CAROLINA GARIERI MARCO ANTONIO / GUAICARA -",
"MARILENE GARCIA GAZARINI / IEPE - SP",
"MARTINS & KISSMANN LTDA / PALMEIRA DAS MISSOES - R",
"MAYARA GARCIA GAZARINI / IEPE - SP",
"MODARC DE RAIZ LTDA / GARIBALDI - RS",
"MODARC DE RAIZ LTDA / ITAJAI - SC",
"MODULO INSUMOS AGROPECUARIOS LTDA / EUNAPOLIS - BA",
"MONSANTO DO BRASIL LTDA / ITAI - SP",
"MOSAIC FERT DO BRASIL LTDA / CUBATAO - SP",
"MOSAIC FERTILIZANTES DO BRASIL LTDA / UBERABA - MG",
"NICOLAAS JOSEF SCHOENMAKER E OUTROS / SANTO ANTONI",
"NOSSA SAFRA COMERCIO E REPRESENTACOES DE / MONTE A",
"NUFARM DO BRASIL LTDA / CURITIBA - PR",
"NUFARM DO BRASIL LTDA / PAULINIA - SP",
"NUTRIEN SOLUCOES AGRICOLAS LTDA / PAULINIA - SP",
"ORIGEO COMERCIO DE PRODUTOS AGROPECUARIO / PAULINI",
"OSNIVALDO CARRIEL CORDEIRO / APIAI - SP",
"OTAVIO JUNQUEIRA MOTTA LUIZ E OUTRO / GUAIRA - SP",
"OURO FINO QUIMICA SA / IGARAPAVA - SP",
"OURO FINO QUIMICA SA / UBERABA - MG",
"OURO SAFRA IND COM LTDA / SANTA CRUZ DO RIO PARDO",
"OURO SAFRA IND E COM LTDA / PIRASSUNUNGA - SP",
"OURO SAFRA INDUSTRIA E COMERCIO LTDA / PILAR DO SU",
"OURO SAFRA S/A / BRAGANCA PAULISTA - SP",
"OURO SAFRA S/A / ITAPETININGA - SP",
"OURO SAFRA S/A / ITAPEVA - SP",
"OURO SAFRA S/A / PALMITAL - SP",
"OURO SAFRA SA / FRUTAL - MG",
"PARAPUA AGROINDUSTRIAL S/A / PARAPUA - SP",
"PERTERRA INSUMOS AGROPECUARIOS S.A. / SÃO PAULO -",
"PI AGSCIENCES BRASIL LTDA / SAO PAULO - SP",
"RAFAEL BRANCO PERES E OUTROS / BAURU - SP",
"RAINBOW DEFENSIVOS AGRICOLAS LTDA / PAULINIA",
"RB AGRICOLA LTDA / CARPINA - PE",
"RICARDO PEREIRA MARQUES / TAQUARIVAI - SP",
"ROBERTO CARLOS RAYMUNDO DOMINGUES / SAO MIGUEL ARC",
"ROBERTO SODRE VIANA EGREJA / MARTINOPOLIS - SP",
"ROBERTO SODRE VIANA EGREJA / PENAPOLIS - SP",
"RODRIGO BRANCO PERES / AGUAS DE SANTA BARBARA - SP",
"RODRIGO BRANCO PERES E OUTRA / PIRAJUI - SP",
"ROSSI & ROSSI ATACADO DE INS AGROP LTDA / PAULINIA",
"ROSSI & ROSSI ATACADO DE INSUMOS AGROPEC / PAULINI",
"RUDY SCHOLTEN E OUTRO / BURI - SP",
"RUDY SCHOLTEN E OUTRO / ITAI - SP",
"RUDY SCHOLTEN E OUTRO / ITAPEVA - SP",
"SAO LUIZ AGROINDUSTRIA S/A / SANTA CRUZ DAS PALMEI",
"SAO MARTINHO S/A / AMERICO BRASILIENSE - SP",
"SAO MARTINHO S/A / IRACEMAPOLIS - SP",
"SAO MARTINHO SA / PRADOPOLIS - SP",
"SIPCAM NICHINO BRASIL S A / UBERABA - MG",
"SIPCAM NICHINO BRASIL SA / IGARAPAVA - SP",
"SISTEMA COM E REPRESENTACOES LTDA / PENAPOLIS - SP",
"SOMAX AGRO DO BRASIL LTDA / PAULINIA - SP",
"STOLLER DO BRASIL LTDA / COSMOPOLIS - SP",
"STOLLER DO BRASIL LTDA / PAULINIA - SP",
"SUMITOMO CHEMICAL BRASIL IND.QUIM.S.A / BARUERI -",
"SUMITOMO CHEMICAL BRASIL IND.QUIMICA S.A / PAULINI",
"SUSANA RIBEIRO DE MENDONCA PIRES DE CAMP / ORLANDI",
"SUSANA RIBEIRO MENDONCA PIRES CAMPO / ARARAS - SP",
"SYAGRI AGRONEGOCIOS COM E REP LTDA / ITUVERAVA - S",
"SYAGRI AGRONEGOCIOS COMERCIO & REPRESENT / GUAIRA",
"SYNGENTA PROTECAO DE CULTIVOS LTDA / PAULINIA - SP",
"SYNGENTA PROTEÇÃO DE CULTIVOS LTDA / PAULINIA - SP",
"SYNGENTA SEEDS LTDA / MATAO - SP",
"TARPON AGRO LTDA / FRANCA - SP",
"TECNOMYL BRASIL DIST. DE PROD AGRICOLAS / ITU - SP",
"TSUYOSHI OI / ITAPETININGA - SP",
"TUDO RURAL AGRONEGOCIOS DO BRASIL / ERECHIM - RS",
"UMOE BIOENERGY S.A. / SANDOVALINA - SP",
"UNIBRAS AGRO QUIMICA LTDA / RIBEIRAO PRETO - SP",
"UNICERES - COOPERATIVA DE PRODUTORES RUR / CATANDU",
"UNICERES - COOPERATIVA DE PRODUTORES RUR / MONTE A",
"UPL DO BRASIL IND E C DE INS AGRO SA / PAULINA - S",
"UPL DO BRASIL IND E COM DE INS AGROP SA / ITUVERAV",
"UPL DO BRASIL IND.E C.DE INS.AGROP. S.A. / SALTO D",
"USINA SANTA FE SA / NOVA EUROPA - SP",
"USINA SANTA ISABEL S/A / MENDONCA - SP",
"USINA SANTA ISABEL S/A / NOVO HORIZONTE - SP",
"USINA SANTA LUCIA SA / ARARAS - SP",
"USINA SAO DOMINGOS AC ALC S/A / CATANDUVA - SP",
"VETQUIMICA COMERCIAL AGRICOLA LTDA / CAMPINAS - SP",
"VETQUIMICA COMERCIAL AGRICOLA LTDA / PAULINIA - SP",
"VITORIA AGRONEGOCIOS DO NORDESTE LTDA / VÍTORIA DE",
"WINFIELD INS. AGRIC. BRASIL LTDA / PIRACICABA - SP",
"XINGFA BRASIL LTDA / SAO PAULO - SP",
"YARA BRASIL FERTILIZANTES SA / SUMARE - SP",
"YONON BRASIL DEFENSIVOS AGRICOLAS LTDA / PAULINIA",
"YONON BRASIL DEFENSIVOS AGRICOLAS LTDA / SAO PAULO",
"ZHONGSHAN QUIMICA DO BRASIL LTDA. / PAULINIA - SP"
  ]
};

let currentType = 'RRA';

let emailsClientes = loadFromStorage('emailsClientes', CONFIG.emailsClientes);
let BASE_RRA       = loadFromStorage('BASE_RRA',       CONFIG.BASE_RRA);
let BASE_RNC       = loadFromStorage('BASE_RNC',       CONFIG.BASE_RNC);
let tiposOperacao  = loadFromStorage('tiposOperacao',  CONFIG.tiposOperacao);

let isAdminLogged = false;

/* ================================
   UTILITÁRIOS GERAIS
================================ */

function isoToday() {
  const d = new Date();
  return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function carregarClientes(){
	let BASE_CLIENTES = loadFromStorage('BASE_CLIENTES', CONFIG.BASE_CLIENTES);
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

// CORREÇÃO 1: hash SHA-256 via Web Crypto API (sem bibliotecas externas)
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function loadFromStorage(key, defaultValue) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Erro ao salvar no localStorage:', e);
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ================================
   CORREÇÃO 6: Modal customizado
   Substitui prompt() / alert() / confirm() nativos
   que bloqueiam a UI e não podem ser estilizados
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

  // ✅ RESET DOS ITENS (ESSENCIAL)
  resetItensPorTipo('RRA');
  resetItensPorTipo('RNC');

  clearStatus();
}

function optionList(options, placeholder = 'Selecione...') {
  return `<option value="">${escapeHtml(placeholder)}</option>` +
    options.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
}

/* ================================
   CORREÇÃO 2: addRow sem duplicação
   Schema centralizado elimina o if/else RRA vs RNC
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
    { key: 'tipoMov',    placeholder: 'Ex.: Bloqueado' },

    { key: 'descricao',  select: () => BASE_RRA, selectPlaceholder: 'Selecione o tipo de avaria...' }
  ],
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

  // ✅ autocomplete por descrição
  attachProdutoAutocomplete(inputProduto, inputCodigo);

  // ✅ lookup por código (se existir)
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
    if (col.select) {
      return `<td><select data-k="${col.key}">${optionList(col.select(), col.selectPlaceholder)}</select></td>`;
    }
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
   LEITURA DE DADOS
================================ */

function readCommon() {
  const cliente = document.getElementById('cliente').value;
  return {
    dataHoje:            document.getElementById('dataHoje').value,
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

function readRows(type) {
  const keys = ROW_SCHEMA[type].map(c => c.key);
  return [...document.querySelectorAll(`#table${type} tbody tr`)]
    .map(tr => {
      const get = k => tr.querySelector(`[data-k="${k}"]`)?.value?.trim() || '';
      return Object.fromEntries(keys.map(k => [k, get(k)]));
    })
    .filter(r => Object.values(r).some(v => v));
}

/* ================================
   CORREÇÃO 7: validatePayload sem if/else redundante
================================ */

function validatePayload(type, payload) {
  const missing = [];

  // Os campos do formulário ficam dentro de payload.cabecalho
  const c = payload.cabecalho || {};

  if (!c.dataHoje)      missing.push('Data do reporte');
  if (!c.nfNumero)      missing.push('Nº da NF');
  if (!c.tipoOperacao)  missing.push('Tipo de operação');
  if (!c.emitente)      missing.push('Emitente');
  if (!c.destinatario)  missing.push('Destinatário');
  if (!c.cliente)       missing.push('Cliente para reporte');
  if (!c.agendamento)   missing.push('Agendamento');

  if (!payload.conferente)    missing.push(`Conferente (${type})`);
  if (!payload.itens?.length) missing.push(`Ao menos 1 item no ${type}`);

  const requiredKeys = type === 'RRA'
    ? ['produto', 'lote', 'quantidade', 'descricao']
    : ['produto', 'loteNF', 'qtdNF', 'loteFisico', 'qtdFisico', 'descricao'];

  if ((payload.itens || []).some(it => requiredKeys.some(k => !it[k]))) {
    missing.push('Campos obrigatórios em todos os itens (produto/lotes/qtd/descrição)');
  }

  return missing;
}

/* ================================
   CORREÇÃO 4: submitForm — readRows chamado uma única vez
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

  if (!itens.length || !conferente || !pdfInput?.files?.length || !fotosInput?.files?.length) {
    setStatus('err', 'Preencha todos os campos obrigatórios: Itens, Conferente, Anexo PDF e Anexo Fotos.');
    return;
  }

  const pdfBase64   = await fileToBase64(pdfInput.files[0]);
  const fotosBase64 = await Promise.all([...fotosInput.files].map(fileToBase64));


const payload = {
  meta: {
    tipoReporte: currentType,
    dataEnvio: new Date().toISOString()
  },

  cabecalho: {
    dataHoje: common.dataHoje,
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
    fotos: fotosBase64
  },

  conferente: conferente
};


  const url = CONFIG.urlUnified || CONFIG[`url${currentType}`];

  if (!url) {
    setStatus('warn', 'Configure a URL do Power Automate no bloco CONFIG (urlUnified ou urlRRA/urlRNC).');
    return;
  }

  const missing = validatePayload(currentType, payload);
    // Debug rápido (opcional): descomente para ver o que está sendo enviado
    // console.debug("payload", payload);
    // console.debug("missing", missing);
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
   CORREÇÃO 3: getListMeta() elimina todos os if/else repetidos
   nas funções de admin (addItem, updateItem, removeItem, renderItems)
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
  saveToStorage(storageKey, list);
  renderItems(type);
  if (type === 'operation') updateOperationOptions();
}

function updateItem(type, index, newValue) {
  const { list, storageKey } = getListMeta(type);
  list[index] = newValue.trim().toUpperCase();
  saveToStorage(storageKey, list);
  if (type === 'operation') updateOperationOptions();
}

async function removeItem(type, index) {
  const { list, storageKey } = getListMeta(type);
  const confirmed = await showModal({
    title:       'Remover item',
    message:     `Remover "${list[index]}"?`,
    confirmText: 'Remover',
    danger:      true
  });
  if (!confirmed) return;
  list.splice(index, 1);
  saveToStorage(storageKey, list);
  renderItems(type);
  if (type === 'operation') updateOperationOptions();
}

/* ================================
   CORREÇÃO 5: Clientes & Emails
   Usa dataset em vez de onclick inline com dados do usuário
================================ */

function renderClients() {
  const container = document.getElementById('clientList');
  container.innerHTML = '';

  Object.keys(emailsClientes).forEach(clientName => {
    const clientDiv = document.createElement('div');
    clientDiv.className  = 'client-item';
    clientDiv.dataset.client = clientName;

    const emailRows = emailsClientes[clientName].map((email, index) => `
      <div class="email-item">
        <input type="email" class="email-input" value="${escapeHtml(email)}"
               data-client="${escapeHtml(clientName)}" data-index="${index}"
               onchange="updateEmail(this.dataset.client, +this.dataset.index, this.value)" />
        <div class="email-actions">
          <button class="btn danger"
                  data-client="${escapeHtml(clientName)}" data-index="${index}"
                  onclick="removeEmail(this.dataset.client, +this.dataset.index)">×</button>
        </div>
      </div>`).join('');

    clientDiv.innerHTML = `
      <div class="client-header">
        <div class="client-name">${escapeHtml(clientName)}</div>
        <div class="client-actions">
          <button class="btn danger"
                  data-client="${escapeHtml(clientName)}"
                  onclick="removeClientByBtn(this)">Remover</button>
        </div>
      </div>
      <div class="client-emails">
        ${emailRows}
        <button class="btn secondary"
                data-client="${escapeHtml(clientName)}"
                onclick="addEmail(this.dataset.client)">+ Email</button>
      </div>`;

    container.appendChild(clientDiv);
  });
}

async function addClient() {
  const clientName = await showModal({
    title:       'Adicionar cliente',
    input:       true,
    placeholder: 'Nome do cliente…',
    confirmText: 'Adicionar'
  });
  if (!clientName) return;
  if (emailsClientes[clientName]) {
    await showModal({ title: 'Atenção', message: 'Cliente já existe!', cancelText: 'Fechar', confirmText: '' });
    return;
  }
  emailsClientes[clientName] = [];
  saveToStorage('emailsClientes', emailsClientes);
  renderClients();
  updateClientOptions();
  updateDestinatarios();
}

async function removeClientByBtn(btn) {
  const clientName = btn.dataset.client;
  const confirmed  = await showModal({
    title:       'Remover cliente',
    message:     `Remover "${clientName}" e todos os emails?`,
    confirmText: 'Remover',
    danger:      true
  });
  if (!confirmed) return;
  delete emailsClientes[clientName];
  saveToStorage('emailsClientes', emailsClientes);
  renderClients();
  updateClientOptions();
  updateDestinatarios();
}

function addEmail(clientName) {
  emailsClientes[clientName].push('');
  saveToStorage('emailsClientes', emailsClientes);
  renderClients();
}

function updateEmail(clientName, index, newEmail) {
  emailsClientes[clientName][index] = newEmail.trim();
  saveToStorage('emailsClientes', emailsClientes);
  updateDestinatarios();
}

function removeEmail(clientName, index) {
  emailsClientes[clientName].splice(index, 1);
  saveToStorage('emailsClientes', emailsClientes);
  renderClients();
  updateDestinatarios();
}

/* ================================
   ADMIN — LOGIN / PAINEL
   CORREÇÃO 1: compara hash SHA-256, nunca texto puro
================================ */

function initAdmin() {
  const adminBtn       = document.getElementById('adminBtn');
  const logoutBtn      = document.getElementById('logoutBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminPanel     = document.getElementById('adminPanel');

  adminBtn.addEventListener('click', () => {
    isAdminLogged ? showAdminPanel() : showAdminLogin();
  });

  logoutBtn.addEventListener('click', () => {
    isAdminLogged = false;
    adminPanel.style.display = 'none';
    document.querySelector('main').style.display = 'block';
    adminBtn.textContent = 'Admin';
  });

  adminLoginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    const hash     = await sha256(password);
    if (hash === CONFIG.adminPasswordHash) {
      isAdminLogged = true;
      closeAdminLogin();
      showAdminPanel();
      adminBtn.textContent = 'Admin (Logado)';
    } else {
      setStatus('err', 'Senha incorreta.');
      document.getElementById('adminPassword').value = '';
      document.getElementById('adminPassword').focus();
    }
  });

  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => switchAdminTab(tab.dataset.tab));
  });

  document.getElementById('addClientBtn').addEventListener('click', addClient);
  document.getElementById('addRraBtn').addEventListener('click',       () => addItem('rra'));
  document.getElementById('addRncBtn').addEventListener('click',       () => addItem('rnc'));
  document.getElementById('addOperationBtn').addEventListener('click', () => addItem('operation'));

  renderClients();
  renderItems('rra');
  renderItems('rnc');
  renderItems('operation');
}

function showAdminLogin() {
  document.getElementById('adminLoginModal').style.display = 'flex';
  document.getElementById('adminPassword').focus();
}

function closeAdminLogin() {
  document.getElementById('adminLoginModal').style.display = 'none';
  document.getElementById('adminPassword').value = '';
}

function showAdminPanel() {
  document.querySelector('main').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'block';
  switchAdminTab('clients');
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`${tabName}-section`).classList.add('active');
}

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
  initAdmin();
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

  console.log(`✅ Produtos indexados: ${index.length}`);
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

  // ✅ abre para cima, colada ao input (no DOCUMENTO)
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

    // ✅ posiciona UMA ÚNICA VEZ
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