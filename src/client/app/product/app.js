/* Mehul Jodhani
   Date: 30 jan 2025
   file: app.js
*/






// Importing the product service that manages products in the mock data storage
import productService from './product.service.mock.js';  // Import product service

// Handle Add Product functionality
document.getElementById('add-product-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting and reloading the page

    // Retrieving the product details entered in the form fields
    const name = document.getElementById('product-name').value;
    const model = document.getElementById('product-model').value;
    const price = document.getElementById('product-price').value;

    try {
        // Creating a new product object with a unique ID (using the current timestamp)
        const newProduct = { name, model, price, id: new Date().getTime() };
        productService.saveProduct(newProduct);  // Save the new product using ProductService
        alert("Product added successfully!");  // Show a success message to the user
        loadProducts();  // Reload the list of products after adding the new one
    } catch (error) {
        // If there is an error (e.g., a duplicate product), show the error message
        alert(error.message);
    }

    // Reset the form fields after submission to prepare for adding a new product
    document.getElementById('add-product-form').reset();
});

// Load Products dynamically into the list
function loadProducts() {
    const products = productService.getProducts();  // Get the current list of products from the service
    const productList = document.getElementById('product-list');  // Get the element where products will be displayed
    productList.innerHTML = '';  // Clear the existing list before adding the new products

    // Loop through each product and create a list item
    products.forEach(product => {
        const li = document.createElement('li');  // Create a new list item for each product
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');  // Add Bootstrap classes for styling
        li.innerHTML = `
            <span><strong>${product.name}</strong> (${product.model}) - $${product.price}</span>
            <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productList.appendChild(li);  // Add the list item to the product list
    });
}

// Edit Product functionality (filling the form with selected product details)
function editProduct(id) {
    const product = productService.getProducts().find(p => p.id === id);  // Find the product by its ID
    if (product) {
        // Fill the form fields with the current product details
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-model').value = product.model;
        document.getElementById('product-price').value = product.price;

        // Change form submission handler to update the product instead of adding a new one
        document.getElementById('add-product-form').onsubmit = function(e) {
            e.preventDefault();  // Prevent the default form submission

            // Update the product details from the form
            product.name = document.getElementById('product-name').value;
            product.model = document.getElementById('product-model').value;
            product.price = document.getElementById('product-price').value;

            productService.updateProduct(product);  // Update the product in the service
            alert('Product updated successfully!');  // Show success message
            loadProducts();  // Reload the product list after update
            document.getElementById('add-product-form').reset();  // Reset the form fields
            document.getElementById('add-product-form').onsubmit = handleAddProduct;  // Reset form action back to Add
        };
    }
}

// Delete Product functionality (removes product from the list)
function deleteProduct(id) {
    const product = productService.getProducts().find(p => p.id === id);  // Find the product by its ID
    if (product) {
        // Ask for confirmation before deleting the product
        if (confirm(`Are you sure you want to delete the product "${product.name}"?`)) {
            productService.deleteProduct(product);  // Delete the product from the service
            alert('Product deleted successfully!');  // Show success message
            loadProducts();  // Reload the product list after deletion
        }
    }
}

// Initialize the product list when the page loads
window.onload = loadProducts;  // Call the loadProducts function to populate the product list
