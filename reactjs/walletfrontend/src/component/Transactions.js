import { useState } from "react";
import axios from 'axios';
import AllTransactions from "./alltransactions";

import "react-datepicker/dist/react-datepicker.css";
// import Image1 from './../asset/images/avataricon.webp'


const Transaction = () => {
    const [transData, setTransData] = useState({
        walletId: "",
        mobileNo: "",
        amount: "",
        desc: ""
    });

    const { walletId, mobileNo, amount, desc } = transData;

    const [formSubmitted, setFormSubmitted] = useState(false);


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
        axios.put(`http://localhost:8080/addTransaction/${walletId}/${mobileNo}/${amount}/${desc}`, customConfig).then(function (response) {
            console.log(response.data);
        }, (error) => {
            console.log("Error Occured")
            document.getElementById("errorMessage").innerHTML = "Mobile Number Already Exist";
        })
    }

    const transSubmit = e => {
        e.preventDefault();
        console.log(walletId, mobileNo, amount);
        const num = parseInt(walletId);
        const amount1 = parseFloat(amount);

        // addTransaction(num, mobileNo, amount1,desc);
        afterSubmit();

    }

    const afterSubmit = () => {
        // setImage(<img src={Image1} />);
        setFormSubmitted(true);
    }


    const searchReciverName = (mobileNo1) => {

        axios.get(`http://localhost:8080/searchReciverName/${mobileNo1}`).then(response => {
            console.log('result.data is', response.data);
            document.getElementById('message').innerHTML = response.data;
        }, (error) => {
            // console.log("error occured")
            document.getElementById('message').innerHTML = "No User Found";
        }
        )
    }



    return (<>
        <div style={{ backgroundColor: "#eee" }}>
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">User</a></li>
                                <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4" >
                        <div class="card mb-4">



                        </div>


                    </div>

                    <div class="col-lg-8">
                        <div class="card mb-8">

                            <div id="wrapper " >
                                <h3 className="wrapper-title text-center py-1 mb-3" style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>History</h3>
                                {/* <AllTransactions /> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </>
    );
}

export default Transaction;