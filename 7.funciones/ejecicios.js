function contarVocales(palbra){
const Vocales ='aeiou'
let cantidadvocales = 0;
for(const letra of palbra){
    if(Vocales.includes(letra.toLowerCase())) {
    cantidadvocales++;
}
return cantidadvocales;
}
}
console.log(contarVocales('eucalipto'))
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