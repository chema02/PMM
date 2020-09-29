let MyArray =["enero","febrero",'marzo','abril','mayo','junio',
'julio','agosto','septiembre','octubre','noviembre','diciembre'];
let meses='';
for (let values of MyArray){
    meses=meses+ ' ' + values
}
console.log(meses);