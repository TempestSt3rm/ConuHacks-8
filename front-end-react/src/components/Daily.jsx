
import { useState } from "react";
import "./Daily.css"
import axios from 'axios';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Daily() {

    const [time, setTime] = useState();
    const [day, setDay] = useState();
    const [value, setValue] = useState();
    const [response, setResponse] = useState({});
    let search = async () => {
        const r = await axios.get('http://localhost:5000/schedule/'+'2022-11-30'
        );
        console.log(r);
        // setResponse(r.data);
    }
    return (
        <>
            <form action="">
                <input type="date" value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
                <input type="time" value={time}
                    onChange={(e) => setTime(e.target.value)} />


            </form>
            <h1 className="result">{time} {day}</h1>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className="bg-white text-black"/>
                <DateTimePicker label="Basic date time picker" className="bg-white-200 text-white¨"/>
            </LocalizationProvider> */}
            {/* <DateCalendar
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
            /> */}

            <button className="bg-blue-200" onClick={() => search()}>The button</button>
            {response.name} {response.title}
        </>
    )
}

export default Daily