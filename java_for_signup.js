function validateForm1() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;  
  
    if (firstname === "") {
      alert("Please enter your first name.");
      return false;
    }
    
    if (lastname === "") {
      alert("Please enter your last name.");
      return false;
    }
    
    if (username === "") {
      alert("Please enter your username.");
      return false;
    }
    
    if (password === "") {
      alert("Please enter your password.");
      return false;
    }
    
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }
    
    if (gender === "") {
      alert("Please select your gender.");
      return false;
    }
    
    if (dobDay === "" || dobMonth === "" || dobYear === "") {
      alert("Please enter your complete date of birth.");
      return false;
    }
    
    if (phone === "") {
      alert("Please enter your phone number.");
      return false;
    }
    
    // Rest of the code for input validation...
    
  
    // Check for invalid inputs
    var numberPattern = /^\d+$/;
    var alphabetPattern = /^[a-zA-Z]+$/;
  
    else if (numberPattern.test(firstname)) {
      alert("First name cannot contain numbers.");
      return false;
    }
  
    else if (numberPattern.test(lastname)) {
      alert("Last name cannot contain numbers.");
      return false;
    }
  
   else  if (numberPattern.test(username)) {
      alert("Username cannot contain numbers.");
      return false;
    }
  
    else if (numberPattern.test(phone)) {
      alert("Mobile number can only contain alphabets.");
      return false;
    }
  
    else if (!numberPattern.test(phone)) {
      alert("Mobile number can only contain numbers.");
      return false;
    }
    else{
      return false;
    }
  
    
  }
  