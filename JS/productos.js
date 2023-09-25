fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        const productList = document.getElementById('productList');

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
