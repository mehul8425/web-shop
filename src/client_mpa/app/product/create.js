/* 
   Mehul Jodhani
   Date: 30 Jan 2025
   File: create.js
*/

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its ID
    const form = document.getElementById("createForm");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission (to avoid page reload)
        event.preventDefault();

        // Get values entered in the form fields
        const productName = document.getElementById("productName").value; // Product name
        const productPrice = parseFloat(document.getElementById("productPrice").value); // Product price
        const productStock = parseInt(document.getElementById("productStock").value); // Product stock (as integer)
        const productDescription = document.getElementById("productDescription").value; // Product description

        // Check if all fields are filled
        if (productName && productPrice && productStock && productDescription) {
            // If all fields are filled, display a success message with the product name
            alert(`Product added: ${productName}`);
            form.reset(); // Reset the form after submission
        } else {
            // If any field is missing, display an error message
            alert("Please fill all fields.");
        }
    });
});
