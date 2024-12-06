document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
  
    // Simple Validation
    if (username === "" || password === "") {
      errorMessage.textContent = "All fields are required!";
      errorMessage.style.visibility = "visible";
      return;
    }
  
    errorMessage.style.visibility = "hidden";
  
    // Simulate login animation
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.textContent = "Logging in...";
    loginBtn.disabled = true;
  
    setTimeout(() => {
      alert("Login Successful!");
      loginBtn.textContent = "Login";
      loginBtn.disabled = false;
    }, 2000);
  });
  