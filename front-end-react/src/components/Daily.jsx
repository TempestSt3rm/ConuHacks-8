
import { useState } from "react";
import "./Daily.css"
import axios from 'axios';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CanvasJSReact from '@canvasjs/react-charts';
// import { Bar } from 'react-chartjs-2';
import { BarChart, Bar } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Chart } from "react-google-charts";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


// official imports
import Navbar from "./Navbar"

function Daily() {

    const [time, setTime] = useState();
    const [day, setDay] = useState("");
    const [a, setA] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [d, setd] = useState(0);
    const [e, sete] = useState(0);
    const [total, setTotal] = useState([]);
    const [response, setResponse] = useState([]);
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sample Bar Chart',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56],
            },
        ],
    };

    const options1 = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };


    let reset = () => {
        setA(0);
        console.log("a", a);
        setb(0);
        setc(0);
        setd(0);
        sete(0);
        setTotal(0);
    }

    let search = async () => {

        const r = await axios.get('http://localhost:5000/schedule/' + "2022-10-09"
        );
        // console.log(r.data);
        setResponse(r.data);
        setTotal(r.data.length);

        // setA(0);
        // setb(0);
        // setc(0);
        // setd(0);
        // sete(0);
        // reset();
        console.log("a", a);
        // console.log("a", a);
        let ca = 0;
        let cb = 0;
        let cc = 0;
        let cd = 0;
        let ce = 0;
        console.log("ca", ca);

        for (let i = 0; i < r.data.length; i++) {
            // console.log("value i is", i);
            // console.log(r.data[i][3]);
            let k = r.data[i][3];
            if (k == "compact") {
                ca++;
            } else if (k == "medium") {
                cb++;

            } else if (k == "full-size") {
                cc++;

            } else if (k == "class 1 truck") {
                cd++;

            } else if (k == "class 2 truck") {
                ce++;
            }
            // switch (r.data[i][3]) {
            //     case "compact":
            //         // a[0]++;
            //         setA(a+1);
            //         break;
            //     case "medium":
            //         // a[1]++;
            //         setb(b+1);
            //         break;
            //     case "full-size":
            //         // a[2]++;
            //         setc(c+1);
            //         break;
            //     case "class 1 truck":
            //         // a[3]++;
            //         setd(d+1);
            //         break;
            //     case "class 2 truck":
            //         // a[4];
            //         sete(e+1);
            //         break;
            // }

        }
        setA(a + ca);
        setb(b + cb);
        setc(c + cc);
        setd(d + cd);
        sete(e + ce);

    }

    let s = async () => {
        reset();
        search();
    }

    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Apple", y: a },
                { label: "Orange", y: b },
                { label: "Banana", y: c },
                { label: "Mango", y: d },
                { label: "Grape", y: e }
            ]
        }]
    }

    const data2 = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        // Add more data points as needed
    ];

    const data3 = [
        { category: 'A', value: 10 },
        { category: 'B', value: 20 },
        { category: 'C', value: 15 },];


    let ll = [2024, 1, 11, 14, 0]

    const localizer = momentLocalizer(moment);

    const events = [
        {
            id: 1,
            title: 'Meeting A',
            start: new Date(2022, 1, 10, 10, 0),
            end: new Date(2022, 1, 10, 12, 0),
        },
        //   {
        //     id: 2,
        //     title: 'Meeting B',
        //     start: new Date(2024, 1, 11, 14, 0),
        //     end: new Date(2024, 1, 11, 16, 0),
        //   },
        //   {
        //     id: 3,
        //     title: 'Meeting C',
        //     start: new Date(...ll),
        //     end: new Date(2024, 1, 11, 16, 0),
        //   },
        // Add more events as needed
    ];

    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T19:30', title: 'Go to a gym' },
    ];

    return (
        <>
            <Navbar></Navbar>
            <form action="">
                <input type="date" value={day} onClick={() => reset()}
                    onChange={(e) => setDay(e.target.value)}
                />
            </form>


            <h1 className="result">{time} {day}</h1>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className="bg-white text-black" />
                <DateTimePicker label="Basic date time picker" className="bg-white-200 text-white¨"/>
            </LocalizationProvider> */}
            {/* <DateCalendar
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
            /> */}

            <button className="border-green bg-white" onClick={() => search()}>Search</button>
            <button onClick={() => reset()} className="bg-white text-black border-red">Clear</button>
            {/* <ul>
                {

                    response.map(res => (


                        <li key={res[0]}> {...res}</li>

                    ))
                }
            </ul> */}
            {/* {response.name} {response.title} */}
            <p>Val of a {a}</p>
            <p>Val of a {b}</p>
            <p>Val of a {c}</p>
            <p>Val of a {d}</p>
            <p>Val of a {e}</p>
            <p>Val of total: {total}</p>

            <CanvasJSChart options={options} className="w-100px h-200px" />
            {/* <Bar data={data} options={options1} /> */}
            <LineChart width={600} height={300} data={data2}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
            </LineChart>

            <BarChart width={600} height={300} data={data3}>
                <XAxis dataKey="category" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#8884d8" />
                <Tooltip />
                <Legend />
            </BarChart>
            <h1>Here</h1>
            <Calendar className="text-white"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, backgroundColor: "green" }}
            />

            <Scheduler
                data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <DayView
                    startDayHour={7}
                    endDayHour={19}
                />
                <Appointments />
            </Scheduler>

        </>
    )
}

export default Daily