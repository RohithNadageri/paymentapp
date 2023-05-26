import BgImage from '../asset/images/billbg2.png';
import SendImage from '../asset/images/done.gif';
import { useState } from "react";
import axios from 'axios';

const BillPayments = () => {
    const [billData, setBillData] = useState({
        billType: "",
        amount: ""

    });

    const [billList, setBillList] = useState([{}])

    const { billType, amount } = billData;

    const [formSubmitted, setFormSubmitted] = useState(false);

    const changeBillHandler = (e) => {
        setBillData({
            ...billData, [e.target.name]: [e.target.value]
        });
    }

    let payload = {
        billtype: billType.toString(),
        amount: parseFloat(amount)
    }

    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const addTransaction = () => {
        const mobileNo = "8817732543"
        try {
            axios.post(`http://localhost:8080/addBillPayment/${mobileNo}`, payload, customConfig).then(function (response) {
                console.log(response.data);
                setFormSubmitted(true);
                setBillList(response.data);
            }
                , (error) => {
                    if (error.response) {
                        console.log({ error: error.response.data })
                        document.getElementById("errorMessage").innerHTML = error.response.data.message;
                    } else {
                        document.getElementById("errorMessage").innerHTML = { error: 'Give Valid Inputs' };
                    }
                }
            )
        } catch (error) {
            console.error(error);
            if (error.response) {
                this.setState({ error: error.response.data });
            } else {
                this.setState({ error: 'An unexpected error occurred. Please try again later.' });
            }
        }
    }

    const billSubmit = e => {
        e.preventDefault();

        const amount1 = parseFloat(amount);
        if (amount1 <= 0) {
            document.getElementById('errorMessage').innerHTML = "Please Enter Valid Amount";
        }
        else {
            console.log(billType, amount);
            addTransaction();
        }
    }


    return (<>
        {/* <!-- Section: Design Block --> */}
        <section>
            {/* <!-- Jumbotron --> */}
            <div class="px-4 py-5 px-md-5 text-center text-lg-start bgBillImage" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', clipPath: `polygon( 0 0,  80% 0, 100% 20%,100% 100%,20% 100%,0 80%)` }}>
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class=" display-3 fw-bold ls-tight text-light">
                                Simple And Easy Way To Pay Bill<br />
                                <span class="text-primary">With No Charge</span>
                            </h1>
                        </div>


                        <div class="col-lg-4 mb-5 mb-lg-0 my-5 mx-auto">
                            <div class="card">
                                <div class="card-body py-5 px-md-5">
                                    {
                                        formSubmitted ? (<>
                                            <div class='text-center'>
                                                <img src={SendImage} alt="success" width='100%' />
                                                <h2>Your {billType} Bill Paid Successfully</h2>
                                                
                                                <button class='btn btn-outline-success my-4'>HomePage</button>
                                            </div>
                                        </>
                                        ) : (

                                            <form id="registrationForm" class="py-2" onSubmit={billSubmit}>
                                                <h4 class='mb-3'>Send Money</h4>
                                                <div class="form-outline mb-3">
                                                    <p class="form-label" for="form3Example3">Bill Type</p>
                                                    {/* <input type="text" id="form3Example3" class="form-control" name="billType" placeholder='Bill Type' value={billType} onChange={changeBillHandler} required /> */}
                                                    <select class="form-select form-select-lg h-6" name="billType" placeholder='Bill Type' value={billType} onChange={changeBillHandler}>
                                                        <option>Electricity Bill</option>
                                                        <option>DTH Connection</option>
                                                        <option>Gas Cyllinder</option>
                                                        <option>BroadBand</option>
                                                        <option>Education</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">Amount</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="amount" placeholder='Amount' value={amount} onChange={changeBillHandler} required />
                                                </div>


                                                <p id='errorMessage' class="text-center text-danger mb-3"></p>
                                                <button type="submit" class="btn btn-primary btn-block mb-1 w-100">
                                                    Pay Bill ➢
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

export default BillPayments;