const img = document.getElementsByTagName('img')
const zoom = document.getElementById('zoom')

for(var i = 0; i < img.length;i++){
  function colocarImagem(){
    var a = this.getAttribute('display')
  
    zoom.style.display = 'block'
    zoom.src = this.getAttribute('src')
  }
  img[i].addEventListener('click', colocarImagem)
}
zoom.addEventListener('click', function(){
  zoom.style.display = 'none'
})