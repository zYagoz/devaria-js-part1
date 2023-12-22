const divs = document.getElementsByTagName('div');
// console.log(divs);
const h2 = document.getElementsByTagName('h2');
// console.log(h2);
const titulo = document.getElementById('titulo');
// console.log(titulo);
const elementsMarginTop2 = document.getElementsByClassName('mt-2')
// console.log(elementsMarginTop2);

function alterarHtml(){
    titulo.textContent = 'Novo Título'
    titulo.style.color = '#075e54'
    // elementsMarginTop2.className = 'mt-4'

}
