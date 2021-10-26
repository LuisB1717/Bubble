function guardarSesionNegocio(sesion){
  localStorage.setItem("empleado", JSON.stringify(sesion.empleado))
  localStorage.setItem("negocio",JSON.stringify(sesion.negocio))
}
function obtenerSesionNegocio() {
  const empleado = localStorage.getItem("empleado")
  const negocio = localStorage.getItem("negocio")
  return {empleado: JSON.parse(empleado),negocio:JSON.parse(negocio)}
}

export default {
  guardarSesionNegocio,
  obtenerSesionNegocio
}