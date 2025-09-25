// ===================================================
// Consignas para practicar DOM
// ===================================================

// 1. SELECTORES
// a) Seleccioná el título principal usando getElementById
// b) Seleccioná el primer párrafo usando querySelector
// c) Seleccioná todas las tarjetas usando querySelectorAll


// 2. innerHTML e innerText
// a) Mostrá en consola la diferencia entre innerText e innerHTML de un párrafo
// b) Cambiá el texto del título usando innerText
// c) Insertá HTML dentro de la sección info usando innerHTML



// 3. MODIFICAR ESTILOS
// a) Cambiá el color del título usando .style.color
// b) Cambiá el fondo de todas las tarjetas usando un bucle y .style.backgroundColor


// 4. MODIFICAR CLASES
// a) Agregá la clase "resaltada" a la primera tarjeta (classList.add)
// b) Quitá la clase "resaltada" (classList.remove)
// c) Alterná la clase "oculto" en la segunda tarjeta (classList.toggle)
// d) Verificá si una tarjeta tiene la clase "activa" (classList.contains)


// ===================================================
// PRÁCTICA PARA LOS ALUMNOS
// ===================================================

// 1) SELECTORES (getElementById / querySelector / querySelectorAll)
// a) Guardá en una variable la sección con id "tarjetas" usando getElementById.
// b) Seleccioná el ÚLTIMO artículo con clase .tarjeta usando querySelectorAll y el índice.
// c) Seleccioná SOLO los h3 que estén dentro de .tarjeta (selector descendiente).
// d) Seleccioná el párrafo (.tarjeta__texto) de la segunda tarjeta.
// e) Cambia el texto a "parrafo modificado" y el color del texto


// 2) innerHTML e innerText
// a) Reemplazá el contenido (innerHTML) del párrafo de la primera tarjeta por:
//    'Este <strong>contenido</strong> fue actualizado' (con etiqueta <strong>).
// b) Agregá al final de la sección #info (sin borrar lo anterior) un bloque HTML con:
//    <div class="nota"><em>Nota:</em> practicando DOM.</div>
// c) Tomá todos los h3 de las tarjetas y reemplazá su texto por: "Título X"
//    (donde X es el índice + 1 → "Título 1", "Título 2", ...)


// 3) MODIFICAR ESTILOS (style.*)
// a) Cambiá el color de fondo de #info a un color suave (por ejemplo, #fdfbe7).
// b) Poné en upperCase (textTransform = 'uppercase') todos los h3 de las tarjetas.
// c) Aumentá el padding de la segunda tarjeta a "20px".
// d) Cambiá el borde de la tercera tarjeta a "3px dashed #3b82f6".


// 4) MODIFICAR CLASES (add / remove / toggle / contains)
// a) Agregá la clase "resaltada" a TODAS las tarjetas.
// b) Quitá la clase "resaltada" SOLO de la primer tarjeta.
// c) Comprobá si #titulo tiene la clase "importante". Si no la tiene, agregala.


// -------------------------
// BONUS
// -------------------------
// - Duplicá el contenido HTML de la primera tarjeta dentro de la segunda usando innerHTML.
// - Agregá a #info una lista HTML (<ul><li>...</li></ul>) con 3 ítems de tu elección.
// - Remové la clase "oculto" de cualquier elemento que la tenga (si no hay, agregala a una tarjeta y probá).