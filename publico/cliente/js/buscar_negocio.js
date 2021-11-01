var delayTimer;
async function buscarNegocio() {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(async function() {

        const buscar = document.querySelector('#buscar');
        const text = buscar.value;
        const tabla = document.querySelector('#cargar-negocio')
        tabla.innerHTML = ``;
        if (text == "") {
            const respuesta2 = await fetch('../../../api/entidades/negocio/listar.php', {
                method: 'POST'
            })
            const negocios = await respuesta2.json()
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

        } else {

            const respuesta = await fetch('../../../api/entidades/negocio/buscar_xnombre.php?nombre=' + text, {
                method: 'POST'
            })
            const negocios = await respuesta.json()
            console.log('hola', negocios)
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


    }, 500);
}

buscarNegocio()