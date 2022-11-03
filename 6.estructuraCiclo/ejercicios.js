for (let i=2;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }else{
        console.log(i)
    }

}
//
let vocales='aeiou'
for (let i=0;i<vocales.length;i++){
console.log(vocales[i])
}
//
let texto='hola como estas como te llamas'
console.log(texto.length)
let contador=0
for(let i=0;i<texto.length;i++){
if(texto[i]=='a'){
 contador+=1
}


}
console.log('tienes',contador,'vocales a')
//
let texto1='eucalipto'
console.log(texto1.length)
let contador1=0
for(let i=0;i<texto1.length;i++){
    console.log(texto1[i])
if(texto1[i]=='a'){
contador1+=1
}
if(texto1[i]=='e'){
    contador1+=1
    }
    if(texto1[i]=='i'){
        contador1+=1
        }
        if(texto1[i]=='o'){
            contador1+=1
            }
            if(texto1[i]=='u'){
                contador1+=1
                }
}
console.log('tienes',contador1,'vocales ')