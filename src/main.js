import './style.css'
import { productos } from './datos.js'

// Elemento donde se dibujan las tarjetas (lo creas en el Ejercicio 1)
const catalogo = document.getElementById('catalogo')

const listaPedido = document.getElementById('lista-pedido')
const totalElemento = document.getElementById('total')
const btnVaciar = document.getElementById('btn-vaciar')

const pedido = []

// ------------------------------------------------------------
// EJERCICIO 2 — mostrarProductos(lista)
// Convierte una lista de productos en tarjetas HTML y las pone en la página.
// Forma general:
//   catalogo.innerHTML = lista.map(p => `
//     <article class="...las mismas clases de tu Ejercicio 1...">
//       <h3>${p.nombre}</h3>
//       ...
//       <button data-id="${p.id}">Agregar</button>
//     </article>
//   `).join('')
// ------------------------------------------------------------
function mostrarProductos(lista) {
  catalogo.innerHTML = lista.map(p => `
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-xl font-bold mb-2">${p.nombre}</h2>

      <p class="text-lg font-bold mb-4">
        $${p.precio}
      </p>

      <button 
        data-id="${p.id}"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Agregar
      </button>
    </div>
  `).join('');
}
// ------------------------------------------------------------
// EJERCICIO 3 — Armar el pedido
// El pedido es un arreglo con los productos que la persona va agregando.
// Pasos (detalle en el README):
//   1. Escucha el clic en el contenedor #catalogo (delegación de eventos).
//   2. Busca el producto por id con .find() y agrégalo con .push().
//   3. Dibuja el pedido con mostrarPedido() y calcula el total con .reduce().
// ------------------------------------------------------------

catalogo.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-id]')
  if (!boton) return
  const id = Number(boton.dataset.id)
  // 1. busca el producto con productos.find(...)
  const producto = productos.find(p => p.id === id);
  // 2. agrégalo a pedido con push
    if (producto) {
    pedido.push(producto);
    mostrarPedido();
  }


});


function mostrarPedido() {

  listaPedido.innerHTML = pedido.map(p => `
    <li class="flex justify-between border-2 pb-2">
      <span>${p.nombre}</span>
      <span>$${p.precio}</span>
    </li>
  `).join('');

  const total = pedido.reduce(
    (suma, p) => suma + p.precio,
    0
  );

  totalElemento.textContent = `Total: $${total}`;
}


//   4. Botón "Vaciar pedido".
btnVaciar.addEventListener('click', () => {

  pedido.length = 0;

  mostrarPedido();

});
  // 3. llama a mostrarPedido()
mostrarProductos(productos)
mostrarPedido();

// Escribe aquí tu código del Ejercicio 3// ------------------------------------------------------------
// EJERCICIO 4 — Filtrar por categoría
// Botones de categoría que llamen a mostrarProductos() con
// productos.filter(...). El botón "Todos" muestra la lista completa.
// ------------------------------------------------------------

// Escribe aquí tu código del Ejercicio 4
