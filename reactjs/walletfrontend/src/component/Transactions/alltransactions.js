// import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchByDate from "./searchByDate";
import SearchByReciverName from "./searchByReciverName";
import Image1 from '../../asset/images/ewallet.png'
import Image2 from '../../asset/images/sent.png'
import Image3 from '../../asset/images/receive.png'
import Image4 from '../../asset/images/invoice.png'

const AllTransactions = () => {
  const [dataList, setDataList] = useState([{}]);
  const [renderedList, setRenderedList] = useState(null);
  const condition1 = true;

  const user = useSelector((state) => state.loggedInUser);
  const walletIdGet = user.wallet.walletId;
  const mobileNoLog = user.mobileNo;

  useEffect(() => {
    searchAll();
  }, []);

  const searchAll = () => {
    console.log("search all")
    allTrans();
    handleSearch(dataList);
  }

  const displayData=(list)=>{
    return(
      <tr key={list.id} class='pt-5'>
          <td>
            {list.transactionType === 'Received' ?
              <img src={Image3} width='35px' class='me-2' /> :
              list.transactionType === 'Send' ?
                <img src={Image2} width='35px' class='me-2' /> :
                list.transactionType === 'Bill Payment' ?
                <img src={Image4} width='35px' class='me-2' /> :
                <img src={Image1} width='35px' class='me-2' />
            }
            {list.reciverName}</td>
          <td class='py-auto'>{list.reciverMobileNo}</td>
          <td className='text-center'>{list.transactionDate}</td>
          <td className="text-center">{'₹ ' + list.amount}</td>
          <td>{list.description}</td>
        </tr>
    )
  }


  const handleSearch = (dateList1) => {
    setRenderedList(dateList1.map((list) => {
      return (
        displayData(list)
      );
    }));

  };


  const handleSearchName = (reciverNameIn) => {
    console.log(reciverNameIn)
    setRenderedList(dataList.filter((transaction) =>
      (transaction.reciverName.toLowerCase().includes(reciverNameIn.toString().toLowerCase())))
      .map((list) => {
        return (
          displayData(list)
        );
      }));

  };


  const allTrans = async () => {
    const result = await axios.get(`http://localhost:8080/viewAllTransactionsByWallet/${walletIdGet}`);
    setDataList(result.data);
    console.log(result.data);
  };



  return (
    <>

      <div class='bg-light'>
        <div class="container py-3">
          {/* <div class="row">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                            <ol class="breadcrumb mb-0">
                                <Link to="/bodymain"><li class="breadcrumb-item"><a href="#">Home</a></li></Link>
                                <li class="breadcrumb-item"><a href="#"></a></li>
                                <li class="breadcrumb-item active" aria-current="page">Transaction History</li>
                            </ol>
                        </nav>
                    </div>
                </div> */}

          <div class="row">
            {/* <div class="col-lg-4" >
              <div class="card mb-4">



              </div>
            </div> */}

            <div class="col-lg-10 mx-auto">
              <div class="card mb-8">
                <div id="wrapper " >
                  <h3 className="wrapper-title text-center py-1 mb-3" style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>History</h3>
                  <div class='searchBy'>
                    <SearchByDate onSearch={handleSearch} />
                    <div class="ms-auto">
                      <SearchByReciverName onSearch={handleSearchName} />
                    </div>
                  </div>

                  <div class='my-2 text-center'>
                    <button type='submit' class='btn btn-sm btn-outline-primary px-5 mb-2' onClick={searchAll}>All Transactions</button>
                  </div>

                  <div >
                    <div class="table-responsive" >
                      <table class="table">
                        <thead style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>
                          <tr >

                            <th class='col-md-3 ps-5' >Name</th>
                            <th scope="col" >Reciver</th>
                            <th class="col-md-2 text-center" >Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Descprition</th>

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

          </div>

        </div>

      </div>
    </>
  );
}
export default AllTransactions;
