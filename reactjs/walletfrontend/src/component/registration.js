import { useState } from "react";
import SaveUserData from "../services/saveUserData";
import UserValidation from "../validations/uservalidation";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../asset/images/signup.svg";
const Registration = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    mobileNumber: "",
    userName: "",
    emailid: "",
    password: "",
  });
  const { mobileNumber, userName, emailid, password } = userData;
  const customerInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };
  const submitCustomer = (e) => {
    e.preventDefault();
    UserValidation();
    if (userName.indexOf(" ") === 0) {
      document.getElementById("error").innerHTML = "Please Enter The Full Name";
    } else {
      SaveUserData(userData);
      console.log(userData);
      setUserData({
        mobileNumber: "",
        userName: "",
        emailid: "",
        password: "",
      });
      navigate("/login", { replace: true });
    }
  };
  return (
    <>
      <section class=" m-2">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body ">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-1 mx-1 mx-md-4 mt-2">
                        Sign up
                      </p>
                      <p
                        id="errorMessage"
                        class="d-flex align-items-center justify-content-center py-2"
                        style={{ color: "red", fontSize: "15px" }}
                      ></p>
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
                              placeHolder="Enter Your Full Name"
                              required
                            />
                            {/* <input type="text"  value={userName} onChange={customerInput}/> */}
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            {/* <span id="nameerrorMessage" class="d-flex align-items-center justify-content-center " style={{color:"red"}}></span> */}
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example2c"
                              class="form-control"
                              name="emailid"
                              value={emailid}
                              onChange={customerInput}
                              placeHolder="Enter Your Email"
                              required
                            />
                            {/* <input type="text"  value={userName} onChange={customerInput}/> */}
                            <label class="form-label" for="form3Example1c">
                              Email
                            </label>
                            {/* <span id="nameerrorMessage" class="d-flex align-items-center justify-content-center " style={{color:"red"}}></span> */}
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              class="form-control"
                              name="mobileNumber"
                              value={mobileNumber}
                              onChange={customerInput}
                              placeHolder="Enter Your Phone Number"
                              required
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Mobile Number
                            </label>
                            {/* <p id="mobileerrorMessage" class="d-flex align-items-center justify-content-center " style={{color:"red"}}></p> */}
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
                              placeHolder="Enter Password"
                              required
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                            {/* <p id="passerrorMessage" class="d-flex align-items-center justify-content-center " style={{color:"red"}}></p> */}
                          </div>
                        </div>
                        <div
                          id="error"
                          className="text-danger text-center mb-3"
                        ></div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            class="btn btn-outline-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <div class="divider d-flex align-items-center my-4">
                          <p class="text-center fw-bold mx-3 mb-0 text-muted mx-auto">
                            OR
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2"> Have an account?</p>
                          <Link to="/login">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              Sign In
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registration;