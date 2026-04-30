# 📦 Portal RRA / RNC – Bravo Serviços Logísticos

Portal web para **registro e envio de RRA (Relatório de Avaria)** e **RNC (Relatório de Não Conformidade)**, integrado ao **Power Automate**, com interface moderna, acessível e painel administrativo embutido.

---

## 🚀 Funcionalidades

### ✅ Operacionais
- Registro de **RRA (Avaria)** e **RNC (Não Conformidade)**
- Alternância dinâmica entre RRA e RNC por abas
- Inclusão de múltiplos itens por reporte
- Upload de:
  - 📄 PDF escaneado (RRA/RNC)
  - 📸 Múltiplas fotos
- Envio automático via **Power Automate (HTTP Request)**
- Mensagens de status (sucesso, erro e alerta)
- Tema **claro / escuro** com persistência no navegador

---

### ✅ Inteligência de Cadastro
- **Autocomplete de produtos** por descrição
- Preenchimento automático do produto a partir do código
- Seleção de **múltiplas avarias** no RRA
- Prevenção de duplicação de avarias no mesmo item
- Máscaras e validação para campos numéricos

---

### ✅ Painel Administrativo
- Login protegido por **hash SHA-256** (sem senha em texto puro)
- Gerenciamento via interface gráfica:
  - 📧 Clientes e seus emails de reporte
  - ⚠️ Tipos de Avaria (RRA)
  - ❌ Tipos de Não Conformidade (RNC)
  - 🔄 Tipos de Operação
- Persistência usando **localStorage**
- Modais customizados (substituem `alert`, `confirm`, `prompt`)

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível  
- **CSS3** – Tema escuro/claro, layout responsivo e UI moderna  
- **JavaScript (Vanilla)** – Toda a lógica da aplicação  
- **Power Automate** – Recebimento das informações e envio de emails  
- **Web Crypto API** – Segurança de senha  
- **LocalStorage** – Persistência local de dados administrativos  

---

## 📁 Estrutura do Projeto

```text
/
├── index.html        # Página principal
├── styles.css        # Estilos (tema dark/light + admin)
├── script.js         # Lógica da aplicação
├── produtos.js       # Base de produtos (código → descrição)
└── README.md         # Documentação do projeto