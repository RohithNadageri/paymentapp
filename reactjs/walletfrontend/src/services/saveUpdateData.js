import axios from "axios";
const SaveUpdateData = (userData) => {
  // console.log(userData);
  let sendUserData = {
    emailid: userData.email.toString(),
    mobileNo: userData.mobileNo.toString(),
    name: userData.userName.toString(),
    password: userData.password.toString(),
  };

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .put("http://localhost:8080/updateAccount", sendUserData, customConfig)
    .then(
      function (response) {
        console.log(response);
      },
      (error) => {
        console.log("Error Occured");
        console.log(error);
      }
    );
};

export default SaveUpdateData;
