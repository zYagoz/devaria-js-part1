const gatosDiv = $('#gatos');

function getCat(){
    fetch ('https://api.thecatapi.com/v1/images/search')
        .then(resultado => resultado.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            const image = document.createElement('img');
            image.src = imageObjectURL;
            gatosDiv.append(image);
        })
        .catch(error => console.log('Erro execução API', error));
}
