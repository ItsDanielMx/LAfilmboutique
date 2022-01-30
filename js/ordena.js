alert("El precio de cada camara por dia es de: camara1 = 2500, camara2 = 450, camara3 = 875");

let compra1 = parseInt(prompt("Ingrese cual es el precio de la camara que desea rentar"));
let compra2 = parseInt(prompt("Si desea rentar otra camara ponga su precio aqui, sino, coloque 0"));
let compra3 = parseInt(prompt("Si desea rentar otra camara ponga su precio aqui, sino, coloque 0"));

let dias = parseInt(prompt("Ingrese el numero de dias que desea rentar las camaras"));

let total = compra1 + compra2 + compra3 * dias;
let ivasuma = total * 16 / 100 + total
alert("El total de su compra incluyendo IVA es de $" + ivasuma);