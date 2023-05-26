import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SaveUpdateData from "../services/saveUpdateData";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import getAddMoneyToWallet from "../services/addBalanceToWallet";
import AddIcon from "@mui/icons-material/Add";
import Beneficiary from "./Beneficiary";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import deleteBeneficiarybyId from "../services/deleteBeneficiary";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allBeneficiary, setAllBeneficiary] = useState([]);
  const [showBalance, setShowBalance] = useState("************");
  const [updateData, setUpdateData] = useState({
    email: "",
    mobileNo: "",
    userName: "",
    password: "",
  });
  const { email, mobileNo, userName, password } = updateData;
  const [addMoney, setAddMoney] = useState({
    amount: "",
    accountNo: "",
  });
  const { amount, accountNo } = addMoney;

  useEffect(() => {
    getProfile();
  }, [updateData, showBalance]);

  const user = useSelector((state) => state.loggedInUser);
  const mobileno = user.mobileNo.toString();

  // const userImg = useSelector((state) => state.userImg);
  // console.log(userImg);

  const [open, setOpen] = useState(false);
  const [openAddMoney, setOpenAddMoney] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenAddMoney = () => {
    setOpenAddMoney(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAddMoney(false);
  };
  const handleCloseAddMonry = () => {
    setOpenAddMoney(false);
  };

  const [data, setData] = useState([]);
  const [allTransaction, setAllTransaction] = useState([]);
  const [allBillPayments, setAllBillPayments] = useState([]);
  const [allBankAccount, setAllBankAccount] = useState([]);
  const [openBeneficiary, closeBeneficiary] = useState(false);

  const customerInput = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: [e.target.value],
    });
  };
  const submitCustomer = (e) => {
    e.preventDefault();
    SaveUpdateData(updateData);
    // console.log(updateData);
    setUpdateData({
      email: "",
      mobileNo: "",
      userName: "",
      password: "",
    });
    setOpen(false);
  };
  const AddMoneyWallet = (e) => {
    setAddMoney({
      ...addMoney,
      [e.target.name]: [e.target.value],
    });
  };

  const submitAddMoneyToWallet = (e) => {
    e.preventDefault();
    // getAddMoneyToWallet(mobileno, addMoney);
    // const res = await getAddMoneyToWallet(mobileno, addMoney);
    // console.log(res);
    try {
      getAddMoneyToWallet(mobileno, addMoney);
      setOpenAddMoney(false);
    } catch (error) {
      console.log("error");
      // return error;
      document.getElementById("error").innerHTML = "Insufficient Amount";
    }

    setAddMoney({
      amount: "",
      accountNo: "",
    });
  };
  const getProfile = async () => {
    const res = await axios.get(
      `http://localhost:8080/customerprofile/${mobileno}`
    );
    fetchAllTransaction(res.data.mobileNo);
    fetchAllBanks(res.data.mobileNo);
    fetchAllBeneficiary(res.data.mobileNo);
    fetchAllBillPayments(res.data.mobileNo);
    setData(res.data);
  };

  const fetchBanalance = async (mobileNo) => {
    const res = await axios.get(
      `http://localhost:8080/showBalance/${mobileNo}`
    );
    setShowBalance(res.data.wallet.balance);
  };
  const fetchAllTransaction = async (mobileNo) => {
    const res = await axios.get(
      `http://localhost:8080/alltransactions/${mobileNo}`
    );
    // console.log(res.data.slice(0, 3));

    setAllTransaction(res.data.slice(0, 3));
  };
  const fetchAllBillPayments = async (mobileNo) => {
    const res = await axios.get(
      `http://localhost:8080/allBillpayments/${mobileNo}`
    );
    // console.log(res.data.slice(0, 3));

    setAllBillPayments(res.data.slice(0, 3));
  };
  const fetchAllBanks = async (mobileNo) => {
    const res = await axios.get(
      `http://localhost:8080/allbankaccount/${mobileNo}`
    );
    // console.log(res.data);
    setAllBankAccount(res.data);
  };
  const fetchAllBeneficiary = async (mobileNo) => {
    const res = await axios.get(
      `http://localhost:8080/allbeneficiary/${mobileNo}`
    );
    // console.log(res.data);
    setAllBeneficiary(res.data);
  };
  const userlogout = () => {
    dispatch({
      type: "SET_LOGOUT",
      payload: null,
    });
    navigate("/login", { replace: true });
  };

  const handleBineficiaryFormOpen = () => {
    closeBeneficiary(true);
  };
  const handleBineficiaryFormClose = () => {
    closeBeneficiary(false);
  };

  const deleteBeneficiary = (id) => {
    // console.log(id);
    deleteBeneficiarybyId(id);
  };

  const [imageFile, setImageFile] = useState("");

  const handleFileOpen = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      // console.log(URL.createObjectURL(file));
      setImageFile(URL.createObjectURL(file));
      console.log(imageFile);
    });
    input.click();
    // dispatch({
    //   type: "SET_PROFILE_IMG",
    //   payload: imageFile.toString(),
    // });
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4 profile_navbar"
              >
                <ol className="breadcrumb mb-0" style={{ flex: "2.7" }}>
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    Customer Profile
                  </li>
                </ol>
                <Link to='/history'>
                  <button className="billpayment_btn">
                    History
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button></Link>

                <div className="billpayment_btn_box ms-3">

                  <Link to='/billpayments'>
                    <button className="billpayment_btn">
                      Pay Bills
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button></Link>
                  <Box
                    sx={{ "& > :not(style)": { m: 1 } }}
                    onClick={handleClickOpenAddMoney}
                  >
                    <Fab color="primary" aria-label="add">
                      <Tooltip title="Add Money" placement="bottom">
                        <AccountBalanceWalletIcon />
                      </Tooltip>
                    </Fab>
                  </Box>
                </div>
                <Dialog open={openAddMoney} onClose={handleClose}>
                  <DialogTitle className="text-align-center">
                    Add Money To Wallet
                  </DialogTitle>
                  <DialogContent>
                    <form
                      name="registrationForm"
                      class="mx-1 mx-md-4"
                      onSubmit={submitAddMoneyToWallet}
                    >
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example2c"
                            class="form-control"
                            name="amount"
                            value={amount}
                            onChange={AddMoneyWallet}
                            required
                          />

                          <label class="form-label" for="form3Example3c">
                            Enter Amount
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example3c"
                            class="form-control"
                            name="accountNo"
                            value={accountNo}
                            onChange={AddMoneyWallet}
                            required
                          />

                          <label class="form-label" for="form3Example3c">
                            Your Account No
                          </label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          class="btn btn-outline-primary btn-lg"
                        >
                          ADD
                        </button>
                      </div>
                      <p id="error"></p>
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseAddMonry}>Cancel</Button>
                  </DialogActions>
                </Dialog>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    <img
                      src={
                        imageFile
                          ? imageFile
                          : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      }
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <Box
                      sx={{ "& > :not(style)": { m: 1 } }}
                      className="profile_pic"
                    >
                      <Fab
                        color="secondary"
                        aria-label="edit"
                        className="profile_edit_box"
                        onClick={handleFileOpen}
                      >
                        {/* <input type="file" className="input_file" /> */}
                        <EditIcon className="text-sm text-white" />
                      </Fab>
                    </Box>
                  </div>
                  <h5 className="my-3">{data.name}</h5>
                  <p className="text-muted mb-1">Customer</p>
                  <p className="text-muted mb-4">
                    DTP, A6 Capgemini, Whitefield
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                      onClick={() => userlogout()}
                    >
                      Logout <LogoutIcon />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary ms-1"
                      onClick={handleClickOpen}
                    >
                      Edit Profile
                      <BorderColorIcon className="mb-1 fs-4" />
                    </button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle className="text-align-center">
                        Update Customer
                      </DialogTitle>
                      <DialogContent>
                        <form
                          name="registrationForm"
                          class="mx-1 mx-md-4"
                          onSubmit={submitCustomer}
                        >
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                name="userName"
                                value={userName}
                                onChange={customerInput}
                                required
                              />

                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example2c"
                                class="form-control"
                                name="email"
                                value={email}
                                onChange={customerInput}
                                required
                              />

                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                name="mobileNo"
                                value={mobileNo}
                                onChange={customerInput}
                                required
                              />

                              <label class="form-label" for="form3Example3c">
                                Your Mobile Number
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                name="password"
                                value={password}
                                onChange={customerInput}
                                required
                              />

                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-outline-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
              {/* +++++++++++ Beneficiary Table--------------*/}
              <div id="wrapper1">
                <h1 className="wrapper-title">Beneficiary</h1>
                <table id="keywords1">
                  <thead>
                    <tr>
                      {/* <th>
                        <span>#</span>
                      </th> */}
                      <th>
                        <span>name</span>
                      </th>
                      <th>
                        <span>mobileNumber</span>
                      </th>
                      <th>
                        <span>#</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBeneficiary.map((item, index) => {
                      return (
                        <tr key={index}>
                          {/* <td>{index}</td> */}
                          <td>{item.name}</td>
                          <td>{item.mobileNumber}</td>
                          <td>
                            <DeleteIcon
                              onClick={() =>
                                deleteBeneficiary(item.beneficiaryId)
                              }
                              className="text-danger delete_icon"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              &nbsp;
              {/* Add button for Beneficiary */}
              <div className="text-center">
                <Box
                  sx={{ "& > :not(style)": { m: 1 } }}
                  onClick={handleBineficiaryFormOpen}
                  onDoubleClick={handleBineficiaryFormClose}
                >
                  <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Box>
              </div>
              &nbsp;
              {/* Form for Beneficiary Data */}
              {openBeneficiary ? <Beneficiary /> : ""}
              &nbsp;
              {/* All Bill payments------------ */}
              <div id="wrapper1">
                <h1 className="wrapper-title">Bill Payments</h1>
                <table id="keywords1">
                  <thead>
                    <tr>
                      {/* <th>
                        <span>#</span>
                      </th> */}
                      <th>
                        <span>Amount</span>
                      </th>
                      <th>
                        <span>Billtype</span>
                      </th>
                      <th>
                        <span>Date</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBillPayments.map((item, index) => {
                      return (
                        <tr key={index}>
                          {/* <td>{index}</td> */}
                          <td>₹{item.amount}</td>
                          <td>{item.billtype}</td>
                          <td>{item.paymentDate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {allBillPayments.length === 0 ? (
                  ""
                ) : (
                  <>
                    <Link className="text-decoration-none" to='/allbillpayments'>
                      <p className="show_more">View All Bill Payments</p>
                    </Link>
                    <Link className="text-decoration-none" to='/viewbillbyid'>
                      <p className="show_more">View Bill By Id</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data.emailid}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data.mobileNo}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Check Balance</p>
                    </div>
                    <div className="col-sm-9 d-flex align-items-center justify-content-center flex-column">
                      <p className="text mb-0 text-success fw-semibold fs-3">
                        {data.wallet ? "₹" + showBalance : "**************"}
                      </p>
                      <button
                        onClick={() => fetchBanalance(data.mobileNo)}
                        type="button"
                        class="btn btn-light"
                      >
                        Check..
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        DTP, A6 Capgemini, Whitefield
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Banks Account Of Customer----------------- */}
              <Link to='/addBankAccount'>
                <button className="billpayment_btn mx-auto mb-3">
                  Add Accounts
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button></Link>
              <div id="wrapper">
                <h1 className="wrapper-title"> Bank Accounts</h1>
                <table id="keywords" cellSpacing={0} cellPadding={0}>
                  <thead>
                    <tr>
                      <th>
                        <span>Account No.</span>
                      </th>
                      <th>
                        <span>Balance</span>
                      </th>
                      <th>
                        <span>Bank Name</span>
                      </th>
                      <th>
                        <span>IFSC Code</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBankAccount.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.accountNo}</td>
                          <td>₹{item.balance}</td>
                          <td>{item.bankName}</td>
                          <td>{item.ifscCode}</td>
                          {/* <td>{item.description}</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {allBankAccount.length === 0 ? (
                  ""
                ) : (
                  <>
                    <Link className="text-decoration-none" to="/allbankaccount">
                      <p className="show_more" >Show more...</p>
                    </Link>
                  </>
                )}
              </div>
              <hr />
              {/*  Transactions TAble ================>>*/}
              <div id="wrapper">
                <h1 className="wrapper-title">All Transactions</h1>
                <table id="keywords" cellSpacing={0} cellPadding={0}>
                  <thead>
                    <tr>
                      <th>
                        <span>Id</span>
                      </th>
                      <th>
                        <span>Amount</span>
                      </th>
                      <th>
                        <span>Date</span>
                      </th>
                      <th>
                        <span>Type</span>
                      </th>
                      <th>
                        <span>Description</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTransaction.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.transactionId}</td>
                          <td>₹{item.amount}</td>
                          <td>{item.transactionDate}</td>
                          <td>{item.transactionType}</td>
                          <td>{item.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {allTransaction.length === 0 ? (
                  ""
                ) : (
                  <>
                    <Link className="text-decoration-none" to='/history'>
                      <p className="show_more">Show more...</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;