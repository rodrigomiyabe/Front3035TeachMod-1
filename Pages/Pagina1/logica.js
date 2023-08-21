function createClientCard(item) {
  const clientCard = document.createElement('div');
  clientCard.className = 'client-card';

  console.log(item);

  const h1 = document.createElement('h1');
  h1.textContent = item.animal.nomePet;
  const data = new Date(item.tutor.dataAtendimento);
  const p = document.createElement('p');
  p.textContent = `Data de atendimento: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

  clientCard.appendChild(h1);
  clientCard.appendChild(p);

  clientCard.addEventListener('click', (item) => {
    console.log('to aqui')
  
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'teste';
   
    const p = document.createElement('p');
    p.textContent = `Data de atendimento: `
  
     const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';

    // Adicionar evento ao botão de fechar o modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Anexar elementos ao modal
    modal.appendChild(closeButton);
    modal.appendChild(h1);
    modal.appendChild(p);

    // Anexar o modal ao corpo do documento
    document.body.appendChild(modal);

    // Exibir o modal
    modal.style.display = 'block';
  })

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