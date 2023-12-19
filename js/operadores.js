
const n1 = 32;
const n2 = 24;
const n3 = 14;
const n4 = 1;
const stringnumero = '1';

// console.log('é igual',n4 == stringnumero);
// console.log('é igual',n4 === stringnumero);
// console.log('é diferente',n4 != stringnumero);
// console.log('é diferente',n4 !== stringnumero);

// console.log('n3>=n2', n3 >= n2);
// console.log('n4<n2', n4 < n2);

// console.log('soma', n2 + n1);
// console.log('subtração  ', n4 - n1);
// console.log('mutipllicação  ', n3 * n1);
// console.log('Div  ', n1 / n3);
// console.log('Módulo  ', n2 % n3);

if(n3 > n4){
    console.log('n3 > n4');
}else if ( n2 > n3){
    console.log('n2 > n3');

}

else {
    console.log('n4 > n3')
}

switch (n4){
    case 65:
        console.log('Number 65');
        break;
    case 1:
        console.log('Number 1');
        break;
    case 32:
        console.log('Number 32');
        break;
    default:
        console.log('Number not found');


}