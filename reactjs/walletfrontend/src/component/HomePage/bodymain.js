import HeaderBG from "../../asset/images/image6.png";
import SecondBG from "../../asset/images/copyimage2.webp";
import Card1 from "../../asset/images/safe4.jpg";
import Card2 from "../../asset/images/walletcard1.jpg";
import Card3 from "../../asset/images/card4.webp";
// import BgImage from "../../images/bgimain.png";
import loan from "../../asset/images/loan.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector } from "react-redux";
import suryaImg from "../../asset/images/Surya.jpeg";
import abhishekImg from "../../asset/images/Abhishek.jpg";
import arijitImg from "../../asset/images/Arijit.jpg";
import rohitImg from "../../asset/images/Rohit.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import SendMessageToServer from "../../services/sendMessageToServer";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const BodyMain = () => {
  // const user = useSelector((state) => state.loggedInUser);
  // console.log(user);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SendMessageToServer(data);
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  // console.log(data);
  const [open, setOpen] = useState(false);

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
      <Button color="success" size="small" onClick={handleClose}>
        <TaskAltIcon />
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="info"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <div class="container-fluid header bg-light">
        <div class="row ">
          <div class="col-md-5 col-sm-12">
            <div class="m-5 px-5">
              <h1 class="leftHeader display-2">
                Pay with <br />
                Peace of <br />
                Mind__
              </h1>
              <p class="textleftheader">Start the new way of payments</p>
              <Link class="btn btn-primary px-5" to="/registration">
                Get Started
              </Link>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 ">
            <img src={HeaderBG} class="headerbg mx-auto d-block" width="77%" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-12 col-sm-12"
            style={{
              backgroundColor: "#00baf2",
              color: "white",
              fontFamily: "Inter,sans-serif",
            }}
          >
            <h1 class="m-4 secondh1">Recharge & Pay Bills on .</h1>

            <div class="my-5 row text-center">
              <div class="col-md-2 m-3">
                <img
                  src="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"
                  alt=""
                />
                <br />
                Recharge
              </div>

              <div class="col-md-2 m-3">
                <img
                  src="https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"
                  alt=""
                />
                <br />
                Pay
              </div>

              <div class="col-md-2 m-3">
                <img
                  src="https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"
                  alt=""
                />
                <br />
                DTH Connections
              </div>

              <div class="col-md-2 m-3">
                <img
                  src="	https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"
                  alt=""
                />
                <br />
                Gas Cyllinder
              </div>

              <div class="col-md-2 m-3">
                <img
                  src="https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png"
                  class="broadbandimg"
                  width="70%"
                  alt=""
                />
                <br />
                Broadband
              </div>

              {/* <div class="col-md-2 m-2">
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png" class="educationing" width="70%" alt="" />
                <br/>Education
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div class="container-fluid bg-light">
        <div class="row container">
          <div class="col-md-6 col-sm-12 mt-5">
            <div class="m-5">
              <h1 class="display-4">Pay anyone directly from your Wallet</h1>
              <p class="textleftheader ">
                Pay anyone, everywhere. Make contactless & secure payments
                in-stores or online using Paytm Wallet or Directly from your
                Bank Account. Plus, send & receive money from anyone.
              </p>
              <Link class="btn btn-primary px-5" to="/registration">
                GO
              </Link>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <img src={SecondBG} class="headerbg m-5" width="100%" />
          </div>
        </div>
      </div>
      {/* Section four */}
      <div class="container">
        <div class="row mt-5">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card m-1 cardhover">
              <img src={Card2} class="card-img-top" alt="..." />

              <div class="card-body text-center">
                <h5 class="card-title pt-1">Create Wallet</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>

          <div class="col-md-4 ">
            <div class="card cardhover">
              <img src={Card1} class="card-img-top" alt="..." />
              <div class="card-body text-center pt-5">
                <h5 class="card-title">Safe Payments</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>{" "}
              </div>
            </div>
          </div>

          <div class="col-md-4 ">
            <div class="card cardhover">
              <img src={Card3} class="card-img-top" alt="..." />
              <div class="card-body text-center" style={{ marginTop: "-25px" }}>
                <h5 class="card-title">Transactions</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Loan} */}
      <div class="container-fluid bg-light mt-5">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <img src={loan} class="mx-auto d-block mt-5 mb-3" width="60%" />
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="mt-5 p-5 ">
              <h1 class="leftHeader display-5">
                Get a Personal Loan in 2 Minutes.
              </h1>
              <p class="h-4">
                Our App offers India's quickest multi-purpose, hassle-free loan.
                It is 100% digital, transparent and paperless.
              </p>
              <Link class="btn btn-primary px-5" to="/registration">
                Apply
              </Link>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      {/* Testimonial */}
      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={suryaImg} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Suryakant Kumar</h4>
                  <span>Full Stack Developer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="">
                      <TwitterIcon />
                    </a>
                    <a href="">
                      <FacebookIcon />
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                    <a href="">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={abhishekImg} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Abhishek Malviya</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div className="social">
                    <a href="">
                      <TwitterIcon />
                    </a>
                    <a href="">
                      <FacebookIcon />
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={arijitImg} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Arijit Das</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                    <a href="">
                      <TwitterIcon />
                    </a>
                    <a href="">
                      <FacebookIcon />
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={rohitImg} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Rohit</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div className="social">
                    <a href="">
                      <TwitterIcon />
                    </a>
                    <a href="">
                      <FacebookIcon />
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/* ======= Contact Section ======= */}
      &nbsp;
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address d-flex">
                  <LocationOnIcon style={{ fontSize: "37px" }} />
                  <div>
                    <h4>Location:</h4>
                    <p>DTP, A6 Capgemini, Whitefield</p>
                  </div>
                </div>
                <div className="email d-flex">
                  <LocalPostOfficeIcon style={{ fontSize: "37px" }} />
                  <div>
                    <h4>Email:</h4>
                    <p>capgemini@gmail.com</p>
                  </div>
                </div>
                <div className="phone d-flex">
                  <LocalPhoneIcon style={{ fontSize: "37px" }} />
                  <div>
                    <h4>Call:</h4>
                    <p>+91-1800-43123-3423</p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      onChange={handleChange}
                      value={name}
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      onChange={handleChange}
                      value={email}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    onChange={handleChange}
                    value={subject}
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    onChange={handleChange}
                    value={message}
                    className="form-control"
                    name="message"
                    rows={10}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={handleClick}>
                    Send Message
                  </button>
                </div>
              </form>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Meassage Sent Successfully"
                action={action}
                color="success"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      {/* fotter */}
      &nbsp;
      <div
        class="container-fluid"
        style={{
          backgroundColor: "#00baf2",
          color: "white",
          fontFamily: "Inter,sans-serif",
        }}
      >
        <div class="text-center text-lg-start text-white">
          <div class="container p-4 pb-0">
            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <button type="button" class="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>

            <hr />
          </div>

          <div class="text-center pb-3">
            © 2023 Copyright :<a class="text-white"> Capgemini India</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyMain;
