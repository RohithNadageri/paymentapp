import BgImage from '../../asset/images/sendback.jpg';
import SendImage from '../../asset/images/done.gif';
import {  useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { Link } from "react-router-dom";

const SendMoney = () => {
    const [transData, setTransData] = useState({
        walletId: "",
        mobileNo: "",
        amount: "",
        desc: ""
    });

    const [transList,setTransList] = useState([{}])

    const { walletId, mobileNo, amount, desc } = transData;

    const [formSubmitted, setFormSubmitted] = useState(false);

    const user = useSelector((state) => state.loggedInUser);
    const walletIdGet = user.wallet.walletId;
    const mobileNoLog = user.mobileNo;
    
    console.log("Wallet id last"+walletIdGet)

    const changeTransHandler = (e) => {
        setTransData({
            ...transData, [e.target.name]: [e.target.value]
        });
    }

    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const addTransaction = (walletId, mobileNo, amount, desc) => {
        try{
        axios.put(`http://localhost:8080/addTransaction/${walletId}/${mobileNo}/${amount}/${desc}`, customConfig).then(function (response) {
            console.log(response.data);
            setFormSubmitted(true);
            setTransList(response.data);
        }
        , (error) => {
            if (error.response) {
                console.log({ error: error.response.data})
                document.getElementById("errorMessage").innerHTML = error.response.data.message;      

            } else {
                document.getElementById("errorMessage").innerHTML ={ error: 'Give Valid Inputs' };
            }
        }
        ) } catch (error) {
            console.error(error);
            if (error.response) {
              this.setState({ error: error.response.data });
            } else {
              this.setState({ error: 'An unexpected error occurred. Please try again later.' });
            }
          }
    }
    // toast.error("Please Enter Valid Amount");
    const transSubmit = e => {
        e.preventDefault();
        
        const num = parseInt(walletIdGet);
        const amount1 = parseFloat(amount);
        console.log(mobileNoLog.toString()===mobileNo.toString())

        if(amount1 <= 0 ){
            document.getElementById('errorMessage').innerHTML="Please Enter Valid Amount";
            // // toast.error("Please Enter Valid Amount");
            // <ToastContainer />
        }else if(mobileNo.toString()===mobileNoLog.toString()){
            document.getElementById('errorMessage').innerHTML="Please Enter Valid Mobile Number";

        }
        else {
            console.log(walletIdGet, mobileNo, amount,desc);
        addTransaction(num, mobileNo, amount1,desc);}
    }

    const searchReciverName = () => {
        if(mobileNo == "" || mobileNo.length !=10){
                console.log("nhi chala")
        }else{
        axios.get(`http://localhost:8080/searchReciverName/${mobileNo}`).then(response => {
            console.log('result.data is', response.data);
            document.getElementById('message').innerHTML = response.data;
        }, (error) => {
            // console.log("error occured")
            console.log(error.response.data)
            document.getElementById('message').innerHTML = "No User Found";
        }
        )}
    }

    return (<>
        {/* <!-- Section: Design Block --> */}
        <section class="vh-100">
            {/* <!-- Jumbotron --> */}
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', clipPath: `polygon( 0 0,  80% 0, 100% 20%,100% 100%,20% 100%,0 80%)` }}>
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class=" display-4 fw-bold ls-tight text-light">
                                Simple And Easy Way To Transfer<br />
                                <span class="text-primary">With No Charge</span>
                            </h1>

                        </div>
                        

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="card">
                                <div class="card-body py-5 px-md-5">

                                    {
                                        formSubmitted ? (<>
                                            <div class='text-center'>
                                                <img src={SendImage} alt="success" width='100%' />
                                                <h3>{amount} ₹ Transfered Successfully To {transList.reciverName}</h3>
                                                <Link to="/bodymain">
                                                <button class='btn btn-outline-success my-4'>HomePage</button>
                                                </Link>
                                            </div>
                                        </>
                                        ) : (

                                            <form id="registrationForm" onSubmit={transSubmit}>
                                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                                <h4 class='mb-3'>Send Money</h4>
                                                
                                                <div class="form-outline mb-3">
                                                    <p class="form-label" for="form3Example3">Mobile Number</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="mobileNo" placeholder='Mobile Number' title="Mobile Number" value={mobileNo} onChange={changeTransHandler} required />
                                                    {/* <button onClick={searchReciverName}>click</button> */}
                                                    

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">Amount</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="amount" placeholder='Amount' title="Amount" value={amount} onChange={changeTransHandler} required/>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">Descprition</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="desc" placeholder='Descprition' title="Descprition " value={desc} onChange={changeTransHandler} required/>

                                                </div>
                                                <p id='errorMessage' class="text-center text-danger mb-3"></p>
                                                {/* <!-- Submit button --> */}
                                                <button type="submit" class="btn btn-primary btn-block mb-1 w-100">
                                                    Send ➢
                                                </button>
                                            </form>

                                        )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Jumbotron --> */}
        </section>
        {/* <!-- Section: Design Block --> */}
    </>
    )
}

export default SendMoney;