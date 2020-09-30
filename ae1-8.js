const rl=require('readline-sync');
let valido=false;
function TiradaDado() {
  
    return Math.floor((Math.random()*12)+1);
}
while (!valido) {
    numero=parseInt(rl.question('por favor introducir numero del 1 al 12 '));
    if(numero<=12 && numero>0){
        dado=TiradaDado();
        if (numero==dado) {
            return console.log('felicidades has ganado')
             
         }
         else{
             console.log('has perdido vuelve a intertarlo')
         }   
        valido=true;
    }
    else if(!numero){
         console.log('error no has introducido un numero ');
    }
    else{
        console.log('error el numero introducido es negativo o es mayor que 12')
    }

    
}




 