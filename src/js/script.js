var Aulas = [
  "/src/images/anima.gif",
  "/src/documents/VC_Git_Aula01.pdf",
  "/src/documents/VC_Git_Aula02.pdf",
  "/src/documents/VC_Git_Aula03.pdf",
  "/src/documents/VC_Git_Aula04.pdf",
  "/src/documents/VC_Git_Aula05.pdf",
  "/src/documents/VC_Git_Aula06.pdf",
  "/src/documents/VC_Git_Aula07.pdf",
  "/src/documents/VC_Git_Aula08.pdf",
  "/src/documents/VC_Git_Aula09.pdf",
  "/src/images/prof.jpg",
  "/src/images/DaniGoogle.png",
  "/src/images/coverVideo.mp4",
];

function buscarAL() {
  conteudo.innerHTML = " ";

  var aula = document.getElementById("aula");
  if (aula.value <= 0 || aula.value > 12) {
    aula.value = 0;
  }

  conteudo.innerHTML += `${
    aula.value == 0
      ? `<iframe class="imgIframe" src=${
          Aulas[aula.value]
        } target='_blank' rel='noreferrer'></iframe>
  </div>`
      : `<iframe class="imgIframe" src=${
          Aulas[aula.value]
        } target='_blank' rel='noreferrer'></iframe>
  </div>`
  }`;
}
