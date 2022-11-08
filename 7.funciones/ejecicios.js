function contarVocales(texto){
let contarVocales =0
let vocales=['a','e','i','o','u']
for(let i= 0;i<texto.length; i++){
    if(vocales.indexOf(texto[i])>=0)
    ++contarVocales;
}
return contarVocales;
}
console.log(contarVocales("eucalipto"))
//
function calculadora(operacion,x,y){
    if(operacion=="suma"){
        return x+y
 } else if (operacion=="resta"){
    return x -y
 } else if(operacion=="multiplicacion"){
    return x*y
}else if (operacion=="division"){
    return x/y
}else{
    return-1
}
}
console.log(calculadora("multiplicacion",23,4))