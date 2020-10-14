let users=['chema','maria','pedrito','juanito','fofito','milikito','marianico','elcorto'];
let blackListed=['chema','jose','eugenio','elcorto','gadafi','frankestein','rajoy'];
/*let filtro=(users,blackListed)=>(users!==blackListed)? blackListed+1:true;
console.log(filtro)*/

let newArray= users.filter(ele=>ele !== blackListed[0])  
    
console.log(newArray)

