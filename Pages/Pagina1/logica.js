function createClientCard(item) {
  const clientCard = document.createElement('div');
  clientCard.className = 'client-card';
  clientCard.addEventListener("click", () => alert(`${item.tutor.nome} - ${item.tutor.telefone} - ${item.tutor.endereco} - ${item.tutor.endereco} - ${item.animal.idade} - ${item.tutor.porte}`))
;  
  const h1 = document.createElement('h1');
  h1.textContent = item.animal.nomePet;
  const data = new Date(item.tutor.dataAtendimento);
  const p = document.createElement('p');
  p.textContent = `Data de atendimento: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  

  clientCard.appendChild(h1);
  clientCard.appendChild(p);

  return clientCard;
}

function renderClientList(items) {
  const clientList = document.createElement('div');
  clientList.className = 'client-list';

  items.forEach((item, index) => {
      const clientCard = createClientCard(item, index);
      console.log(item);
      clientList.appendChild(clientCard);
  });

  return clientList;
}

const items = localStorage.getItem('dadosCliente');



const clientListContainer = document.getElementById('clientListContainer');
const renderedClientList = renderClientList(JSON.parse(items));
clientListContainer.appendChild(renderedClientList);