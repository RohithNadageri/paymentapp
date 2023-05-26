import axios from "axios";

const deleteBeneficiarybyId = async (id) => {
  //   console.log(id);
  const res = await axios.delete(
    `http://localhost:8080/deletebenificiaryById/${id}`
  );
  console.log(res);
};

export default deleteBeneficiarybyId;
