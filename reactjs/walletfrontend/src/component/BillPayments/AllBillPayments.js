import axios from 'axios';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const AllBillPayments = () => {
  const [dataList, setDataList] = useState([{}]);
  const [renderedList, setRenderedList] = useState(null);

  const user = useSelector((state) => state.loggedInUser);
  const mobileNoGet = user.mobileNo.toString();

  useEffect(() => {
    searchAll();
  }, []);

  const searchAll = () => {
    console.log("search all")
    allBillPays();
    handleSearch(dataList);
  }


  const handleSearch = (dataList) => {
    setRenderedList(dataList.map((list) => {
      return (

        <tr key={list.billId} >
          <td>{list.billId}</td>
          <td>{list.billtype}</td>
          <td className="text-center">{'₹ ' + list.amount}</td>
          <td>{list.paymentDate}</td>
        </tr>
      );
    }));

  };
  const allBillPays = async () => {
    const result = await axios.get(`http://localhost:8080/allBillpayments/${mobileNoGet}`);
    setDataList(result.data);
    console.log(result.data);
  };

  return (
    <>
      <div class="w-75 mx-auto">
        <div class='searchBy'>
          <div class="mx-auto">
            {/* <GetBillByBillId  onSearch={handleSearchId}  /> */}
          </div>
        </div>

        <div class='my-2 text-center'>
          <button type='submit' class='btn btn-sm btn-outline-primary px-5 mb-2' onClick={searchAll}>All Bill Payments</button>
        </div>

        <div >
          <div class="table-responsive" >
            <table class="table w-100 text-center">
              <thead style={{ background: `linear-gradient(to right, #ACB6E5, #86FDE8)` }}>
                <tr >

                  <th scope="col">Bill id</th>
                  <th scope="col">Bill Type</th>
                  <th scope="col" >Amount</th>
                  <th scope="col" >Date</th>



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
    </>
  );
}
export default AllBillPayments;