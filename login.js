const user = {
  email:"student@uitm.com", password:"1234567890"
};

    const loginform = document.getElementById("loginform");

  if (loginform){
    loginform.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const invalid = document.getElementById("invalid");


  if (email === user.email && password === user.password){
    window.location.href = "dashboard.html";
      } else {
        invalid.style.display = "block";
      }
    });
}
