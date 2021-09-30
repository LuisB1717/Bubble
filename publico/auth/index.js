import firebase from "../dependencias/firebase.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


async function iniciarSesion(){
  console.log('Iniciando sesión para ',params.tipo);
  const resultado = await firebase.auth.iniciarSesionGoogle()
  console.log('Inicio sesión', resultado);
}

const botonIniciarSesion = document.getElementById('iniciar-sesion')
console.log(botonIniciarSesion);
botonIniciarSesion.addEventListener('click',iniciarSesion)
