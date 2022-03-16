let carrito = []

const contenedorCarrito = document.getElementById("carritoFin");
const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

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
botonTerminar.innerHTML= '<a id="finalizar" class="waves-effect waves-light btn modal-trigger" href="#modal1">Checkout</a>'
recuperar()

$(()=>{
    $('.modal-trigger').leanModal();
  });

finCompra.addEventListener('click',()=>{

    if($('.number').val()== '' || $('.inputname').val() == ''||$('.expire').val()== ''||$('.ccv').val()== ''){
       
        $('input').css('border', 'solid 1px red')

    }else if(($('.number').val()!= '') && ($('.inputname').val()!= '') && ($('.expire').val() != '') && ($('.ccv').val()!= '')){

        $('input').css('border', 'none')

                fetch('https://jsonplaceholder.typicode.com/posts',{
                    method: 'POST',
                    body: JSON.stringify(carrito),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
                ).then(res => res.json())
                .catch(error=> console.log(error))
                .then( response => {
                     $('#modal1').closeModal();
                    contenedorCarrito.innerHTML= `<h6>Su pedido ha sido procesado orden N°: 6545s6df4dsfsf4654sdf</h6>`;
                    carrito= []
                    localStorage.clear()
                    actualizarCarrito()
                    setTimeout(() => {
                        contenedorCarrito.innerHTML=''
                        actualizarCarrito()
                    }, 3000);

                    console.log('Success', response)
                })
    }
})