const loadBtn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

loadBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            userList.innerHTML = "";

            users.forEach(function (user) {
                const userCard = document.createElement("div");

                const name = document.createElement("h3");
                name.textContent = user.name;

                const email = document.createElement("p");
                email.textContent = "Email: " + user.email;

                const city = document.createElement("p");
                city.textContent = "City: " + user.address.city;

                userCard.appendChild(name);
                userCard.appendChild(email);
                userCard.appendChild(city);

                userList.appendChild(userCard);
            });
        })
        .catch(function (error) {
            console.log("Error:", error);
            userList.textContent = "Users load nahi ho paaye.";
        });
});