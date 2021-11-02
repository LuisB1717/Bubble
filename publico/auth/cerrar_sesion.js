import firebase from "../dependencias/firebase.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

async function cerrar() {

    await firebase.auth.cerrarSesionGoogle();
    location.href = location.href.replace("index", "login")

    // .then(function() {
    //         console.log("salir")
    //         location.href = location.href.replace("index", "login")

    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     })
}