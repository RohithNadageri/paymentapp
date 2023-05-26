import axios from "axios";
const getAddMoneyToWallet = async (mobileno, addMoney) => {
  const amount = addMoney.amount.toString();
  const accountNo = addMoney.accountNo.toString();
//   console.log(amount, accountNo);
  const res = await axios.put(
    `http://localhost:8080/addMoney/${mobileno}/${amount}/${accountNo}`
  );
  console.log(res.data);
};

export default getAddMoneyToWallet;
