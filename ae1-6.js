const rl = require('readline-sync');
function PedirNumero( ) {
    let numero = parseInt(rl.question('por favor intoducir numero '));
    return numero;
}
let numero=PedirNumero();
function ParImpar(numero) {
    let parImpar='';
    if(numero %2 == 0)
    {
        parImpar='el ' + numero + ' es par';


    }
    else
    {
        parImpar='el ' + numero + ' es impar';  
    }

    return parImpar;
    
}

console.log(ParImpar(numero))