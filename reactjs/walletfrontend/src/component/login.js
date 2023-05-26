import React, { useState } from "react";
import Wallet1 from "../asset/images/walletimg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
function Login() {
  // const selector = useSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    mobileNo: "",
    password: "",
  });

  const { mobileNo, password } = data;
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const getLogin = async (mobileNo, password) => {
    const res = await axios.get(
      `http://localhost:8080/logincustomer/${mobileNo}/${password}`
    );
    console.log(res);
    if (res.data === "") {
      setError(true);
    } else {
      dispatch({
        type: "SET_LOGIN",
        payload: res.data,
      });

      navigate("/", { replace: true });
    }
  };

  const submitHandler = (e) => {
    setOpen(true);
    e.preventDefault();
    getLogin(mobileNo, password);

    // console.log(data);
    setData({ mobileNo: "", password: "" });
  };

  return (
    <>
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src={Wallet1} class="img-fluid" alt="Phone_image" />
            </div>

            <div
              class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-5"
              style={{
                borderWidth: "thick thin",
                borderRadius: "25px",
                borderColor: "black",
                background: " #80808012",
              }}
            >
              <p class="text-center h1 fw-bold mx-1 mx-md-4 ">Login Details</p>
              <p
                id="message"
                class="d-flex align-items-center justify-content-center py-2"
                style={{ color: "red" }}
              ></p>
              <form id="registrationForm" onSubmit={submitHandler}>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-2">
                  {/* <input type="email" id="form1Example13" class="form-control form-control-lg" /> */}
                  <input
                    id="form1Example13"
                    class="form-control form-control-lg"
                    type="text"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={changeHandler}
                  />
                  <label class="form-label" for="form1Example13">
                    Mobile Number
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    id="form1Example23"
                    class="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={password}
                    onChange={changeHandler}
                  />
                  {/* <input type="password" id="form1Example23" class="form-control form-control-lg" /> */}
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                </div>
                {error ? (
                  <p className="text-center text-danger">
                    Invalid Mobile or Password
                  </p>
                ) : (
                  ""
                )}
                {/* <p>Error Dialof</p> */}
                {/* <!-- Submit button --> */}
                <div class="text-center">
                  <button type="submit" class="btn btn-outline-primary mx-auto">
                    Sign in
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted mx-auto">
                    OR
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-center pb-4">
                  <p className="mb-0 me-2">Don't have an account?</p>
                  <Link to="/registration">
                    <button type="button" className="btn btn-outline-primary">
                      Create new
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
