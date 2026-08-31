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
    "Muito esperto, obediente e amigável."
  ),
  new Animal(
    "Chovinista",
    "Porquinho",
    "3 anos",
    "src/images/chovinista.jpg",
    "Muito limpinho e sociável."
  ),
  new Animal(
    "Floquinho",
    "Cachorro",
    "2 anos",
    "src/images/floquinho.jpg",
    "Dócil, brincalhão e vacinado."
  ),
  new Animal(
    "Mingau",
    "Gato",
    "2 anos",
    "src/images/mingau.jpg",
    "Calmo, adorável e castrado."
  ),
  new Animal(
    "Monicão",
    "Cachorro",
    "3 anos",
    "src/images/monicao.jpg",
    "Protetor, cheio de energia e carinhoso."
  )
];

let animalSelecionado = null;

function criarCard(animal) {
  const col = document.createElement("div");
  col.className = "col";

  const card = document.createElement("article");
  card.className = "card h-100 shadow-sm";

  card.innerHTML = `
    <img src="${animal.imagem}" class="card-img-top" alt="${animal.nome}">
    <div class="card-body">
      <h5 class="card-title fw-bold">${animal.nome}</h5>
      <p class="card-text text-muted mb-1">${animal.especie} - ${animal.idade}</p> 
    </div>
    <div class="card-footer bg-transparent border-top-0 pb-3">
      <button 
        class="btn btn-outline-danger w-100 btn-detalhes" 
        data-bs-toggle="modal" 
        data-bs-target="#modalAdocao"
      >
        Mais informações
      </button>
    </div>
  `;

  // Preenche as informações do modal ao clicar
  const btnInfo = card.querySelector(".btn-detalhes");
  btnInfo.addEventListener("click", () => {
    animalSelecionado = animal;
    document.querySelector("#modalTitulo").innerText = `Conheça o(a) ${animal.nome}`;
    document.querySelector("#modalImg").src = animal.imagem;
    document.querySelector("#modalImg").alt = animal.nome;
    document.querySelector("#modalEspecie").innerText = animal.especie;
    document.querySelector("#modalIdade").innerText = animal.idade;
    document.querySelector("#modalDescricao").innerText = animal.descricao;
    document.querySelector("#btnQueroAdotar").innerText = `Quero adotar o(a) ${animal.nome}!`;
  });

  col.appendChild(card);
  return col;
}

// 1. Renderiza a lista de animais
const container = document.querySelector("#containerAnimais");
if (container) {
  animais.forEach((animal) => container.appendChild(criarCard(animal)));
}

// 2. Transição do Modal (Das informações para o Formulário de adoção)
const btnQueroAdotar = document.querySelector("#btnQueroAdotar");
if (btnQueroAdotar) {
  btnQueroAdotar.addEventListener("click", () => {
    if (animalSelecionado) {
      document.querySelector("#modalTitulo").innerText = `Formulário de Adoção - ${animalSelecionado.nome}`;
    }
    document.querySelector("#passoInfo").classList.add("d-none");
    document.querySelector("#formAdocaoModal").classList.remove("d-none");
  });
}

// 3. Submissão do Formulário de Adoção no Modal
const formAdocaoModal = document.querySelector("#formAdocaoModal");
if (formAdocaoModal) {
  formAdocaoModal.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeAnimal = animalSelecionado ? animalSelecionado.nome : "pet";
    alert(`Obrigado! A solicitação para adotar o(a) ${nomeAnimal} foi enviada. Aguarde retorno da Patinhas Unidas!`);

    formAdocaoModal.reset();

    const modalElemento = document.querySelector("#modalAdocao");
    const modalBootstrap = bootstrap.Modal.getInstance(modalElemento);
    if (modalBootstrap) {
      modalBootstrap.hide();
    }
  });
}

// 4. Reseta a tela do modal sempre que for fechado
const modalAdocao = document.querySelector("#modalAdocao");
if (modalAdocao) {
  modalAdocao.addEventListener("hidden.bs.modal", () => {
    document.querySelector("#passoInfo").classList.remove("d-none");
    document.querySelector("#formAdocaoModal").classList.add("d-none");
    if (formAdocaoModal) formAdocaoModal.reset();
  });
}

// 5. Submissão do Formulário de Doações Principal
const formDoacao = document.querySelector("#formDoacao");
if (formDoacao) {
  formDoacao.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Solicitação de doação enviada com sucesso. Aguarde retorno da Patinhas Unidas!");
    e.target.reset();
  });
}