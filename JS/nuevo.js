document.addEventListener('DOMContentLoaded', function() {
    const nuevoProducto = document.getElementById('nuevoProducto');
    // Esto llama al id del html
    const productList = document.getElementById('productList');
    // Este es el elemento para mostrar la lista de productos
    
    //aca se se llama al archico.json o eso deberia ser
    //Primero faltaria ponerel JSON en algun servidor
    //Despues subimos el archivo a github y listo
    nuevoProducto.addEventListener('click', function() {
        fetch('https://raw.githubusercontent.com/Zunilda-Encina/Archivo.json/08cd172f79fee2d51babdaeff68f472282d008f5/nuevo.json') 
            .then(response => response.json())
            .then(products => {
                    // Aca hacemos que los productos se muestren
                    //Esta asi nomas, porque es de prueba solamente
                    products.forEach(newProduct => {
                        const productItem = document.createElement('div');
                        productItem.classList.add('objeto');
                        productItem.innerHTML = `
                            <h2>${newProduct.title}</h2>
                            <img src="${newProduct.image}" alt="${newProduct.title}">
                            <p>Price: $${newProduct.price}</p>
                            <p>${newProduct.description}</p>
                           
                        `;
                        productList.appendChild(productItem);
                    });
                })
                .catch(error => console.error('Error al cargar el archivo JSON:', error));
        });
    });