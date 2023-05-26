import { useState } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const SearchByDate = ({ onSearch }) => {
    const oldToday = new Date().toISOString().substr(0, 10);
    const today = new Date().toISOString().substr(0, 10);
    const [date, setDate] = useState({
      
        startDate: oldToday,
        endDate: today
    });

    const { startDate, endDate } = date;

    const [dateList, setDateList] = useState([{}]);

    const setChange = (e) => {
        setDate({
            ...date, [e.target.name]: [e.target.value]
        });
    }

    const dateSubmit = (e) => {
        e.preventDefault();
        console.log(startDate, endDate);
        sendToServer(startDate, endDate);
        console.log('date list before call', dateList);

    }

    const sendToServer = async (startDate, endDate) => {
        axios.get(`http://localhost:8080/viewTransactionsByDate/${startDate}/${endDate}/${parseInt(89)}`).then(response=>{
            console.log('result.data is', response.data);
            setDateList(response.data);
            onSearch(response.data);
        },(error)=>{
            console.log("error occured")
            onSearch([]);
        }
        )
        
    }

    return (
        <>
            <form onSubmit={dateSubmit}>
                <div class=" d-flex ">
                    <div class="mx-2 " >
                        <input type="date" class='form-control form-control-md' id="startDate" name="startDate" value={startDate} onChange={setChange} />
                    </div>

                    <label class="my-auto"> To </label>
                    <div class="mx-2" >
                        <input type="date" class='form-control form-control-md' id="endDate" name="endDate" value={endDate} onChange={setChange} />
                    </div>
                    <button class=" btn btn-sm btn-light" type="submit">🔎</button>
                </div>
                
            </form>
        </>
    )
}

export default SearchByDate;