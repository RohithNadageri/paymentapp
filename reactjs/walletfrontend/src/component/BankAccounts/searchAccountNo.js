import { useState } from "react";

const GetBillByBankAccount = ({ onSearch }) => {
    const [recAccount, setRecAccount] = useState({
        accountNo: ""
    });

    const { accountNo } = recAccount;
    const setChange = (e) => {
        setRecAccount({
            ...recAccount, [e.target.name]: [e.target.value]
        });
        
    }

    const nameSubmit = (e) => {
        e.preventDefault();
        onSearch(accountNo);
    }

    return (
        <>
            <form onSubmit={nameSubmit}>

                {/* <label>Filter by name :</label> */}
                <div class="mx-2 d-flex" >
                    
                    <input type="text" class='form-control form-control-md' id="accountNo" name="accountNo" value={accountNo} onChange={setChange} placeholder='Filter by Account No'/>           
                    <button class="btn btn-sm btn-outline-primary ms-3" type="submit">search</button>
                </div>
                
            </form>
        </>
    )
}

export default GetBillByBankAccount;