import firebase from "../dependencias/firebase.js";
import config from '../config.js'
import login from "../negocio/js/login.js"
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const TIPOS = {
  CLIENTE: 'cliente',
  NEGOCIO: 'negocio'
}

async function iniciarSesionNegocioGoogle(){
  console.log('Iniciando sesión para',params.tipo);
  try {
    const autenticacionFirebase = await firebase.auth.iniciarSesionGoogle()
    console.log('Inicio sesión', autenticacionFirebase);
    const usuario = autenticacionFirebase.user
    const perfil = autenticacionFirebase.additionalUserInfo.profile
    
    const formData = new FormData()
    formData.append('id_google',usuario.uid)
    formData.append('nombre',perfil.name)
    formData.append('correo',perfil.email)
    formData.append('img',perfil.picture)
    
		const resultado = await fetch(`${config.API_URL}/entidades/Negocio/login.php`, {
			method: 'post',
			body: formData
		})
    const json = await resultado.json()
    login.guardarSesionNegocio(json)
    location.href = location.href.replace("login","../trabajador/vistas/lista_empleado")
  	} catch (error) {
		console.error('Ups', error);
	}
}
const botonIniciarSesion = document.getElementById('iniciar-sesion-n')
console.log(botonIniciarSesion);
botonIniciarSesion.addEventListener('click',iniciarSesionNegocioGoogle)
