const modalContainer = document.getElementById("modalContainer");
const openModal = document.getElementById("openModal");
const youtubeIframe = document.getElementById("youtubeIframe");

openModal.addEventListener("click", function (){
  modalContainer.style.display = "block";
})

window.addEventListener("click", function (event){
  if(event.target == modalContainer){
    modalContainer.style.display = "none";
    youtubeIframe.src = youtubeIframe.src; // faz com que o iframe volte ao início e não siga executando
  }
})

function playAudio() {
  const music = document.getElementById("music");  // Pega o elemento de áudio pelo ID "music"
  const speakerSlash = document.getElementsByClassName("ph-speaker-simple-slash")[0];  // Pega o primeiro elemento com a classe "ph-speaker-slash"
  const speakerHigh = document.getElementsByClassName("ph-speaker-high")[0];  // Pega o primeiro elemento com a classe "ph-speaker-high"

  if (!music.paused && !music.ended) {
    // Verifica se o áudio não está pausado e não terminou de tocar
    music.pause();  // Pausa a reprodução do áudio
    speakerSlash.style.display = "block";  // Mostra o ícone de "speaker-slash"
    speakerHigh.style.display = "none";  // Esconde o ícone de "speaker-high"
  } else {
    music.play();  // Inicia a reprodução do áudio
    speakerSlash.style.display = "none";  // Esconde o ícone de "speaker-slash"
    speakerHigh.style.display = "block";  // Mostra o ícone de "speaker-high"
  }
}
