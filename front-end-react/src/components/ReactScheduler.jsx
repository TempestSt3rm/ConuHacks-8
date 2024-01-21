import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import './ReactScheduler.css'

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export default () => (
  <Paper className="coco">
    <Scheduler className="w-10px"
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={6.5}
        endDayHour={19.5}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);
