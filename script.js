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
  if (sesson === "Primavera") {
    msg.textContent = "Primavera";
    img.src = estaçao[sesson].img;
    document.body.style.background = "#c0958e";
  } else if (sesson === "Outono") {
    msg.textContent = "Outono";
    img.src = estaçao[sesson].img;
    document.body.style.background = "#d94c3a";
  } else if (sesson === "Inverno") {
    msg.textContent = "Inverno";
    img.src = estaçao[sesson].img;
    document.body.style.background = "#6c7eab";
  } else {
    msg.textContent = "Verão";
    img.src = estaçao[sesson].img;
    document.body.style.background = "#579ae1";
  }
});

/*
 if (data >= 9 && data <= 10) {
        msg.innerHTML = 'Primavera'
        document.body.style.background = '#c0958e'
        img.src = 'img/spring.png'
    } else if (data >= 3 && data <= 5){
        msg.innerHTML = 'Outono'
        document.body.style.background = '#d94c3a'
        img.src = 'img/autum.png'
    } else if (data >= 6 && data <= 8){
        msg.innerHTML = 'Inverno'
        document.body.style.background = '#6c7eab'
        img.src = 'img/winter.png'
    } else {
        msg.innerHTML = 'Verão'
        document.body.style.background = '#579ae1'
        img.src = 'img/summer.png'
    }



    const seasons = {
        primavera: {
            color: '#c0958e',
            image: 'img/spring.png'
        },
        outono: {
            color: '#d94c3a',
            image: 'img/autum.png'
        },
        inverno: {
            color: '#6c7eab',
            image: 'img/winter.png'
        },
        verao: {
            color: '#579ae1',
            image: 'img/summer.png'
        }
    };










    */
