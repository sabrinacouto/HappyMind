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

// Integrando o bot com o html
window.watsonAssistantChatOptions = {
  integrationID: "4855c890-ba07-45ce-a884-fffb3f8272f8", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "824383ff-fd9b-4ac1-9d86-3ec21aa89c21", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

