//1
function factorial(num){
    if (num==0)return 1
    return (num*factorial(num-1))
}
console.log(factorial(5))
//2
function esPalindromo(cadena) {
let array = cadena.split("");
let reverse = array.reverse();

return cadena ==reverse.join("")?"si es":"No es"
}
console.log(esPlindromo("oso"))
//faboncci
var primer_numero=parseInt(prompt("ingrse el primer numero"));
var segundo_numero=parseInt(prompt("ingrse el segundo numero"));
var array = [primer_numero,segundo_numero];
 for (var i=0; i<= 100; i ++)
 {
    var nuevo_numero=primer_numero+segundo_numero;
    array.push(nuevo_numero);
    primer_numero=segundo_numero;
    segundo_numero = nuevo_numero;

 }
 console.log(array)
 
 for (x for array);
 {
    document.write(x + "<br>");
    
 }