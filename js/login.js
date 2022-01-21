class usuario {
    constructor (mail, contrasenia) {
        this.mail = mail;
        this.contrasenia = contrasenia;
    }
    mostrar() {
        alert("Tus datos son " + this.mail + " " + this.contrasenia + " bienvenid@.");
    }
}
const usuario1 = new usuario(prompt("Ingrese su mail"), prompt("Ingrese su contraseña"))
usuario1.mostrar()