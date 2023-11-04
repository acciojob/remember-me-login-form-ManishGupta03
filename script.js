//your JS code here. If required.
 const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkboxInput = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");
    
    // Check if saved details exist in local storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // Event listener for form submission
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get values from the form
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (checkboxInput.checked) {
        // Save details to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        // Remove saved details from local storage
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Show an alert with the logged-in username
      alert("Logged in as " + username);
      
      // If saved details exist, show the existing user button
      if (savedUsername) {
        existingUserButton.style.display = "inline";
      }
    });

    // Event listener for existing user button
    existingUserButton.addEventListener("click", function () {
      alert("Logged in as " + savedUsername);
    });

    // If saved details exist, show the existing user button
    if (savedUsername) {
      existingUserButton.style.display = "inline";
    }