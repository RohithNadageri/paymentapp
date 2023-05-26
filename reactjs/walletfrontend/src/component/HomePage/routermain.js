import Login from "../login";
import Registration from "../registration";
import BodyMain from "./bodymain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import HeaderMain from "./headermain";
import Beneficiary from "../Beneficiary";
import SendMoney from "../Transactions/sendMoney";
import AllTransactions from "../Transactions/alltransactions";
import BillPayments from "../BillPayments/billPayments";
import Nopage from "./noPage";
import ListOfBankAccount from "../BankAccounts/getAllBankAccounts";
import BaccAccount from "../BankAccounts/baccaccount";
import AllBillPayments from "../BillPayments/AllBillPayments";
import ViewBillPayment from "../BillPayments/ViewBillPayment";
function routerMain() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderMain />}>
          <Route index element={<BodyMain />} />
          <Route path="/bodymain" element={<BodyMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sendMoney" element={<SendMoney />} />
          <Route path="/addbeneficiary" element={<Beneficiary />} />
          <Route path="/history" element={< AllTransactions />} />
          <Route path="/billpayments" element={< BillPayments />} />
          <Route path="/allbankaccount" element={<ListOfBankAccount />} />
          <Route path="/addBankAccount" element={<BaccAccount />} />
          <Route path="/allbillpayments" element={< AllBillPayments />} />
          <Route path="/viewbillbyid" element={< ViewBillPayment />} />

        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>

    </>
  );
}

export default routerMain;
