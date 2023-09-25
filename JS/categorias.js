document.addEventListener("DOMContentLoaded", function() {
  const productList = document.getElementById('productList');
  const categorySelect = document.getElementById('categorySelect');
  const updateCategoryButton = document.getElementById('updateCategoryButton');

  // Función para cargar las categorías
  function loadCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        data.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
        });
      })
      .catch(error => console.error('Error loading categories:', error));
  }

  // Función para cargar productos por categoría
  function loadProductsByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        productList.innerHTML = ''; 
        // Limpiar la lista de productos

        data.forEach(product => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <div class="card">
              <img class="img" src="${product.image}" alt="${product.title}">
              <h2>${product.title}</h2>
              <p>Price: $${product.price}</p>
              <p>Category: ${product.category}</p>
              <p>${product.description}</p>
            </div>
          `;
          productList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error loading products:', error));
  }

  // Cargar las categorías al cargar la página
  loadCategories();

  // Manejar el evento de clic en el botón de actualización de categoría
  updateCategoryButton.addEventListener('click', function() {
    const selectedCategory = categorySelect.value;
    loadProductsByCategory(selectedCategory);
  });
});
