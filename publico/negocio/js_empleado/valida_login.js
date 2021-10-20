window.addEventListener('load', () => {

    const button = document.getElementById('formulario_login_empleado');
    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');
    let alert = document.getElementById('alerta');
    console.log(usuario);


    function data() {

        let datos = new FormData();
        datos.append("nombre_usuario", usuario.value);
        datos.append("contrasena", password.value);
        fetch('../../api/entidades/empleado/valida_login.php', {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(({ success }) => {
                if (success === 1) {
                    location.href = "../negocio/lista_empleado.html";
                   
                } else {
                    alerta(); 
                    
                }
            });


    }

    function alerta() {
        alert.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Datos Incorrectos</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
      `;
    }

    button.addEventListener('submit', (e) => {
        e.preventDefault();

        data();


    });




});