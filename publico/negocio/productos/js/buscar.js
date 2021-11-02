import login from '../../js/login.js'

var delayTimer;
async function buscarProducto() {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(async function() {
        const session=login.obtenerSesionNegocio()
        var idNegocio=session.negocio.idNegocio

        const buscar = document.querySelector('#buscar');
        const text = buscar.value;
        const tabla = document.querySelector('#cargar-negocio')
        tabla.innerHTML = ``;
        if (text == "") {
            const respuesta2 = await fetch('../../../../api/entidades/producto/listar.php?idNegocio='+idNegocio)
            const productos = await respuesta2.json()
            productos.forEach(producto => {

                tabla.innerHTML += `
                <div class="card">
                <a class="buy-delete" type="button" href='../../../../api/entidades/producto/eliminar.php?idproducto="${producto.idproducto}"'>X</a>
                <img src="${producto.foto}" alt="">
                <div class="product-name-price">
                    <h2 class="product-name">${producto.nombreP}</h2>
                    <h2 class="product-price">${producto.descripcion}<span>$</span></h2>
                </div>
                <button class="buy-now" onclick='mostrarEditarEmpleado(${producto.idproducto})'>Editar</button>
                </div>`
            });

        } else {

            const respuesta = await fetch('../../../../api/entidades/producto/buscar.php?nombreP=' + text + "&idNegocio=" + idNegocio)
            const productos = await respuesta.json()
            console.log('hola', productos)
            productos.forEach(producto => {

                tabla.innerHTML += `
                <div class="card">
                <a class="buy-delete" type="button" href='../../../../api/entidades/producto/eliminar.php?idproducto="${producto.idproducto}"'>X</a>
                <img src="${producto.foto}" alt="">
                <div class="product-name-price">
                    <h2 class="product-name">${producto.nombreP}</h2>
                    <h2 class="product-price">${producto.descripcion}<span>$</span></h2>
                </div>
                <button class="buy-now" onclick='mostrarEditarEmpleado(${producto.idproducto})'>Editar</button>
                </div>`
            });
        }


    }, 500);
}
window.buscarProducto = buscarProducto
buscarProducto()