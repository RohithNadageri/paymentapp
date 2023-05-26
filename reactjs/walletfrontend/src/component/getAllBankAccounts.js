import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import GetBillByBankAccount from './searchAccountNo';



function ListOfBankAccount() {
    const [accounts, setAccounts] = useState([{}]);
    // const [isLoading, setIsLoading] = useState(true);
    const [renderedList, setRenderedList] = useState(null);

    useEffect(() => {
        searchAll();
    }, []);

    const searchAll=()=>{
        getAllAccounts();
        handleSearch();
    }

    const getAllAccounts = async () => {
        let walletId = parseInt(1)
        try {
            const response = await axios.get(`http://localhost:8080/viewAllAccounts/${walletId}`);
        //    console.log(response)
           setAccounts(response.data);
        //    setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = () => {
        setRenderedList(accounts.map((account) => (
            <tr key={account.id}>
                <td>{account.bankName}</td>
                <td>{account.accountNo}</td>
                <td>{account.ifscCode}</td>
                <td>{account.balance}</td>
                <td>
                    <Button
                        variant="danger"
                        onClick={() => deleteAccount(account.accountNo)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
        )));

    };
    const handleSearchByAccount = (recAccount) => {
         console.log(recAccount)
         
         console.log(accounts.accountNo === recAccount)
        setRenderedList(accounts.filter((transaction) =>
          (transaction.accountNo === parseInt(recAccount)))
          .map((account) => {
            return (
                console.log("here"),
                <tr key={account.id}>
                <td>{account.bankName}</td>
                <td>{account.accountNo}</td>
                <td>{account.ifscCode}</td>
                <td>{account.balance}</td>
                <td>
                    <Button
                        variant="danger"
                        onClick={() => deleteAccount(account.accountNo)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
            );
          })
        )
      };

    const deleteAccount = async (accountNo) => {
        try {
            await axios.get(`http://localhost:8080/removeAccount/${accountNo}`);
             getAllAccounts();
        } catch (error) {
            console.error(error);
        }
    };

    // if (isLoading) {

    //     return <p>Loading...</p>;
    // }

    return (

        <div class="col-lg-8 text-center mx-auto">
            <div class="card mb-8">

                <div id="wrapper" >
                    <h3 className="wrapper-title text-center py-1 mb-3" style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>History</h3>

                    <div class='searchBy'>
                        {/* <SearchByDate onSearch={handleSearch} /> */}
                        <div class="ms-auto">
                        <GetBillByBankAccount onSearch={handleSearchByAccount}/>
                        </div>
                    </div>
                   

                    <div class='my-2 text-center'>
                    <button type='submit' class='btn btn-sm btn-outline-primary px-5 mb-2' onClick={searchAll}>All Transactions</button>
                    </div>

                    <div >
                        <div class="table-responsive" >
                            <table class="table">
                                <thead style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>
                                    <tr>
                                        <th>Bank Name</th>
                                        <th>Account Number</th>
                                        <th>IFSC Code</th>
                                        <th>Balance</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>


                                <tbody style={{ fontFamily: 'Inter,sans-serif' }}>

                                    {
                                        renderedList
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ListOfBankAccount;