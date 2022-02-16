let carrito = []

const contenedorCarrito = document.getElementById("carritoFin");

mostrarProductos(inventario)

function mostrarProductos(array){
    for (const producto of array) {
        let btnAgregar = document.getElementById(`cart${producto.id}`)
    
        btnAgregar.addEventListener('click',()=>{

            agregarAlCarrito(producto.id)
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
            console.log(productoAgregar.id);
            btnEliminar.parentElement.remove()                         
            carrito = carrito.filter(elemento => elemento.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carrito))
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
