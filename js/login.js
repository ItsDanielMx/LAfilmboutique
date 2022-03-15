/*class usuario {
    constructor (mail, contrasenia) {
        this.mail = mail;
        this.contrasenia = contrasenia;
    }
    mostrar() {
        alert("Tus datos son " + this.mail + " " + this.contrasenia + " bienvenid@.");
    }
}
const usuario1 = new usuario(prompt("Ingrese su mail"), prompt("Ingrese su contraseña"))
usuario1.mostrar()*/

let click = document.getElementById("login")
      click.addEventListener("click", respuesta)
      
      function respuesta (e){
        e.preventDefault()
        let usuario = document.getElementById("email").value
        let contrasenia = document.getElementById("inputPassword2").value
        let datos = document.getElementById("bienvenido")
        datos.innerHTML = 
        `
            <h2>Bienvenid@ ${usuario}</h2>
        `

    }