
        function validateForm() {
            
            var email = document.getElementById("form-control").value;
            var password = document.getElementById("form-control1").value;

            
            if (email === "" ) {
                alert("Please enter your email address.");
                return false;
            }

            
            
                if (password === "") {
  alert("Please enter your password.");
  return false;
} else if (password.length < 8) {
  alert("Password must be at least 8 characters long.");
  return false;
} else if (!/[A-Z]/.test(password)) {
  alert("Password must contain at least one uppercase letter.");
  return false;
} else if (!/\d/.test(password)) {
  alert("Password must contain at least one number.");
  return false;
}

          

            
            return true;
        }