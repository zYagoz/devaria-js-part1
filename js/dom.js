const divs = $('div');
// console.log(divs);
const h2 = $('h2');
// console.log(h2);
const titulo = $('#titulo');
// console.log(titulo);
const input = $('#input');
const paragrafo = $('#paragrafo');
const elementsMarginTop2 = $('.mt-2')
// console.log(elementsMarginTop2);

function alterarHtml(){
    titulo.text(input.val());
    titulo.css ('color' , '#075e54');
    for (let element of elementsMarginTop2) {
        $(element).addClass('mt-4');
    }

    input.val('');

    const novoP  = document.createElement('p');
    novoP.textContent = ' Novo Texto adiiconado ao DOM JS'

    paragrafo.after(novoP)
}
