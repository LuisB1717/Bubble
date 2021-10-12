$(document).ready(async function () {

  async function obtenerClientes(){
    const data = await fetch('../../api/entidades/cliente/listar.php', {
       method: 'POST',
    });
    const jsondata = await data.json();
    return jsondata;
  }
 
  const data = await obtenerClientes()
 
    var table = $("#tablax").DataTable({
       data: data,
       columns: [{data: 'nombre'}, {data: 'correoC'},{data:'id_google_c'}],
       language: {
           processing: "Tratamiento en curso...",
           search: "Buscar&nbsp;:",
           lengthMenu: "Agrupar de _MENU_ Negocios",
           info: "Mostrando del Negocio _START_ al _END_ de un total de _TOTAL_ Negocios",
           infoEmpty: "No existen datos.",
           infoFiltered: "(filtrado de _MAX_ elementos en total)",
           infoPostFix: "",
           loadingRecords: "Cargando...",
           zeroRecords: "No se encontraron negocios con tu busqueda",
           emptyTable: "No hay negocios disponibles en la tabla.",
           paginate: {
               first: "Primero",
               previous: "Anterior",
               next: "Siguiente",
               last: "Ultimo"
           },
         
       },
       scrollY: 500,
       lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
   });
 
 })