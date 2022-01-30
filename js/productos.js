const lentes = ["lente1", "lente2", "lente3"];
const camaras = ["AlexaLF", "Panasonic", "AlexaMini"];
const productos = lentes.concat(camaras);
alert(productos.join(", "));
alert(productos.indexOf("Panasonic"));

let buscar = prompt("Ingrese el nombre de lo que busca para saber si hay en almacen");
if (productos.includes(buscar)) {
    alert("Tenemos el producto en existencia");
} else {
    alert("Lamentablemente no contamos con el producto");
}

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
