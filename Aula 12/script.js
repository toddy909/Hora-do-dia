function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
if (minutos < 10) {
        minutos = '0' + minutos
    }
msg.innerHTML = `Agora são ${hora}:${minutos}`
 if(hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'fotomanha.png.png'
    document.body.style.background = '#eae0d6'
 }else if(hora >= 12 && hora <=18){
    // BOA TARDE
    img.src = 'fototarde.png.png'
    document.body.style.background = '#ffdcaf'
 }else {
    // BOA NOITE
    img.src = 'fotonoite.png.png'
    document.body.style.background = '#0b274eff'
 }
}