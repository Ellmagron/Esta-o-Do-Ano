function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var mes = new Date()
    var data = mes.getMonth()

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
}