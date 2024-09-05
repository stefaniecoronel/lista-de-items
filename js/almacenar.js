document.addEventListener('DOMContentLoaded', function() {
    const agregar = document.getElementById('agregar');
    const nuevoItem = document.getElementById('item');
    const itemList = document.getElementById('contenedor');
    
    // Cargar items desde localStorage
    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        itemList.innerHTML = '';
        items.forEach((item, index) => {
            addItemsToList(item, index);
        });
    }
    
    // Guardar items en localStorage
    function saveItems(items) {
        localStorage.setItem('items', JSON.stringify(items));
    }
    
    // Agregar un item a la lista
    function addItemsToList(item, index) {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    }
    
    // Agregar un item a la lista
    function addItem() {
        const itemName = nuevoItem.value.trim();
        if (itemName === '') {
            alert('Por favor ingrese un nombre.');
            return;
        }
    
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemName);
        saveItems(items);
        addItemsToList(itemName, items.length - 1);
        nuevoItem.value = '';
    }
    
    
    // Manejar el evento de clic en el botón de agregar
    agregar.addEventListener('click', addItem);
    
    // Cargar los items al inicio
    loadItems();
    });
    