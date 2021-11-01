
import login from '../../js/login.js'
let idAEditar = ""
let id_negocio= ""
const overlayEditar = document.getElementById('overlay-editar')
const popupEditar = document.getElementById('popup-editar')

 function mostrarEditarEmpleado(idproducto) {
  idAEditar=idproducto;
  overlayEditar.classList.add('active');
	popupEditar.classList.add('active');

}
async function cargarProducto() {
  const session=login.obtenerSesionNegocio()
  var idNegocio=session.negocio.idNegocio
  const tabla = document.querySelector('#cargar-negocio')

  const respuesta = await fetch('../../../../api/entidades/producto/listar.php?idNegocio='+idNegocio, {
    method: 'POST'
  })
  const productos = await respuesta.json()
  productos.forEach(producto => {

    tabla.innerHTML += `
        <div class="card">
        <img src="../css/shoes-nike.png" alt="">
          <div class="product-name-price">
            <h2 class="product-name">${producto.nombreP}</h2>
            <h2 class="product-price">${producto.descripcion}<span>$</span></h2>
          </div>
         <button class="buy-now" onclick="mostrarEditarEmpleado(${producto.idproducto})">Detalles</button>
        </div>`
  });

}
cargarProducto()