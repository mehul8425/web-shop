/* Mehul Jodhani
   Date: 30 jan 2025
   file: product.service.mock.js
*/



// ProductService constructor function to initialize the local storage if not already set
function ProductService() {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([]));  // Initialize products in localStorage if not present
    }
}

/*
 * Retrieves the list of products from local storage
 */
ProductService.prototype.getProducts = function() {
    return JSON.parse(localStorage.getItem('products'));  // Fetch products from localStorage
}

/*
 * Saves a new product to local storage after checking for duplicates
 */
ProductService.prototype.saveProduct = function(product) {
    const products = this.getProducts();
    if (products.find(p => p.name === product.name && p.model === product.model)) {
        throw new Error('A product with this name and model already exists!');
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));  // Save the updated product list to localStorage
}

/*
 * Updates an existing product
 */
ProductService.prototype.updateProduct = function(updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index === -1) {
        throw new Error("Product not found!");
    }
    products[index] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));  // Save the updated list to localStorage
}

/*
 * Deletes a product from local storage
 */
ProductService.prototype.deleteProduct = function(product) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === product.id);
    if (index === -1) {
        throw new Error("Product not found!");
    }
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));  // Save the updated list to localStorage
}

const productService = new ProductService();
export default productService;
