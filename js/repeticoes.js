
// exibir no console 150 multiplos de 3

for (let multiplo = 0; multiplo <150; multiplo++){
    //console.log(multiplo*3);
}

// executar enquanto a varivael de controle for uma divisão exata de 23
let indice = 1;
while (indice % 23 !== 0 ) {
    //console.log(indice);
    indice++;
    
}

// executar uma primeira vez e ver se o número é par, se for é para parar o looping
let numero = 0;

do {
    //console.log(numero)
    ++numero;

}while(numero % 2 !==0);

// percorrer uma lista de produtos e exibilos
const produtos = ['café', 'shampo', 'azeite' , 'bolacha', 'açucar' , 'carne'];

for (const produto of produtos){
    console.log(produto)
}
    