import firebase from "../dependencias/firebase.js";

async function iniciarSesion(){
  console.log('Iniciando sesión');
  const resultado = await firebase.auth.iniciarSesionGoogle()
  console.log('Inicio sesión', resultado);
}

const botonIniciarSesion = document.getElementById('iniciar-sesion')
console.log(botonIniciarSesion);
botonIniciarSesion.addEventListener('click',iniciarSesion)
