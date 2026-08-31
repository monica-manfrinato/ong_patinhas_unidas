# 🐾 ONG Patinhas Unidas

Uma plataforma web desenvolvida para facilitar a **adoção de animais resgatados** e a **arrecadação de doações** (alimentos, suprimentos e apoio financeiro) para ajudar a manter a ONG.

---

## 📌 Sobre o Projeto

O **Patinhas Unidas** é um projeto social voltado para a causa animal. O site tem como objetivo principal conectar animais resgatados a novos lares amorosos, além de fornecer um canal simples e acessível para que a comunidade possa contribuir com doações.

### ✨ Principais Funcionalidades

- 🐶 **Vitrine de Adoção:** Exibição de cards responsivos com foto, nome, espécie, idade e detalhes adicionais de cada animal disponível para adoção.
- 🤝 **Formulário de Doações:** Sistema prático para solicitação de doações, permitindo selecionar o tipo de contribuição (alimentos, medicamentos, insumos, etc.) e registrar os dados de contato do doador.
- 📱 **Design Responsivo & Moderno:** Interface estilizada com o framework **Bootstrap**, adaptada para visualização em computadores, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das páginas.
- **Bootstrap 5:** Framework front-end para componentes visuais (Navbar, Cards, Formulários) e grid responsivo.
- **Node.js & NPM:** Gerenciamento de pacotes e dependências do projeto.

---

## 🚀 Guia de Instalação e Configuração

Siga os passos abaixo para clonar, instalar as dependências e executar o projeto em sua máquina local.

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [NPM](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- Editor de código de sua preferência (ex: [VS Code](https://code.visualstudio.com/))

---

### 📥 Passos para Execução

#### 1. Clonar ou Baixar o Repositório

Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/monica-manfrinato/ong_patinhas_unidas.git
```

Em seguida, acesse a pasta do projeto:

```bash
cd ong_patinhas_unidas
```

#### 2. Instalação das Dependências via NPM

Para instalar o **Bootstrap** e demais dependências do projeto via terminal, rode o comando:

```bash
npm install
```

#### 3. Vinculação do Bootstrap no HTML

Após executar o comando `npm i`, a pasta `node_modules/` será criada. Certifique-se de vincular os arquivos CSS e JS do Bootstrap no seu HTML:

##### No `<head>` (Estilos CSS):

```html
<link
  rel="stylesheet"
  href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
/>
```

##### Antes do fechamento da tag `</body>` (Scripts JS):

```html
<script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
```

---

### 🖥️ Como Executar o Projeto Localmente

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html`.
3. Clique com o botão direito e selecione **"Open with Live Server"** (ou use o atalho `Alt + L, Alt + O`).

---

## 📁 Estrutura de Pastas

```text
ong-patinhas-unidas/
├── node_modules/         # Pacotes instalados via NPM (incluindo Bootstrap)
├── src/                  # Sources do projeto
    └── images            # Imagens dos animais
    └── scripts           # Arquivos JS para interatividade
    └── styles            # Arquivos CSS para estilização (não utilizado)
├── .gitignore            # Pastas que não serão enviadas ao repositório
├── index.html            # Página principal da aplicação
├── LICENSE               # Licença para o uso do projeto
├── package.json          # Configuração de dependências do projeto
├── package-lock.json     # Mapeamento exato de versões das dependências
└── README.md             # Documentação do projeto

```

---

## 🤝 Como Contribuir

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça o **Commit** de suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o **Push** para a Branch (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e sociais.

---

## 👥 Integrantes (3º ano B)

- **Heloísa Gabrielly Paixão** Nº09 - [GitHub](https://github.com/heloisagpaixao)
- **Mônica Cotrim Manfrinato** Nº21 - [GitHub](https://github.com/monica-manfrinato)

---

❤️ **ONG Patinhas Unidas** | _Ajudando quem sempre nos dá amor incondicional._

---
