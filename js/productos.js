const productos = ["AlexaLF", "Panasonic", "AlexaMini"];
console.log(...productos);

let buscar = prompt("Ingrese el nombre de lo que busca para saber si hay en almacen");
productos.includes(buscar) ? alert("Tenemos el producto en existencia") : alert("Lamentablemente no contamos con el producto")

const cam = [
    {nombre: "ARRI ALEXA LF", precio: 2500},
    {nombre: "PANASONIC VARICAM LT", precio: 450},
    {nombre: "ARRI ALEXA MINI CAMERA", precio: 875},
]

const precioIVA = cam.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 16 / 100 + el.precio
    }
})
console.log(precioIVA)

const camara1 = {
    nombre: "ARRI ALEXA LF", 
    precio: 2500,
    descripcion: "bonita camara",
    lente: null
}
console.log(camara1?.lente  || "la camara no incluye ningun lente");

const [, a, b] = productos
console.log(a);
console.log(b);
