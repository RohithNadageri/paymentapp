import axios from 'axios';
 import { useSelector } from "react-redux";


const SendBankAccount=(props,walletIdGet)=>{

    // const user = useSelector((state) => state.loggedInUser);
    // const walletIdGet = user.wallet.walletId;
    console.log(props)
    const accNo=parseInt(props.accountNo)
    let walletOb={
        "walletId":parseInt(walletIdGet)
        
    }
    let payload={
        
        "bankName":props.bankName.toString(),
        "accountNo":accNo,
        "ifscCode":props.ifscCode.toString(),
        "balance":parseFloat(props.balance),
        "wallet":walletOb
        
        
    }
    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
        axios.post('http://localhost:8080/addAccount',payload, customConfig).then(function (response) {
            console.log(response.data);
           
        }, (error) => {
            console.log("Error Occured")
            document.getElementById("errorMessage").innerHTML = "Bank Account Already Exist";
        })
}
export default SendBankAccount;