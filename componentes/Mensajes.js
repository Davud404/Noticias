import swal from "sweetalert";

const mensajes = (texto, titulo, tipo='Success')=>
swal(titulo, texto, tipo, {
    button: "ACEPTAR!",
    timer:3000,
    closeOnEsc: true,
  });

  export default mensajes;