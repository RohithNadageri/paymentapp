import axios from "axios";

function loginDetailsToServer(props) {
  let payload = {
    mobileNo: props.mobileNo.toString(),
    password: props.password.toString(),
  };

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    axios.post("http://localhost:8080/login", payload, customConfig).then(
      function (response) {
        console.log(response.status);
        console.log(response.data);
        window.myGlobalVariable = response.data;

        window.location.href = "http://www.w3schools.com";
      },
      (error) => {
        console.log("Error Occured");
        document.getElementById("message").innerHTML = "User Not Found";
      }
    );
  } catch (UserNotFoundException) {
    console.log("Handel exception");
  }
}

export default loginDetailsToServer;
