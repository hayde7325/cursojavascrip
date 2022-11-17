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