function carregar(){
  let data = new Date()
  let horas = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()
  let msg = document.getElementById('msg')
  let img = document.getElementById('img')
  let modo = document.getElementById('modo')
  let corpo = document.body
  
  if (horas >= 5 && horas < 12) {
    modo.innerHTML = 'Bom dia!'
    corpo.style.background = '#D9BDAD'
    img.src = 'fotomanha.jpg'
  } else if (horas >= 12 && horas < 18) {
    modo.innerHTML = 'Boa tarde';
    img.src = 'fototarde.jpg'
    corpo.style.background = '#935732'
  } else if (horas >= 18 && horas < 23) {
    modo.innerHTML = 'Boa noite'
    img.src = 'fotonoite.jpg'
    corpo.style.background = '#522B5B'
  } else {
    modo.innerHTML = 'Boa madrugada'
    img.src = 'images.jpeg'
    corpo.style.background = '#242F49'
  }
  
  msg.innerHTML = `São ${horas} : ${minutos} e ${segundos} seg`
}