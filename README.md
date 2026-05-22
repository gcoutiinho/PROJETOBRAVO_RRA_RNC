# Portal RRA / RNC — Bravo Serviços Logísticos

Aplicação web para registro e envio de **RRA (Relatório de Avaria)** e **RNC (Relatório de Não Conformidade)**, com envio de dados para um fluxo do **Power Automate** e interface de uso simples.

---

## Visão Geral

O projeto oferece um formulário de reporte com duas abas:

- **RRA** — relatório de avarias
- **RNC** — relatório de não conformidade

Cada tipo de reporte permite:

- cadastro de múltiplos itens
- upload de **PDF escaneado**
- upload de **múltiplas fotos**
- seleção de cliente e destinatários de email
- envio de payload em JSON para um endpoint do Power Automate

A interface também suporta:

- troca de tema **claro / escuro** com persistência no navegador
- preenchimento automático de produtos via `produtos.js`
- seleção de tipos de operação e categorias de avaria/não conformidade

---

## Principais recursos

- Abas de alternância entre **RRA** e **RNC**
- Registro de itens com campos específicos para cada tipo
- Upload de anexos: **PDF + fotos**
- Validação de campos obrigatórios antes do envio
- Mensagens de status de envio (sucesso, erro, timeout)
- Tema claro/escuro mantido em `localStorage`
- Autocomplete de produtos por descrição e lookup por código
- Listas de clientes, tipos de avaria/RNC e operações configuráveis no código

---

## Arquivos do projeto

```text
/
├── index.html     # Página principal e formulários
├── styles.css     # Estilos do layout, tabela, botões e tema
├── script.js      # Lógica da aplicação e envio de dados
├── logo.png       # Logo da Bravo Serviços Logísticos
├── Bravo V.png    # Favicon / ícone da aplicação
├── LICENSE        # Licença do projeto
└── README.md      # Documentação atual
```

> Observação: `index.html` referencia `produtos.js` para autocomplete de produtos. Se esse arquivo não estiver presente no repositório, a funcionalidade de busca por código/descrição ficará desativada.

---

## Como usar

1. Abra `index.html` em um navegador moderno.
2. Selecione a aba **RRA** ou **RNC**.
3. Preencha os dados da nota fiscal, cliente e relatório.
4. Adicione ao menos um item na tabela.
5. Faça upload do **PDF** e das **fotos**.
6. Clique em **Enviar**.

---

## Configuração de envio

O endpoint do Power Automate está definido no objeto `CONFIG` em `script.js`:

- `urlUnified` — URL padrão para envio dos reports
- `requestTimeoutMs` — timeout da requisição

Se necessário, você pode alterar ou separar URLs por tipo de reporte no próprio arquivo `script.js`.

---

## Personalização

### Lista de clientes e emails

Os destinatários são definidos em `CONFIG.emailsClientes` dentro de `script.js`.

### Tipos de operação

Os valores disponíveis no select de operação são carregados de `CONFIG.tiposOperacao`.

### Tipos de RRA e RNC

As listas padrão aparecem em `CONFIG.BASE_RRA` e `CONFIG.BASE_RNC`.

---

## Observações importantes

- O botão **Enviar** dispara uma requisição `POST` para o endpoint configurado.
- Se `urlUnified` não estiver configurado, a app exibe um aviso e não envia o formulário.
- A configuração do endpoint está diretamente em `script.js` dentro do objeto `CONFIG`.
- O projeto é construído em **HTML + CSS + JavaScript puro**; não há dependência de frameworks.