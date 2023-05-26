const SaveTransData=(props)=>{
    
    let transDataPayload={
        "walletId":props.walletId,
        "mobileNo":props.mobileNo.toString(),
        "amount":props.amount
    }

    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    const addTransaction = (id, mobile, amount) => {
    axios.post(`http://localhost:8080/addTransaction/${id}/${mobile}/${amount}`,customConfig).then(function(response){
        console.log(response.data);
    },(error)=>{
        console.log("Error Occured")
        document.getElementById("errorMessage").innerHTML="Mobile Number Already Exist";
    })
    }
}
export default SaveTransData;