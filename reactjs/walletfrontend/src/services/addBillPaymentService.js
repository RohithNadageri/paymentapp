import axios from "axios";
const ADDBILLPAYMENT_BASE_URL = "http://localhost:8080/addBillPayment";

function AddBillPaymentService(data) {

    let payload = {

        "billId": parseInt(data.billId),
        "billtype": data.billtype.toString(),
        "amount": parseFloat(data.amount),
        "balance": parseFloat(data.amount),
        "paymentDate": data.paymentDate.toString(),
        "wallet" : {"walletId": 3}



    }
    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.post(ADDBILLPAYMENT_BASE_URL, payload, customConfig).then(response => {
        console.log('Bill Payment added successfully!');
    })
        .catch(error => {
            console.error('Error adding Bill Payment:', error);
        });;

}

export default AddBillPaymentService;