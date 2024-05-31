/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our", "my", "your"];
  let adj = ["great", "big", "awesome", "small"];
  let noun = ["jogger", "racoon", "developer", "car"];
  let extensions = [".com", ".es", ".org", ".domain", ".io", ".blockchain"];

  // Obtener la referencia del elemento UL en el HTML
  let domainList = document.getElementById("domain-list");

  // Iterar sobre cada elemento de las listas para generar las combinaciones
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          // Concatenar las palabras y agregar la extensión del dominio
          let domain = p + a + n + ext;
          // Crear un nuevo elemento LI y agregar el dominio generado
          let listItem = document.createElement("li");
          listItem.textContent = domain;
          domainList.appendChild(listItem);
        }
      }
    }
  }
};
