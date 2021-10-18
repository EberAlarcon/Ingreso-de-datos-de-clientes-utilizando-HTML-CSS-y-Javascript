function EnviarDatos() {
  var nombre = document.getElementById("nombres").value;
  var apellido = document.getElementById("apellidos").value;
  var identificacion = document.getElementById("cedula").value;
  var celular = document.getElementById("telefono").value;
  var nacimiento = document.getElementById("fecha_nacim").value;
  var lugar = document.getElementById("direccion").value;
  var entrar = false;
  if (nombre == "") {
    alert("El nombre es obligatorio");
    entrar = true;
    document.getElementById("nombres").focus();
  }
  if (apellido == "") {
    alert("El apellido es obligatorio");
    entrar = true;
    document.getElementById("apellidos").focus();
  }
  if (identificacion.length < 9) {
    alert("Error al digitar su numero de cédula");
    entrar = true;
    document.getElementById("cedula").focus();
  }
  if (celular.length < 8) {
    alert("Error al digitar su número telefónico");
    entrar = true;
    document.getElementById("telefono").focus();
  }
  if (lugar == "") {
    alert("La direccion es obligatorio");
    entrar = true;
    document.getElementById("direccion").focus();
  }
  if (nacimiento == "") {
    alert("El fecha de nacimiento es obligatorio");
    entrar = true;
    document.getElementById("fecha_nacim").focus();
  }
  if (!entrar) {
    alert("Datos Enviados!!");
}
  console.log(nombre + " " + apellido + " " + identificacion + " " + celular +   lugar + " " +
             nacimiento ) ;
}
