const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Função de interatividade com o texto

function showAdditionalText() {
  const additionalText = document.getElementById("additionalText");

  // Verifica se o texto está oculto
  if (additionalText.classList.contains("hidden")) {
    additionalText.style.display = "block";
    //Exibe o texto
    additionalText.classList.remove("hidden");
  } else {
     // Oculta o texto
    additionalText.style.display = "none";
    additionalText.classList.add("hidden");
  }
}

