import axios from "axios";

const saveBeneficiaryData = (mobileno, data) => {
  //   console.log(mobileno, data);
  let payload = {
    name: data.name.toString(),
    mobileNumber: data.mobileNo.toString(),
  };

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      `http://localhost:8080/addbeneficiary/${mobileno}`,
      payload,
      customConfig
    )
    .then(
      function (response) {
        console.log(response);
      },
      (error) => {
        console.log("Error Occured");
      }
    );
};

export default saveBeneficiaryData;
