# Event Loop en JavaScript

JavaScript es un lenguaje **single-threaded** (de un solo hilo), pero puede manejar operaciones asincrónicas de forma eficiente gracias al **Event Loop**.

## Componentes principales

### Call Stack (Pila de ejecución)

Es donde se ejecutan las funciones. Funciona bajo el principio **LIFO** (Last In, First Out).

```javascript
function saludar() {
  console.log("Hola");
}

function despedir() {
  saludar();
  console.log("Adiós");
}

despedir();
// Call Stack:
// 1. despedir() entra
// 2. saludar() entra
// 3. console.log("Hola") entra y sale
// 4. saludar() sale
// 5. console.log("Adiós") entra y sale
// 6. despedir() sale
```

### Web APIs / APIs del entorno

El runtime del navegador (o Node.js) provee APIs que operan fuera del call stack, como `setTimeout`, `fetch`, `DOM events`, etc.

### Callback Queue (Cola de callbacks)

Cuando una API asincrónica termina, su callback se coloca aquí esperando ser ejecutado.

### Microtask Queue (Cola de microtareas)

Tiene prioridad sobre el callback queue. Aquí se colocan las promesas (`Promise.then`) y `queueMicrotask`.

---

## ¿Cómo funciona el Event Loop?

1. Ejecuta todo lo que haya en el **Call Stack**.
2. Si el Call Stack está vacío, revisa la **Microtask Queue** y ejecuta todas las tareas.
3. Si la Microtask Queue está vacía, revisa la **Callback Queue** y ejecuta una tarea.
4. Repite.

```javascript
console.log("1");              // Sincrónico — se ejecuta primero

setTimeout(() => {
  console.log("2");            // Callback queue — se ejecuta al final
}, 0);

Promise.resolve().then(() => {
  console.log("3");            // Microtask queue — se ejecuta antes del callback
});

console.log("4");              // Sincrónico — se ejecuta después del 1

// Salida:
// 1
// 4
// 3
// 2
```

---

## Ejemplos prácticos

### setTimeout con tiempo 0

Aunque el delay sea `0`, el callback **nunca** se ejecuta sincrónicamente. Siempre pasa por la callback queue.

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Timeout ejecutado");
}, 0);

console.log("Fin");

// Salida:
// Inicio
// Fin
// Timeout ejecutado
```

### Promesas vs setTimeout

Las promesas tienen mayor prioridad porque usan la **microtask queue**.

```javascript
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("promise"));
queueMicrotask(() => console.log("microtask"));

// Salida:
// promise
// microtask
// setTimeout
```

### Bloqueo del Call Stack

Si el Call Stack está ocupado, nada más se ejecuta — ni callbacks ni microtareas.

```javascript
console.log("Inicio");

// Bloquea el hilo principal durante ~3 segundos
const inicio = Date.now();
while (Date.now() - inicio < 3000) {}

setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("Fin");

// Salida (después de 3 segundos de espera):
// Inicio
// Fin
// promise
// setTimeout
```

### Ejecución asíncrona real con fetch

```javascript
console.log("1 - Request iniciado");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("2 - Datos recibidos:", data.title);
  });

console.log("3 - Esperando respuesta...");

// Salida:
// 1 - Request iniciado
// 3 - Esperando respuesta...
// 2 - Datos recibidos: delectus aut autem
```

---

## Resumen

<table>
  <thead>
    <tr>
      <th>Cola</th>
      <th>Tipo</th>
      <th>Prioridad</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Call Stack</td>
      <td>Sincrónico</td>
      <td>Se ejecuta primero</td>
      <td><code>console.log()</code>, funciones</td>
    </tr>
    <tr>
      <td>Microtask Queue</td>
      <td>Asincrónico</td>
      <td>Alta</td>
      <td><code>Promise</code>, <code>queueMicrotask</code></td>
    </tr>
    <tr>
      <td>Callback Queue</td>
      <td>Asincrónico</td>
      <td>Baja</td>
      <td><code>setTimeout</code>, <code>setInterval</code>, I/O</td>
    </tr>
  </tbody>
</table>
