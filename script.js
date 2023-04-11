const msg = document.querySelector(".msg");
const img = document.querySelector("#foto");
const mes = new Date();
const data = mes.getMonth();

let sesson = "";

const estaçao = {
  Primavera: {
    img: "img/spring.png",
    color: "#c0958e",
  },
  Outono: {
    img: "img/autum.png",
    color: "#d94c3a",
  },
  Inverno: {
    img: "img/winter.png",
    color: "#6c7eab",
  },
  Verao: {
    img: "img/summer.png",
    color: "#579ae1",
  },
};

data >= 9 && data <= 10
  ? (sesson = "Primavera")
  : data >= 3 && data <= 5
  ? (sesson = "Outono")
  : data >= 6 && data <= 8
  ? (sesson = "Inverno")
  : (sesson = "Verão");

window.addEventListener("load", function () {
  msg.textContent = sesson;
  img.src = estaçao[sesson].img;
  this.document.body.style.background = estaçao[sesson].color;
});

