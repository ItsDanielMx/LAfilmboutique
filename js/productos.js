const productos = ["AlexaLF", "Panasonic", "AlexaMini"];
console.log(...productos);

Swal
    .fire({
        title: "Ingrese el nombre de lo que busca para saber si hay en almacen",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Buscar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {

        productos.includes(resultado.value) ? Swal.fire(
            'Genial!',
            'Tenemos el producto en existencia',
            'success'
          ) : Swal.fire(
            'Lo sentimos',
            'Lamentablemente no contamos con el producto',
            'error'
          )
    })


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
