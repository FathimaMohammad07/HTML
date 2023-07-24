document.getElementById("groceryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const item_name = document.getElementById("item_name").value;
    const item_code = document.getElementById("item_code").value;
    // Get other form field values and perform basic validation
    // For example, you can check if the fields are not empty or validate the price as a number.

    // If validation passes, you can send the data to the server for storing in the database.
    // Example: Send the data using fetch API or other methods.
});