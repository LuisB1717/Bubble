async function cargarNegocio() {

    const tabla = document.querySelector('#cargar-negocio')

    const respuesta = await fetch('../../../api/entidades/negocio/listar.php', {
        method: 'POST'

    })
    const negocios = await respuesta.json()
    negocios.forEach(negocio => {

        tabla.innerHTML += `
                <div class="card">
                <figure> <img src="${negocio.img}"></img></figure>
                   <div class="contenido-card">
                          <h3>${negocio.nombre}</h3>
                          <p>Descripción</p>
                          <a href="#">Iniciar chat</a>
                   </div>
                </div> `
    });

}
// cargarNegocio()