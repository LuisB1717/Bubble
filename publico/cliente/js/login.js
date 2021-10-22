function guardarSesionCliente(sesion){
    localStorage.setItem("cliente",JSON.stringify(sesion))
     console.log(sesion)
  }

  function obtenerSesionCliente() {
    const cliente = localStorage.getItem("cliente")
    return {cliente: JSON.parse(cliente)}
  }
 
  export default {
    guardarSesionCliente,
    obtenerSesionCliente,
  }