let carrito = []

const contenedorCarrito = document.getElementById("carritoFin");

fetch('/js/inventario.json')
    .then(Response => Response.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.log("error"))

function mostrarProductos(array){
    for (const producto of array) {
        let btnAgregar = document.getElementById(`cart${producto.id}`)
    
        btnAgregar.addEventListener('click',()=>{

            agregarAlCarrito(producto.id)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El producto se ha agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
}

function agregarAlCarrito(id) {
    
    let repetido = carrito.find(item => item.id == id)
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{

        let productoAgregar = inventario.find(elemento => elemento.id == id)
        carrito.push(productoAgregar)
        actualizarCarrito()
        let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML =`
                        <p>${productoAgregar.nombre}</p>
                        <p>Precio: $${productoAgregar.precio}</p>
                        <p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                        <button id=botonEliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                        
        `
        contenedorCarrito.appendChild(div)
    
        let btnEliminar = document.getElementById(`botonEliminar${productoAgregar.id}`)
        btnEliminar.addEventListener('click',()=>{
            if (productoAgregar.cantidad == 1) {
                btnEliminar.parentElement.remove()                         
                carrito = carrito.filter(elemento => elemento.id != productoAgregar.id)
                actualizarCarrito()
                localStorage.setItem('carrito', JSON.stringify(carrito))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El producto se ha eliminado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else {
                productoAgregar.cantidad = productoAgregar.cantidad - 1
                document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
                actualizarCarrito()
                localStorage.setItem('carrito', JSON.stringify(carrito))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El producto se ha eliminado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
}   

function  actualizarCarrito (){
    precioTotal.innerText = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}


function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(recuperarLS);
    if(recuperarLS){
        recuperarLS.forEach(element => {
            agregarAlCarrito(element.id)
        });
    }
}

recuperar()


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-1787002432153083-030203-985a35784d8739a30267d0f86270b30c-307325402",
});
