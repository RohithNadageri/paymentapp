import { useState } from 'react';
import AddBillPaymentService from '../services/addBillPaymentService';

function AddBillPayment() {
    const [billPayment, setBillPayments] = useState({
        
        // walletId:"",
        billtype: "",
        amount: "",
        paymentDate: ""
    });

    const {billtype,amount,paymentDate}=billPayment
    const handleInputChange = e => {
        setBillPayments({
            ...billPayment, [e.target.name]: e.target.value
        });
    };


    const handleSubmit = event => {
        event.preventDefault();
        AddBillPaymentService(billPayment);

    };

    return (
        <>
            <div class=" col-md-7 col-lg-5 col-xl-3 offset-xl-1 mx-auto" >
                <img src="" className="pt-4" width='100%' />
                <div className='px-5'>
                    <p class="text-center h1 fw-bold mx-1 mx-md-4 "></p>
                    <p id="message" class="d-flex align-items-center justify-content-center py-2" style={{ color: "red" }}></p>
                    <form id="registrationForm" onSubmit={handleSubmit}>


                        {/* <div class="form-outline mb-2">
                            <input id="form1Example23" class="form-control form-control-lg" type="text" name="walletId" placeholder='Wallet Id' value={walletId} onChange={handleWalletInputChange} />

                        </div> */}

                        <div class="form-outline mb-2">

                            <input id="form1Example13" class="form-control form-control-lg" type="text" name="billType" placeholder='Bill Type' value={billPayment.billType} onChange={handleInputChange} />

                        </div>


                        <div class="form-outline mb-2">
                            <input id="form1Example23" class="form-control form-control-lg" type="text" name="amount" placeholder='Amount' value={billPayment.amount} onChange={handleInputChange} />

                        </div>
                        <div class="text-center mt-4 mb-3" >
                            <button type="submit" class="btn btn-primary w-100" >Add Bill Payment</button>
                        </div>


                    </form>
                </div>
            </div>
        </>
    );
}
export default AddBillPayment;
