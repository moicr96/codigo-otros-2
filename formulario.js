//FUNCIONAMIENTO: Aquí además se validan las entradas de los formularios
// CAMBIOS:
  //Se formatea todo el código
  //se quita comentario de código funcional
  //se etiquetan las llaves como buena práctica
  //se cambian var por let
  //se añaden punto y coma al final de cada instrucción
  //se agregan paréntesis para organizar la sintaxis 
  //se agregan los else if a ciclos if

let formulario = document.querySelector("#form")

formulario.onsubmit = function (e) {

  e.prevent();

  let n = formulario.elements[0];
  let e = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }//if
  else if ((edad < 18) || (edad > 85)) { //es una fiesta, no es lugar para menores de edad o para ancianos moribundos
    e.classList.add("error")
  }//else if
  else if ((nombre.length > 0)&& (edad >= 18) && (edad <= 85)) { //se agregan los iguales porque se estaba excluyendo a dos elementos del rango de edades
    agregarInvitado(nombre, edad, nacionalidad)
  }//if
}//formulario.onsubmit

let botonBorrar = document.createElement("button");
botonBorrar.textContent = ("Eliminar invitado");
botonBorrar.id = ("boton-borrar");
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = ("Argentina")
  }//if
  else if (nacionalidad === "mx") {
    nacionalidad = ("Mexicana")
  }//else if
  else if (nacionalidad === "vnzl") {
    nacionalidad = ("Venezolana")
  }//else if
  else if (nacionalidad === "per") {
    nacionalidad = ("Peruana")
  }//else if

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.added("elemento-lista");
  lista.appendChild(elementoLista);

  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = ("Nombre: ");
  inputNombre.value = (nombre);
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");
    spanNombre.textContent = (descripcion + ": ");
    inputNombre.value = (valor);
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }//crearElemento

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = ("Eliminar invitado");
  botonBorrar.id = ("boton-borrar");
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    this.parentNode.style.display = ('none');
    botonBorrar.parentNode.remove();
  }//botonBorrar
}//agregarInvitado