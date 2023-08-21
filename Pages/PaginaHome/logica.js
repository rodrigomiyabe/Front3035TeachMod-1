var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

document.addEventListener("DOMContentLoaded", function() {
  const salvarButton = document.getElementById('salvarDados');

  salvarButton.addEventListener('click', function() {

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const data = document.getElementById("data").value;
    const nomePet = document.getElementById("nomePet").value;
    const idade = document.getElementById("idade").value;
    const porte = document.getElementById("porte").value;

    const dadosCliente = {
      tutor: {
          nome: nome,
          telefone: telefone,
          endereco: endereco,
          dataAtendimento: data
      },
      animal: {
          nome: nomePet,
          idade: idade,
          porte: porte
      }
  };

    // Verifica se o Local Storage está disponível
    if (typeof(Storage) !== "undefined") {
      // Salva os dados no Local Storage
      localStorage.setItem("dadosCliente", JSON.stringify(dadosCliente));
      alert('Dados salvos no Local Storage!');
    } else {
      console.log("O Local Storage não está disponível no navegador.");
    }
  });
});



