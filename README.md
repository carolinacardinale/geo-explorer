# 🌎 Geo-Explorer

Projeto desenvolvido como desafio de portfólio para praticar organização de projetos, manipulação de dados em JSON, criação de comandos, testes automatizados e integração com ferramentas por meio do **Model Context Protocol (MCP)**.

O Geo-Explorer permite consultar trilhas de aprendizagem, gerar desafios de código e emitir certificados fictícios de conclusão.

---

## 🚀 Funcionalidades

O projeto possui quatro comandos principais:

- **Trilha:** apresenta um plano de estudos para uma tecnologia.
- **Desafio:** gera um desafio de programação conforme tecnologia e nível.
- **Certificado:** gera um certificado fictício para uma trilha concluída.
- **Tecnologias:** lista todas as tecnologias disponíveis na base.

Também foi criado um **servidor MCP local**, permitindo que agentes compatíveis utilizem os recursos do Geo-Explorer como ferramentas.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- JSON
- Jest
- Zod
- Model Context Protocol (MCP)

---

## 📁 Estrutura do projeto

```text
geo-explorer/
│
├── data/
│   └── trilhas.json
│
├── src/
│   ├── index.js
│   ├── trilha.js
│   ├── desafio.js
│   ├── certificado.js
│   └── utils.js
│
├── mcp/
│   └── server.mjs
│
├── tests/
│   ├── trilha.test.js
│   ├── desafio.test.js
│   └── certificado.test.js
│
├── docs/
│   └── mcp.md
│
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/carolinacardinale/geo-explorer.git
```

Entre na pasta:

```bash
cd geo-explorer
```

### 2. Instale as dependências

```bash
npm install
```

> Recomendado: Node.js 20 ou superior.

---

## 🧭 Consultar uma trilha

```bash
node src/index.js trilha javascript
```

Exemplo de saída:

```text
Trilha: JavaScript

Nível sugerido: iniciante
Carga horária fictícia: 20 horas

Módulos:
1. Variáveis e tipos de dados
2. Operadores
3. Estruturas condicionais
4. Laços de repetição
5. Funções
```

Também é possível usar:

```bash
node src/index.js trilha python
node src/index.js trilha html-css
node src/index.js trilha react
```

---

## 💻 Gerar um desafio

```bash
node src/index.js desafio javascript iniciante
```

Outro exemplo:

```bash
node src/index.js desafio python intermediario
```

Os níveis disponíveis na base atual são:

- `iniciante`
- `intermediario`

---

## 🎓 Gerar um certificado fictício

```bash
node src/index.js certificado javascript "Carolina Cardinale"
```

Exemplo de resultado:

```text
=======================================

        CERTIFICADO GEO-EXPLORER

Certificamos que

Carolina Cardinale

concluiu a trilha

JavaScript

Carga horária fictícia: 20 horas

=======================================
```

> O certificado é apenas demonstrativo e não possui validade acadêmica ou profissional.

---

## 📚 Listar tecnologias disponíveis

```bash
node src/index.js tecnologias
```

A versão atual possui trilhas para:

- JavaScript
- Python
- HTML e CSS
- React

---

## 🧪 Testes automatizados

Os testes verificam situações como:

- geração correta de trilhas;
- tratamento de tecnologia inexistente;
- geração de desafios;
- tratamento de níveis indisponíveis;
- geração de certificados;
- validação do nome no certificado.

Execute:

```bash
npm test
```

---

## 🔌 Servidor MCP

O projeto inclui um servidor MCP local utilizando transporte `stdio`.

Para executar:

```bash
npm run mcp
```

As ferramentas expostas são:

| Ferramenta | Função |
|---|---|
| `consultar_trilha` | Consulta uma trilha de aprendizagem |
| `gerar_desafio` | Gera um desafio conforme tecnologia e nível |
| `gerar_certificado` | Gera um certificado fictício |
| `listar_tecnologias` | Lista tecnologias cadastradas |

Mais detalhes estão em [`docs/mcp.md`](docs/mcp.md).

---

## 🧠 Como o projeto funciona

Fluxo principal:

```text
Usuário
   ↓
Linha de comando
   ↓
Comandos do Geo-Explorer
   ↓
data/trilhas.json
```

Com MCP:

```text
Agente ou ferramenta compatível
           ↓
      Servidor MCP
           ↓
       Geo-Explorer
           ↓
     Base de trilhas
```

A mesma lógica de negócio é reutilizada pela linha de comando e pelo servidor MCP.

---

## ✨ Melhorias realizadas

Além dos três comandos solicitados no desafio, esta versão inclui:

- comando adicional para listar tecnologias;
- organização modular do código;
- tratamento de erros para tecnologias e níveis inexistentes;
- quatro trilhas fictícias;
- diferentes níveis de desafios;
- testes automatizados;
- documentação específica do servidor MCP;
- servidor MCP com ferramentas reutilizando a lógica principal do projeto.

---

## 📖 O que aprendi

Durante o desenvolvimento deste projeto foram praticados conceitos de:

- organização e estruturação de projetos Node.js;
- leitura e utilização de dados armazenados em JSON;
- modularização e reutilização de código;
- criação de aplicações de linha de comando;
- validação de entradas e tratamento de erros;
- testes automatizados com Jest;
- criação e descrição de ferramentas MCP;
- integração entre agentes e aplicações por meio de um protocolo padronizado;
- importância de revisar código gerado por agentes antes de publicá-lo.

---

## 🔐 Segurança

Este projeto não exige senhas, tokens ou chaves de API.

Nunca publique credenciais ou outras informações privadas no GitHub. Arquivos de ambiente (`.env`) estão incluídos no `.gitignore`.

---

## 👩‍💻 Autora

**Carolina Cardinale**

Projeto desenvolvido para fins educacionais e de portfólio.
