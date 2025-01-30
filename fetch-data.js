const dataContainer = document.getElementById('api-data');

const fetchUserData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear existing content
        dataContainer.innerHTML = "";

        // Create a <ul> element
        const userList = document.createElement("ul");

        // Loop through users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors by displaying a message
        dataContainer.innerHTML = "Failed to load user data.";
        console.error("Error fetching data:", error);
    }
};
// Invoke fetchUserData when the document is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
