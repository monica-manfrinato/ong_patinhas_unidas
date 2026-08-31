//Campo de formulário para doações
//Cards com as fotinhas dos animais
//Botão em cada card 'mais informações' e abre um pop-up com mais infromações
//Menu sanduíche para 'animais' 'nos ajude'

class Animal {
  constructor(nome, especie, idade, imagem, descricao) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.imagem = imagem;
    this.descricao = descricao;
  }
}

const animais = [
  new Animal(
    "Bidu",
    "Cachorro",
    "4 anos",
    "src/images/bidu.jpg",
    "Muito esperto, obediente e amigável.",
  ),
  new Animal(
    "Chovinista",
    "Porco",
    "3 anos",
    "src/images/chovinista.jpg",
    "Muito limpinho e sociável.",
  ),
  new Animal(
    "Floquinho",
    "Cachorro",
    "2 anos",
    "src/images/floquinho.jpg",
    "Dócil, brincalhão e vacinado.",
  ),
  new Animal(
    "Mingau",
    "Gato",
    "2 anos",
    "src/images/mingau.jpg",
    "Calmo, adorável e castrado.",
  ),
  new Animal(
    "Monicão",
    "Cachorro",
    "3 anos",
    "src/images/monicao.jpg",
    "Protetor, cheio de energia e carinhoso.",
  ),
];

function criarCard(animal) {
  const col = document.createElement("div");
  col.className = "col";

  const card = document.createElement("article");
  card.className = "card h-100 shadow-sm";

  card.innerHTML = `
    <img src="${animal.imagem}" class="card-img-top" alt="${animal.nome}">
    <div class="card-body">
      <h5 class="card-title fw-bold">${animal.nome}</h5>
      <p class="card-text text-muted mb-1">${animal.especie}</p>
      <p class="card-text text-success fw-bold">${animal.idade}</p>
    </div>
    <div class="card-footer bg-transparent border-top-0 pb-3">
      <button 
        class="btn btn-outline-danger w-100" 
        data-bs-toggle="modal" 
        data-bs-target="#modalAdocao"
      >
        Mais informações
      </button>
    </div>
  `;

  // Preenche o modal ao clicar em "Mais informações"
  const btnInfo = card.querySelector("button");
  btnInfo.addEventListener("click", () => {
    document.querySelector("#modalTitulo").innerText =
      `Conheça o(a) ${animal.nome}`;
    document.querySelector("#modalCorpo").innerHTML = `
      <img src="${animal.imagem}" class="img-fluid rounded mb-3 w-100" alt="${animal.nome}">
      <p><strong>Espécie:</strong> ${animal.especie}</p>
      <p><strong>Idade:</strong> ${animal.idade}</p>
      <p><strong>Sobre:</strong> ${animal.descricao}</p>
    `;
  });

  col.appendChild(card);
  return col;
}

// Renderiza a lista de animais
const container = document.querySelector("#containerAnimais");
if (container) {
  animais.forEach((animal) => container.appendChild(criarCard(animal)));
}
