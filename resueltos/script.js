// ===================================================
// Consignas para practicar DOM
// ===================================================

// 1. SELECTORES
// a) Seleccioná el título principal usando getElementById
let titulo = document.getElementById("titulo");
// b) Seleccioná el primer párrafo usando querySelector
let parrafo = document.querySelector("p");
// c) Seleccioná todas las tarjetas usando querySelectorAll
let tarjetas = document.querySelectorAll(".tarjeta")


// 2. innerHTML e innerText
// a) Mostrá en consola la diferencia entre innerText e innerHTML de un párrafo
parrafo.innerHTML = "cambio de texto y agrego <b> esto </b>"
parrafo.innerText = "cambio de texto y agrego <b> esto </b>"
// b) Cambiá el texto del título usando innerText
titulo.innerText = "Clase DOM y otras cositas"
// c) Insertá HTML dentro de la sección info usando innerHTML
let info = document.querySelector("#info");
info.innerHTML+="<p> agregamos otro parrafo </p>"


// 3. MODIFICAR ESTILOS
// a) Cambiá el color del título usando .style.color
titulo.style.color = "magenta";
// b) Cambiá el fondo de todas las tarjetas usando un bucle y .style.backgroundColor
tarjetas.forEach(tarjeta => tarjeta.style.backgroundColor = "aquamarine")
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].style.backgroundColor = "azure";
    
}



// 4. MODIFICAR CLASES
// a) Agregá la clase "resaltada" a la primera tarjeta (classList.add)
let tarjeta1 = tarjetas[0]
tarjeta1.classList.add("resaltada")
// b) Quitá la clase "resaltada" (classList.remove)
tarjeta1.classList.remove("resaltada")
// c) Alterná la clase "oculto" en la segunda tarjeta (classList.toggle)
function toggleFuncion() {
    let tarjeta2 = tarjetas[1];
    tarjeta2.classList.toggle("oculto");
}

// d) Verificá si una tarjeta tiene la clase "activa" (classList.contains)
let tarjetaActiva = tarjetas[0].classList.contains("activa");


// ===================================================
// PRÁCTICA PARA LOS ALUMNOS
// ===================================================

// 1) SELECTORES (getElementById / querySelector / querySelectorAll)
// a) Guardá en una variable la sección con id "tarjetas" usando getElementById.
let seccion = document.getElementById("tarjetas")
// b) Seleccioná el ÚLTIMO artículo con clase .tarjeta usando querySelectorAll y el índice.
let ultimaTarjeta = document.querySelectorAll(".tarjeta")[2]
// c) Seleccioná SOLO los h3 que estén dentro de .tarjeta (selector descendiente).
let h3 = document.querySelectorAll(".tarjeta h3")
// d) Seleccioná el párrafo (.tarjeta__texto) de la segunda tarjeta.
let tarjetaTexto = document.querySelector(".tarjeta__texto")
// e) Cambia el texto a "parrafo modificado" y el color del texto
tarjetaTexto.innerText = "parrafo modificado"
tarjetaTexto.style.color = "purple"


// 2) innerHTML e innerText
// a) Reemplazá el contenido (innerHTML) del párrafo de la primera tarjeta por:
//    'Este <strong>contenido</strong> fue actualizado' (con etiqueta <strong>).
let parrafoTarjeta1 = tarjeta1.querySelector("p")
// b) Agregá al final de la sección #info (sin borrar lo anterior) un bloque HTML con:
//    <div class="nota"><em>Nota:</em> practicando DOM.</div>
info.innerHTML += '<div class="nota"><em>Nota:</em> practicando DOM.</div>'
// c) Tomá todos los h3 de las tarjetas y reemplazá su texto por: "Título X"
//    (donde X es el índice + 1 → "Título 1", "Título 2", ...).
h3.forEach((h,i) => h.innerText = "Titulo "+ [i])

// 3) MODIFICAR ESTILOS (style.*)
// a) Cambiá el color de fondo de #info a un color suave (por ejemplo, #fdfbe7).
info.style.backgroundColor = "#fdfbe7"
// b) Poné en upperCase (textTransform = 'uppercase') todos los h3 de las tarjetas.
h3.forEach(h => h.style.textTransform = "uppercase")
// c) Aumentá el padding de la segunda tarjeta a "20px".
tarjetas[1].style.padding = "20px"
// d) Cambiá el borde de la tercera tarjeta a "3px dashed #3b82f6".
tarjetas[2].style.border = "3px dashed #3b82f6"


// 4) MODIFICAR CLASES (add / remove / toggle / contains)
// a) Agregá la clase "resaltada" a TODAS las tarjetas.
tarjetas.forEach(tarjeta => tarjeta.classList.add("resaltada"))
// b) Quitá la clase "resaltada" SOLO de la primer tarjeta.
tarjetas[0].classList.remove("resaltada")
// c) Comprobá si #titulo tiene la clase "importante". Si no la tiene, agregala.
if (!titulo.classList.contains("importante")){
    titulo.classList.add("importante")
}


// -------------------------
// BONUS
// -------------------------
// - Duplicá el contenido HTML de la primera tarjeta dentro de la segunda usando innerHTML.
let tarjeta2 = tarjetas[1]
tarjeta2.innerHTML = tarjeta1.innerHTML
// - Agregá a #info una lista HTML (<ul><li>...</li></ul>) con 3 ítems de tu elección.
info.innerHTML += `
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
`
// - Remové la clase "oculto" de cualquier elemento que la tenga (si no hay, agregala a una tarjeta y probá).
let elementos = document.querySelectorAll("*")
elementos.forEach(el => el.classList.contains("oculto")? el.classList.remove("oculto"):"")