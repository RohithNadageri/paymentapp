import axios from "axios";
const SaveUserData = (userData) => {
  console.log(userData);
  let sendUserData = {
    mobileNo: userData.mobileNumber.toString(),
    emailid: userData.emailid.toString(),
    name: userData.userName.toString(),
    password: userData.password.toString(),
  };

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("http://localhost:8080/createcustomer", sendUserData, customConfig)
    .then(
      function (response) {
        return response.data;
      },
      (error) => {
        console.log("Error Occured");
        // document.getElementById("errorMessage").innerHTML =
        //   "Mobile Number Already Exist";
      }
    );
};

export default SaveUserData;
