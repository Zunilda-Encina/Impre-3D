document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById('productList');
    const sortButton = document.getElementById('sortButton');
    let orden = true; 
    // Variable para verificar lista

    // Aca llamamos a todos los productos
    function loadOrderedProducts() {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(data => {
                productList.innerHTML = ''; 

                data.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                    <div class="card">
                        <img src="${product.image}" alt="${product.title}">
                        <h2>${product.title}</h2>
                        <p>Price: $${product.price}</p>
                        <p>Category: ${product.category}</p>
                        <p>${product.description}</p>
                    </div>
                    `;
                    productList.appendChild(listItem);
                });
            })
            .catch(error => console.error(error));
    }

    // Aca llamamos a todos los productos desordenados
    function loadUnorderedProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                productList.innerHTML = '';

                data.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                    <div class="card">
                        <img src="${product.image}" alt="${product.title}">
                        <h2>${product.title}</h2>
                        <p>Price: $${product.price}</p>
                        <p>Category: ${product.category}</p>
                        <p>${product.description}</p>
                    </div>
                    `;
                    productList.appendChild(listItem);
                });
            })
            .catch(error => console.error(error));
    }

    // Cargar productos ordenados
    loadOrderedProducts();

    // Boton para cambiar entre productos ordenados y desordenados
    sortButton.addEventListener("click", () => {
        if (orden) {
            loadUnorderedProducts();
        } else {
            loadOrderedProducts();
        }
        orden = !orden; 
        // Cambiar el estado de orden/desorden
    });
});