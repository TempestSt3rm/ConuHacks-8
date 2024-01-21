import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

function V1({d}) {

    return (
    <>
      <Scheduler
                data={d}
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
    </>
    )
}

export default V1