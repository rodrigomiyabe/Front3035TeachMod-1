
// const clientList = document.querySelector('.client-list');

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const dadosArmazenados = localStorage.getItem(key);
//     const dadosCliente = JSON.parse(dadosArmazenados);

//     const clientCard = document.createElement('div');
//     clientCard.className = 'client-card';
//     clientCard.onclick = function() {
//         openModal(dadosCliente); // Passar os dados do cliente para a função
//     };

//     const clientName = dadosCliente.tutor.nome;
//     const animalName = dadosCliente.animal.nome;
//     const atendimentoDate = dadosCliente.tutor.dataAtendimento;

//     clientCard.innerHTML = `
//         <h2>Cliente: ${clientName}</h2>
//         <p>Animal: ${animalName}</p>
//         <p>Data do Atendimento: ${atendimentoDate}</p>
//     `;

//     clientList.appendChild(clientCard);
// }

// // Funções para manipular o modal
// function openModal(clientData) {
//     const modal = document.getElementById('modal');
//     const modalContent = modal.querySelector('.modal-content');

//     modalContent.innerHTML = `
//         <span class="close" onclick="closeModal()">&times;</span>
//         <h2>Detalhes do Cliente</h2>
//         <p>Nome: ${clientData.tutor.nome}</p>
//         <p>Animal: ${clientData.animal.nome}</p>
//         <p>Data do Atendimento: ${clientData.tutor.dataAtendimento}</p>
//     `;

//     modal.style.display = 'block';
// }

// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
// }

const cardContainer = document.getElementById('cardContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

const dadosArmazenados = localStorage.getItem("dadosCliente");
const dadosUsuarios = JSON.parse(dadosArmazenados);

function criarCard(dadosArmazenados) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `${dadosArmazenados.nomePet} - ${dadosArmazenados.dataAtendimento}`;  

    card.addEventListener('click', () => {
        abrirModal(dadosArmazenados);
      }); 

      return card;
}

function abrirModal(dadosArmazenados) {
    modalContent.textContent = `${dadosArmazenados.nomePet} - ${dadosArmazenados.dataAtendimento}`; 
    modal.style.display = 'block';
  }
  
  // Função para fechar o modal
  function fecharModal() {
    modal.style.display = 'none';
  }
  
  // Criar e adicionar os cards
  clientesCadastrados.forEach(dadosArmazenados => {
    const card = criarCard(dadosArmazenados);
    cardContainer.appendChild(card);
  });
  
  // Fechar o modal quando clicar fora dele
  modal.addEventListener('click', fecharModal);