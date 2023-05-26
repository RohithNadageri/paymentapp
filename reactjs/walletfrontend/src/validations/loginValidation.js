function loginValidation(){
    var mobile = document.forms["registrationForm"]["mobileNo"].value;
    var password = document.forms["registrationForm"]["password"].value;

    var errors = document.getElementById("message");

    if (mobile.length !== 10 || isNaN(mobile)) {
        errors.innerHTML="Enter a valid 10-digit Mobile Number";
        return false;
      }
  
    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
        errors.innerHTML="Password should be at least 8 characters, minimum 1 digit and minimum 1 special character";
          return false;
        }
    
        errors.innerHTML="";
    return true;
}

export default loginValidation;