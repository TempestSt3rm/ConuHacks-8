import Navbar from "./Navbar"

import { useEffect, useState } from "react";
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
// import { Chart } from "react-google-charts";
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import V1 from "./V1";

function Visualization() {
    const [day, setDay] = useState("2024-10-01");
    const [a, setA] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [d, setd] = useState(0);
    const [e, sete] = useState(0);
    const [total, setTotal] = useState([]);
    const [response, setResponse] = useState([]);
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const schedulerData = [
        { startDate: '2022-10-01T09:45', endDate: '2022-10-01T11:00', title: 'Meeting' }
        // {startDate: '2023-10-01T14:07', endDate: '2023-10-01T15:07', title: 'Servicing'}
    ];
    // const data = {
    //     labels: ['January', 'February', 'March', 'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Sample Bar Chart',
    //             backgroundColor: 'rgba(75,192,192,0.2)',
    //             borderColor: 'rgba(75,192,192,1)',
    //             borderWidth: 1,
    //             hoverBackgroundColor: 'rgba(75,192,192,0.4)',
    //             hoverBorderColor: 'rgba(75,192,192,1)',
    //             data: [65, 59, 80, 81, 56],
    //         },
    //     ],
    // };

    // const options1 = {
    //     scales: {
    //         y: {
    //             beginAtZero: true,
    //         },
    //     },
    // };
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => {
        // Code inside this block will run after every render

        // Simulating an asynchronous operation (e.g., data fetching)
        const fetchData = async () => {
            //   try {
            // const response = await fetch('http://localhost:5000/schedule/' + day);
            const r = await axios.get('http://localhost:5000/schedule/' + "2022-10-01"
            );
            // const result = await response.json();
            // setData(result);
            //   } catch (error) {
            // console.error('Error fetching data:', error);
            //   }
            for (let i = 0; i < r.data.length; i++) {
                // console.log("value i is", i);
                // console.log(r.data[i][3]);
                let ele = r.data[i];
                if (r.data[i][4] == "1") {
                    console.log(ele[2].substring(0, 10));
                    const originalDate = new Date(ele[2].substring(0, 10));
                    console.log("og tinme", originalDate);
                    if (ele[3] == "class 1 truck") {


                        const newDate = new Date(originalDate.getTime() + 60 * 60 * 1000); // 30 minutes in milliseconds
                        const newDateString = newDate.toISOString().slice(0, 10);

                        let end = parseInt(ele[2].substring(12, 14)) + 1;
                        let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + "1" + end + ":" + ele[2].substring(14, 16), title: "Meeting" }
                        // schedulerData = [...schedulerData, k];
                        schedulerData.push(k);

                    } else if (ele[3] == "class 2 truck") {
                        const newDate = new Date(originalDate.getTime() + 120 * 60 * 1000); // 30 minutes in milliseconds
                        const newDateString = newDate.toISOString().slice(0, 10);
                        // let end = parseInt(ele[2].substring(12,14)) + 2;
                        // schedulerData += { startDate: r.data[i][2].substring(0,10)+"T"+r.data[i][2].substring(11,16), endDate: ele[2].substring(0, 10)+"T"+ele[2].substring(11,16), title: "Servicing "+r.data[i][3] };
                        let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16), title: "Servicing " + r.data[i][3] }
                        // schedulerData = [...schedulerData, k];
                        // schedulerData.push(k);
                    } else {

                        const newDate = new Date(originalDate.getTime() + 30 * 60 * 1000);
                        const newDateString = newDate.toISOString().slice(0, 10);
                        console.log(r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16));
                        console.log(ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16));
                        // let end = parseInt(ele[2].substring(14,16)) + 30;
                        // schedulerData += { startDate: r.data[i][2].substring(0,10)+"T"+r.data[i][2].substring(11,16), endDate: ele[2].substring(0, 10)+"T"+ele[2].substring(11,16), title: "Servicing "+r.data[i][3] };
                        let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16), title: "Servicing " + r.data[i][3] }
                        // schedulerData = [...schedulerData, k];
                        // schedulerData.push(k);
                    }

                }
                console.log(schedulerData);
                const delay = setTimeout(() => {
                    setShouldRender(true);
                  }, 2000);
              
                  // Cleanup function to clear the timeout if the component unmounts
                  return () => clearTimeout(delay);
            }
        };

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Code inside this block will run before the next render
            console.log('Cleanup function executed');
        };
    }, []);

    let reset = () => {
        setA(0);
        // console.log("a", a);
        setb(0);
        setc(0);
        setd(0);
        sete(0);
        setTotal(0);
    }



    const d1 = [
        { startDate: '2022-10-01T09:45', endDate: '2022-10-01T11:00', title: 'Meeting' }

    ]


    let search = async () => {

        const r = await axios.get('http://localhost:5000/schedule/' + day
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
        console.log("res", r.data);
        // console.log("a", a);
        let ca = 0;
        let cb = 0;
        let cc = 0;
        let cd = 0;
        let ce = 0;
        // console.log("ca", ca);

        for (let i = 0; i < r.data.length; i++) {
            // console.log("value i is", i);
            // console.log(r.data[i][3]);
            let ele = r.data[i];
            if (r.data[i][4] == "1") {
                console.log(ele[2].substring(0, 10));
                const originalDate = new Date(ele[2].substring(0, 10));
                console.log("og tinme", originalDate);
                if (ele[3] == "class 1 truck") {


                    const newDate = new Date(originalDate.getTime() + 60 * 60 * 1000); // 30 minutes in milliseconds
                    const newDateString = newDate.toISOString().slice(0, 10);

                    let end = parseInt(ele[2].substring(12, 14)) + 1;
                    let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + "1" + end + ":" + ele[2].substring(14, 16), title: "Meeting2" }
                    // schedulerData = [...schedulerData, k];
                    schedulerData.push(k);

                } else if (ele[3] == "class 2 truck") {
                    const newDate = new Date(originalDate.getTime() + 120 * 60 * 1000); // 30 minutes in milliseconds
                    const newDateString = newDate.toISOString().slice(0, 10);
                    // let end = parseInt(ele[2].substring(12,14)) + 2;
                    // schedulerData += { startDate: r.data[i][2].substring(0,10)+"T"+r.data[i][2].substring(11,16), endDate: ele[2].substring(0, 10)+"T"+ele[2].substring(11,16), title: "Servicing "+r.data[i][3] };
                    let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16), title: "Servicing " + r.data[i][3] }
                    // schedulerData = [...schedulerData, k];
                    // schedulerData.push(k);
                } else {

                    const newDate = new Date(originalDate.getTime() + 30 * 60 * 1000);
                    const newDateString = newDate.toISOString().slice(0, 10);
                    console.log(r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16));
                    console.log(ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16));
                    // let end = parseInt(ele[2].substring(14,16)) + 30;
                    // schedulerData += { startDate: r.data[i][2].substring(0,10)+"T"+r.data[i][2].substring(11,16), endDate: ele[2].substring(0, 10)+"T"+ele[2].substring(11,16), title: "Servicing "+r.data[i][3] };
                    let k = { startDate: r.data[i][2].substring(0, 10) + "T" + r.data[i][2].substring(11, 16), endDate: ele[2].substring(0, 10) + "T" + ele[2].substring(11, 16), title: "Servicing " + r.data[i][3] }
                    // schedulerData = [...schedulerData, k];
                    // schedulerData.push(k);
                }

            }
            // print(schedulerData);


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
        console.log(...schedulerData);

    }

    // let s = async () => {
    //     reset();
    //     search();
    // }

    // const options = {
    //     title: {
    //         text: "Basic Column Chart in React"
    //     },
    //     data: [{
    //         type: "column",
    //         dataPoints: [
    //             { label: "Apple", y: a },
    //             { label: "Orange", y: b },
    //             { label: "Banana", y: c },
    //             { label: "Mango", y: d },
    //             { label: "Grape", y: e }
    //         ]
    //     }]
    // }

    const data2 = [
        { name: 'Jan', gain: 4000, loss: 2400, amt: 2400 },
        { name: 'Feb', gain: 3000, loss: 1398, amt: 2210 },
        { name: 'Mar', gain: 2000, loss: 9800, amt: 2290 },
        // Add more data points as needed
    ];

    const data3 = [
        { category: 'Compact', value: a },
        { category: 'Medium', value: b },
        { category: 'Full-size', value: c },
        { category: 'Truck type 1', value: d },
        { category: 'Truck type 2', value: e },];


    // let ll = [2024, 1, 11, 14, 0]

    // const localizer = momentLocalizer(moment);

    // const events = [
    //     {
    //         id: 1,
    //         title: 'Meeting A',
    //         start: new Date(2022, 1, 10, 10, 0),
    //         end: new Date(2022, 1, 10, 12, 0),
    //     },
    //     //   {
    //     //     id: 2,
    //     //     title: 'Meeting B',
    //     //     start: new Date(2024, 1, 11, 14, 0),
    //     //     end: new Date(2024, 1, 11, 16, 0),
    //     //   },
    //     //   {
    //     //     id: 3,
    //     //     title: 'Meeting C',
    //     //     start: new Date(...ll),
    //     //     end: new Date(2024, 1, 11, 16, 0),
    //     //   },
    //     // Add more events as needed
    // ];

    // const currentDate = '2018-11-01';
    // const schedulerData = [
    //     { startDate: '2022-11-01T09:45', endDate: '2022-11-01T11:00', title: 'Meeting' },
    //     { startDate: '2022-11-01T12:00', endDate: '2022-11-01T19:30', title: 'Go to a gym' },
    // ];

    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-between" style={{ position: "relative", left: "200px", width: "400px" }}>

                <div>
                    <form action="">
                        <input type="date" value={day} onClick={() => reset()}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </form>

                    <button className="border-green bg-white" onClick={() => search()}>Search</button>
                    <button onClick={() => reset()} className="bg-white text-black border-red">Clear</button>
                </div>


                {/* <h1 className="result"> {day}</h1> */}
                <div>

                    <h2>Count</h2>
                    <p>Compact: {a}</p>
                    <p>Medium: {b}</p>
                    <p>Full-size: {c}</p>
                    <p>Truck type I: {d}</p>
                    <p>Truck type II: {e}</p>
                    <p>Total: {total}</p>
                </div>
            </div>

            <LineChart width={600} height={300} data={data2}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="gain" stroke="#8884d8" />
                <Line type="monotone" dataKey="loss" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
            </LineChart>

            <h1>Total number of customer by day</h1>
            <BarChart width={600} height={300} data={data3}>
                <XAxis dataKey="category" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#8884d8" />
                <Tooltip />
                <Legend />
            </BarChart>


            <h1>Total number of customers served by day</h1>
            <BarChart width={600} height={300} data={data3}>
                <XAxis dataKey="category" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#8884d8" />
                <Tooltip />
                <Legend />
            </BarChart>


            <h1>Total number of customers turned away by day</h1>
            <BarChart width={600} height={300} data={data3}>
                <XAxis dataKey="category" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#8884d8" />
                <Tooltip />
                <Legend />
            </BarChart>






            <Scheduler
                data={schedulerData}
                // data={d1}
            >
                <ViewState
                    currentDate={"2022-10-01"}
                />
                <DayView
                    startDayHour={7}
                    endDayHour={19}
                />
                <Appointments />
            </Scheduler>
            {/* <div>

{ shouldRender ? (
    
    <V1 d={schedulerData}></V1>
    ): <></>
    
}
</div> */}
        </>
    )
}


export default Visualization