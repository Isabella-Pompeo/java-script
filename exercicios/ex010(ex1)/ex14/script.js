function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min =  data.getMinutes()
    var sec = data.getSeconds()


    
    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${sec} segundos.`
    if ( hora >= 0 && hora <= 12) {
        //BOM DIA!!
        img.src = 'pexels-torsten-kellermann-955656.jpg'
        document.body.style.background = '#cebd85'
    } else if ( hora >= 12 && hora <= 17) {
        //BOA TARDE!!
        img.src = 'pexels-george-desipris-858241.jpg'
        document.body.style.background = '#905925'
    } else {
        //BOA NOITE!!
        img.src = 'pexels-pixabay-414144.jpg'
        
        document.body.style.background = '#1d335f'
    }
}