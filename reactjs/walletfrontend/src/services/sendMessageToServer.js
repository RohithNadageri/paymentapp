import axios from "axios";
const SendMessageToServer = (userData) => {
  console.log(userData);
  let payload = {
    name: userData.name.toString(),
    email: userData.email.toString(),
    subject: userData.subject.toString(),
    message: userData.message.toString(),
  };

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  axios.post("http://localhost:8080/addmessage", payload, customConfig).then(
    function (response) {
      return response.data;
    },
    (error) => {
      console.log("Error Occured");
    }
  );
};

export default SendMessageToServer;