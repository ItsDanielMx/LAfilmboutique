const lentes = ["lente1", "lente2", "lente3"];
const camaras = ["AlexaLF", "Panasonic", "AlexaMini"];
const productos = lentes.concat(camaras);
alert(productos.join(", "));
alert(productos.indexOf("Panasonic"));

let buscar = prompt("Ingrese el nombre de lo que busca para saber si existe");
if (productos.includes(buscar)) {
    alert("Tenemos el producto en existencia");
} else {
    alert("Lamentablemente no contamos con el producto");
}