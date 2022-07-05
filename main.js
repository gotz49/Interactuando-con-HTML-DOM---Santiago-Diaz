//! Interactuando con HTML - Desafio - Santiago Diaz


let usuario = prompt("Bienvenido!\n A continuación ingresa tu nombre de usuario:")

const verUsuario = document.getElementById("boton")

boton.onclick = () => {
     let user = document.createElement("p");
     user.innerHTML = `<h2> Tu nombre de usuario registrado es ${usuario}</h2>`
     document.body.append(user);
}