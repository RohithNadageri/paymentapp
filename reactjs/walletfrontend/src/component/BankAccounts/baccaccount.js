import { useState } from "react";
import SendBankAccount from "../../services/sendbankaccount";
import { Link } from 'react-router-dom';
import BgImage from '../../asset/images/bgbank1.jpg';
import SendImage from '../../asset/images/done.gif';
import { useSelector } from "react-redux";



const BaccAccount = () => {

    const user = useSelector((state) => state.loggedInUser);
    const walletIdGet = user.wallet.walletId;
    console.log(user,walletIdGet)
    const [accData, setAccData] = useState({
        bankName: "",
        accountNo: "",
        ifscCode: "",
        balance: ""
    });

     const [formSubmitted, setFormSubmitted] = useState(false);

    const { bankName, accountNo, ifscCode, balance} = accData;

    const changeAccHandler = (e) => {
        setAccData({
            ...accData, [e.target.name]: [e.target.value]
        });
    }

    const accSubmit = e => {
        e.preventDefault();
        console.log(accData);
        SendBankAccount(accData,walletIdGet)
        setFormSubmitted(true)
    }


    return (
    <>
    {/* <!-- Section: Design Block --> */}
    <section class="vh-100">
            {/* <!-- Jumbotron --> */}
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', clipPath: `polygon( 0 0,  80% 0, 100% 20%,100% 100%,20% 100%,0 80%)` }}>
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h1 class=" display-3 fw-bold ls-tight text-light">
                            Please provide your <br />
                                <span class="text-primary">bank account details </span>
                            </h1>

                        </div>
                        

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="card">
                                <div class="card-body py-5 px-md-5">

                                    {
                                        formSubmitted ? (<>
                                            <div class='text-center'>
                                                <img src={SendImage} alt="success" width='100%' />
                                                <h3>Added Successfully</h3>
                                                <Link to='/bodymain'>
                                                <button class='btn btn-outline-success my-4'>HomePage</button>
                                                </Link>
                                            </div>
                                        </>
                                        ) : (

                                            <form id="registrationForm" onSubmit={accSubmit}>
                                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                                <h4 class='mb-3'>Add Bank Account</h4>
                                                
                                                <div class="form-outline mb-3">
                                                    <p class="form-label" for="form3Example3">Bank Name</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="bankName" placeholder='Enter Bank Name' value={bankName} onChange={changeAccHandler} required />
                                                   
                                                    

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">Account Number</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="accountNo" placeholder='Enter Account Number' value={accountNo} onChange={changeAccHandler} required/>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">IFSC Code</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="ifscCode" placeholder='Enter IFSC Code' value={ifscCode} onChange={changeAccHandler} required/>

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <p class="form-label" for="form3Example3">Balance</p>
                                                    <input type="text" id="form3Example3" class="form-control" name="balance" placeholder='Enter Balance' value={balance} onChange={changeAccHandler} required/>

                                                </div>
                                                
                                                <p id='errorMessage' class="text-center text-danger mb-3"></p>
                                                {/* <!-- Submit button --> */}
                                                <button type="submit" class="btn btn-primary btn-block mb-1 w-100">
                                                    Add Account ➢
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
    </>
    );
}
export default BaccAccount;