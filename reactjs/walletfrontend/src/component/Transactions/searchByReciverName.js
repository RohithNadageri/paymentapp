import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";

const SearchByReciverName = ({ onSearch }) => {
    const [recName, setRecName] = useState({
        reciverName: ""
    });

    const { reciverName } = recName;

    const [dateList, setDateList] = useState([]);


    const setChange = (e) => {
        setRecName({
            ...recName, [e.target.name]: [e.target.value]
        });
        onSearch(reciverName);
    }

    const nameSubmit = (e) => {
        e.preventDefault();
        nameSendToServer(reciverName);

    }

    const nameSendToServer = async (reciverName) => {
        const result = await axios.get(`http://localhost:8080/viewAllTransactionsByType/${reciverName}`);
        console.log(result.data);
        setDateList(result.data);
    }

    return (
        <>
            <form onSubmit={nameSubmit}>

                {/* <label>Filter by name :</label> */}
                <div class="mx-2 " >
                    <input type="text" class='form-control form-control-md' id="reciverName" name="reciverName" value={reciverName} onChange={setChange} placeholder='Filter by name' />
                </div>


                {/* <button class="btn btn-sm btn-outline-primary" type="submit">search</button> */}
            </form>


        </>
    )
}

export default SearchByReciverName;