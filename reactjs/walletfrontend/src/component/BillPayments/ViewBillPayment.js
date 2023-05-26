import axios from 'axios';
import { useState } from "react";
import { useSelector } from "react-redux";

const ViewBillPayment = () => {
    const [billId, setBillId] = useState("");
    const [billData, setBillData] = useState(null);
    const [error, setError] = useState(null);

    const user = useSelector((state) => state.loggedInUser);

    const handleBillIdChange = (event) => {
        setBillId(event.target.value);
    };

    const handleViewBill = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/viewbill/${billId}`);
            setBillData(response.data);
            console.log(response.data);
            setError(null);
        } catch (error) {
            setBillData(null);
            setError(error.response?.data?.message ?? "No Records Found");
        }
    };

    return (
        <>
            <div class="w-75 mx-auto">
                <div class='my-2 text-center'>
                    <input type="text" class="form-control" placeholder="Enter bill ID" value={billId} onChange={handleBillIdChange} />
                    <button type='submit' class='btn btn-sm btn-outline-primary px-5 mb-2' onClick={handleViewBill}>View Bill</button>
                </div>

                {billData && (
                    <div class='my-2'>
                        <h4>Bill Details</h4>
                        <div class='table-responsive' >
                            <table class='table w-100'>
                                <tbody style={{ fontFamily: 'Inter,sans-serif' }}>
                                    <tr>
                                        <td>Bill ID:</td>
                                        <td>{billData.billId}</td>
                                    </tr>

                                    <tr>
                                        <td>Bill Type:</td>
                                        <td>{billData.billtype}</td>
                                    </tr>
                                    <tr>
                                        <td>Amount:</td>
                                        <td>{billData.amount}</td>
                                    </tr>
                                    <tr>
                                        <td>Payment Date:</td>
                                        <td>{billData.paymentDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {error && (
                    <div class='alert alert-danger'>{error}</div>
                )}
            </div>
        </>
    );
};

export default ViewBillPayment;
