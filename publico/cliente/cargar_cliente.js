async function Listarcliente() {

    const tabla = document.querySelector('#cuerpo')
  
    const respuesta = await fetch('../../api/entidades/cliente/listar.php', {
      method: 'POST'
    })
    const clientes= await respuesta.json()
    clientes.forEach(cliente => {
  
      tabla.innerHTML += `
                <tr>
                  <td>${cliente.nombre}</td> 
                  <td>${cliente.correoC}</td> 
                </tr> `
    });
  
  }
  Listarcliente()