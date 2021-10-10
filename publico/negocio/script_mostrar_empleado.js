

          const tabla = document.querySelector('#cuerpo');
          const opciones = {
            method :'POST'
          }

          fetch('../../api/entidades/empleado/listar.php',opciones)
            .then(respuesta => respuesta.json())
            .then(resultado =>{

                resultado.forEach(elemento => {
                  
                  tabla.innerHTML +=  `
                            <tr>
                              
                              <td>${elemento.nombre}</td>
                              
                            </tr>
                  `
                });
            });

