/* 
   Mehul Jodhani
   Date: 30 Jan 2025
   File: search.js
*/

// This script handles displaying a paginated list of products on the search page

document.addEventListener("DOMContentLoaded", function() {
    // Sample products array with id, name, price, stock, and description
    const products = [
        { id: 1, name: "iPhone 12", price: 799, stock: 50, description: "Apple flagship" },
        { id: 2, name: "Samsung Galaxy S21", price: 749, stock: 30, description: "Samsung's latest" },
        { id: 3, name: "Google Pixel 6", price: 599, stock: 20, description: "The Google phone" },
        // More products...
    ];

    const productList = document.getElementById("productList"); // The container for the product cards
    const pagination = document.querySelector(".pagination"); // The container for the pagination buttons
    const itemsPerPage = 4; // Number of products to display per page
    let currentPage = 1; // Initialize the current page to 1

    // Function to display products for the given page
    function displayProducts(page) {
        const start = (page - 1) * itemsPerPage; // Calculate the starting index for the products
        const end = page * itemsPerPage; // Calculate the ending index for the products
        const pageProducts = products.slice(start, end); // Get the subset of products for the current page

        productList.innerHTML = ""; // Clear the existing products

        // Loop through the products and create the HTML for each product
        pageProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("col-md-3"); // Add a column class for Bootstrap grid

            // Create the product card and append it to the product list
            productDiv.innerHTML = `
                <div class="card">
                    <img src="images/phone1.jpeg" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p><strong>Price:</strong> $${product.price}</p>
                        <button class="btn btn-danger btn-sm">Delete</button> <!-- Delete button for the product -->
                    </div>
                </div>
            `;
            productList.appendChild(productDiv);
        });

        // Call the function to display pagination controls
        displayPagination(page);
    }

    // Function to display pagination buttons
    function displayPagination(page) {
        pagination.innerHTML = ""; // Clear existing pagination buttons
        const totalPages = Math.ceil(products.length / itemsPerPage); // Calculate the total number of pages

        // Previous button
        const prevButton = document.createElement("li");
        prevButton.classList.add("page-item");
        prevButton.innerHTML = `<a class="page-link" href="#" data-page="${page - 1}">Previous</a>`;
        if (page === 1) prevButton.classList.add("disabled"); // Disable if on the first page
        pagination.appendChild(prevButton);

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("li");
            pageButton.classList.add("page-item");
            pageButton.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            if (i === page) pageButton.classList.add("active"); // Highlight the current page
            pagination.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement("li");
        nextButton.classList.add("page-item");
        nextButton.innerHTML = `<a class="page-link" href="#" data-page="${page + 1}">Next</a>`;
        if (page === totalPages) nextButton.classList.add("disabled"); // Disable if on the last page
        pagination.appendChild(nextButton);
    }

    // Event listener for pagination buttons (Previous, Next, and Page Numbers)
    pagination.addEventListener("click", function(event) {
        const pageLink = event.target.closest("a"); // Get the clicked page link
        if (pageLink) {
            const page = parseInt(pageLink.getAttribute("data-page")); // Get the page number from the clicked link
            if (page >= 1 && page <= Math.ceil(products.length / itemsPerPage)) {
                currentPage = page; // Update the current page
                displayProducts(currentPage); // Display the products for the new page
            }
        }
    });

    // Initially load the products for the first page
    displayProducts(currentPage);
});
