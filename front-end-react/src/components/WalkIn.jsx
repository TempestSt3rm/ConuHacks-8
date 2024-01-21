import Navbar from "./Navbar"
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

function WalkIn() {
    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T19:30', title: 'Go to a gym' },
    ];

    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-start">

                <form  style={{ height: "300px", width: "400px", position: "relative", left: "-300px" }} className="border-solid border-blue-200 rounded-3xl border-4">
                    {/* <ul className="" style={{ postion:"absolute",height:"100%", alignItems:"center"}}>
                    <div>
                    
                    </div>
                    <li className="text-4xl" style={{top:"30px"}}>
                    <label htmlFor="date">Date: </label>
                    <input name="date" type="date" />
                    </li>
                    <li className="text-4xl">
                    <label htmlFor="time">Desired time: </label>
                    <input name="time" type="time" />
                    </li>
                    <li>
                    <button className="bg-white">Create</button>
                    </li>
                </ul> */}
                    <div className="flex flex-col top-100px text-2xl" style={{ height: "400px" }}>
                        <div style={{ position: "relative", top: "70px" }}>
                            <label htmlFor="date">Date: </label>
                            <input name="date" type="date" />
                        </div>

                        <div style={{ position: "relative", top: "120px" }}>
                            <label htmlFor="time">Desired time: </label>
                            <input name="time" type="time" />
                        </div>

                        <button className="bg-white" style={{ position: "relative", top: "180px", width: "300px", left: "" }}>Create</button>
                    </div>
                </form>

                    <Scheduler style={{ width: "100px" }}
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
                    <Scheduler style={{ width: "100px" }}
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
                    <Scheduler style={{ width: "100px" }}
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
                    <Scheduler style={{ width: "100px" }}
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
                    <Scheduler style={{ width: "100px" }}
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

                </div>

        </>
    )
}

export default WalkIn