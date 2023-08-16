function wrongdoer(){
    alert('The wrongdoer with be found and apprehended with extreme prejudice!')
}
function noTouchy(){
    alert('🍥YOU NO LONGER WANT TO PLAY OR EVEN TOUCH BLUE🍥')
}
let img = document.querySelector('img')
let submit = document.querySelector('#submit')
img.addEventListener('mouseover', noTouchy)
submit.addEventListener('click', wrongdoer)