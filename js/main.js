// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the HTML element where you want to display the JSON contents
    const jsonDisplay = document.getElementById("jsonDisplay");

    // Fetch JSON data from the provided JSON file using the fetch() function
    fetch("https://shubham848570.github.io/Movie/Movies.json")
        .then(response => {
            // Check if the fetch request was successful
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(jsonData => {
            // Loop through the JSON data and create HTML elements to display the contents
            jsonData.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productImage = document.createElement("img");
                productImage.src = product.imageUrl;
                productImage.alt = product.name;
                productDiv.appendChild(productImage);

                const productName = document.createElement("h2");
                productName.textContent = product.name;
                productDiv.appendChild(productName);

                const productDescription = document.createElement("p");
                productDescription.textContent = product.description;
                productDiv.appendChild(productDescription);

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: ${product.price}`;
                productDiv.appendChild(productPrice);

                jsonDisplay.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
});

