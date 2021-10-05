import firebase from "../dependencias/firebase.js";
import config from '../config.js'

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const TIPOS = {
  CLIENTE: 'cliente',
  NEGOCIO: 'negocio'
}

async function iniciarSesion(){
  console.log('Iniciando sesión para ',params.tipo);
  try {
    const autenticacionFirebase = await firebase.auth.iniciarSesionGoogle()
    console.log('Inicio sesión', autenticacionFirebase);
    const perfil2 = autenticacionFirebase.user
    const perfil = autenticacionFirebase.additionalUserInfo.profile
    
    const formData = new FormData()
    formData.append('id_google',perfil2.uid)
    formData.append('nombre',perfil.name)
    formData.append('correo',perfil.email)
    formData.append('img',perfil.picture)
    
		const resultado = await fetch(`${config.API_URL}/entidades/cliente/insertar.php`, {
			method: 'post',
			body: formData
		})
		console.log('Registro', resultado);
	} catch (error) {
		console.error('Ups', error);
	}
}

const botonIniciarSesion = document.getElementById('iniciar-sesion')
console.log(botonIniciarSesion);
botonIniciarSesion.addEventListener('click',iniciarSesion)
