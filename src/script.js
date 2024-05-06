document.addEventListener("DOMContentLoaded", function () {
    fetch('card.json')
    .then(response => response.json())
        .then(card => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + card.name;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + card.age;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + card.city;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(ageElement);
            dataDisplay.appendChild(cityElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});