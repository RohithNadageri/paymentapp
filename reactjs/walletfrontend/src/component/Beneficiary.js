import React, { useState } from "react";
import { useSelector } from "react-redux";
import saveBeneficiaryData from "../services/saveBeneficiaryData";
import "./beneficiary.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
function Beneficiary() {
  const user = useSelector((state) => state.loggedInUser);
  const mobileno = user.mobileNo.toString();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    mobileNo: "",
  });
  const { name, mobileNo } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mobileNo === "") {
      document.getElementById("error_msg").innerHTML =
        "please fill all the fields";
    } else {
      saveBeneficiaryData(mobileno, data);
      setOpen(true);
      setData({
        name: "",
        mobileNo: "",
      });
    }
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <div id="feedback-form">
        <h2 className="header">Manage Beneficiary</h2>
        <div>
          <form>
            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              required="true"
              placeholder="Name"
            />
            <input
              value={mobileNo}
              onChange={handleChange}
              type="text"
              required
              name="mobileNo"
              placeholder="Mobile Number"
            />
            {/* <input
              type="text"
              id="feedback-phone"
              name="phone"
              required={true}
              placeholder="Phone number"
            /> */}
            <Button onClick={handleSubmit} name="submit" type="submit">
              ADD
            </Button>
            <p id="error_msg" className="text-center text-danger mt-2"></p>
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
              message="Successfully added beneficiary"
              action={action}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Beneficiary;