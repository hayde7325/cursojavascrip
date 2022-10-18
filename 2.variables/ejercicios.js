// que diferencia hay entre let y var
let te permite declarar variables limitando su alcance (scope) al bloque, 
declaración, o expresión donde se está usando. a diferencia de la palabra clave var
 la cual define una variable global o local en una función sin importar el ámbito del bloque
 var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}