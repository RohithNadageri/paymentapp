// import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import SearchByDate from "./searchByDate";
import SearchByReciverName from "./searchByReciverName";
import Image1 from './../asset/images/avatar.png'
import Image2 from './../asset/images/right-arrow.png'
import Image3 from './../asset/images/received.png'
const AllTransactions = () => {
  const [dataList, setDataList] = useState([{}]);
  const [renderedList, setRenderedList] = useState(null);
  const condition1 = true;

  useEffect(() => {
    searchAll();
  }, []);

  const searchAll = () => {
    console.log("search all")
    allTrans();
    handleSearch(dataList);
  }


  const handleSearch = (dateList1) => {
    setRenderedList(dateList1.map((list) => {
      return (
        console.log("name" + list.reciverName),

        <tr key={list.id} >
          <td>
           {list.transactionType === 'Received' ?     
            <img src={Image3} width='35px' class='me-2' />:
            list.transactionType === 'Send' ?
            <img src={Image2} width='35px' class='me-2' /> :
            <img src={Image1} width='35px' class='me-2' />
              }
                
            {/* <img src={Image3} width='35px' class='me-2' /> */}
            
            
            {list.reciverName}</td>
          <td>{list.reciverMobileNo}</td>
          <td>{list.transactionDate}</td>
          <td className="text-center">{'₹ ' + list.amount}</td>
          <td>{list.description}</td>
        </tr>
      );
    }));

  };


  const handleSearchName = (reciverNameIn) => {
    console.log(reciverNameIn)
    setRenderedList(dataList.filter((transaction) =>
      (transaction.reciverName.toLowerCase().includes(reciverNameIn.toString().toLowerCase())))
      .map((list) => {
        return (
          console.log("here"),
          <tr key={list.id}>
            <td><img src={Image1} width='17%' class='me-2' />{list.reciverName}</td>
            <td>{list.reciverMobileNo}</td>
            <td>{list.transactionDate}</td>
            <td class="text-center">{'₹ ' + list.amount}</td>
            <td>{list.description}</td>
          </tr>
        );
      }));

  };



  const allTrans = async () => {
    const walletID = parseInt(87);
    const result = await axios.get(`http://localhost:8080/viewAllTransactionsByWallet/${walletID}`);
    setDataList(result.data);
    console.log(result.data);
  };



  return (
    <>

<div style={{ backgroundColor: "#eee" }}>
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#"></a></li>
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

                <th class='col-md-4' >Reciver Name</th>
                <th scope="col" >Reciver Phone</th>
                <th scope="col" >Date</th>
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
