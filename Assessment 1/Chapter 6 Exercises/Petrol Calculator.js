const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate');
const totalDisplay = document.getElementById('total');

// Function to calculate and display the total cost
function calculateTotal() {
    // Transition input values as floats
    const price = parseFloat(priceInput.value);
    const liters = parseFloat(litersInput.value);

    // Check if inputs are valid numbers
    if (isNaN(price) || isNaN(liters)) {
        totalDisplay.textContent = "Invalid input";
        return;
    }

    // Calculate the total cost
    const total = price * liters;

    // Display the total cost with proper decimals
    totalDisplay.textContent = `Total Cost: $${total.toFixed(2)}`;
}

// Add event listener to the calculate button
calculateButton.addEventListener('click', calculateTotal);