// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {initializeApp} from 'https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js'
// import {getFirebaseAuth} from 'https://www.gstatic.com/firebasejs/7.14.4/firebase-auth.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-b3bRCC1btggMvRnSmdIYner0EiBigg4",
  authDomain: "bubble-13c55.firebaseapp.com",
  projectId: "bubble-13c55",
  storageBucket: "bubble-13c55.appspot.com",
  messagingSenderId: "353936778462",
  appId: "1:353936778462:web:c044a569e46e33c16b8e4f",
  measurementId: "G-0XTVHD367X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Auth

function obtenerAuth() {
  return firebase.auth()
}

function obtenerProveedorGoogle(){
  return new firebase.auth.GoogleAuthProvider()
}

async function iniciarSesionGoogle(){
  try {
    const auth = obtenerAuth()
    const proveedor = obtenerProveedorGoogle()
    const resultado = await auth.signInWithPopup(proveedor)
    return resultado
  } catch (error) {
    console.error(error);
  }
}

export default {
  auth: {
    iniciarSesionGoogle
  }
}

