function userValidateForm() {
    var userName = document.forms["registrationForm"]["userName"].value;
    var mobile = document.forms["registrationForm"]["mobileNumber"].value;
    var password = document.forms["registrationForm"]["password"].value;
    // var pin = document.forms["registrationForm"]["pin"].value;
    // var nameerror = document.getElementById("nameerrorMessage");
    // var passerror = document.getElementById("passerrorMessage");
    // var mobileerror = document.getElementById("mobileerrorMessage");
    // var pinemailError = document.getElementById("errorMessage");
    var emailError = document.getElementById("errorMessage");
    // Validate First and Last Name
    if (userName.length > 50) {
      emailError.innerHTML="First and Last Name should not exceed 50 characters";
      return false;
    }

    if (!/^[a-zA-Z ]+$/.test(userName) ) {
        emailError.innerHTML="First and Last Name should contain only alphabets";
        return false;
    }
  
    // Validate Mobile Number
    if (mobile.length !== 10 || isNaN(mobile)) {
      emailError.innerHTML="Enter a valid 10-digit Mobile Number";
      return false;
    }
  
  
    // Validate Password
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
    emailError.innerHTML="Password should be at least 8 characters, minimum 1 digit and minimum 1 special character";
      return false;
    }
    
   
    emailError.innerHTML="";
    return true;

  };

  
  
  export default userValidateForm;