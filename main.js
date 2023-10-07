let carrito = []; // Array para almacenar los productos en el carrito
let totalCarrito = 0; // Variable para almacenar el total del carrito

// Función para mostrar la notificación con la cantidad actual de productos en el carrito
function mostrarNotificacion() {
    let notificacion = document.getElementById('notificacion');
    notificacion.textContent = carrito.length; // Mostrar la cantidad de productos en el carrito
    notificacion.style.display = 'block';

    // Ocultar la notificación después de 9 segundos
    setTimeout(function() {
        notificacion.style.display = 'none';
    }, 9000);
}

// Función para agregar productos al carrito y mostrar la notificación
function agregarAlCarrito(nombre, imagen, precio) {
    let producto = {
        nombre: nombre,
        imagen: imagen,
        precio: precio
    };
    carrito.push(producto);
    totalCarrito += precio; // Actualizar el total del carrito
    mostrarNotificacion(); // Mostrar la notificación cuando se añade un producto al carrito
    actualizarCarrito(); // Actualizar la interfaz del carrito
}

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
    let carritoDiv = document.getElementById('carrito5');
    carritoDiv.innerHTML = ''; // Limpiar el contenido del carrito antes de actualizar

    // Recorrer el carrito y mostrar los productos en la interfaz
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let productoDiv = document.createElement('div');
        productoDiv.innerHTML = `<img src="${producto.imagen}"> ${producto.nombre} - $${producto.precio}`;
        carritoDiv.appendChild(productoDiv);
    }

    // Mostrar el total del carrito en la interfaz
    let totalCarritoSpan = document.getElementById('totalCarrito');
    totalCarritoSpan.textContent = totalCarrito;
}

