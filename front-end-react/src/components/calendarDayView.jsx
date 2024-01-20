
 function CalendarDayView() {
    // function Event(start, end) {
    //     this.start = start;
    //     this.end = end;
    //     this.width = null;
    //     this.height = null;
    // }

    // var eventList = [
    //     { start: 30, end: 150 },
    //     { start: 540, end: 600 },
    //     { start: 560, end: 620 },
    //     { start: 610, end: 670 }
    // ];

    // function layOutDay(events) {
    //     var calendar = document.getElementById('calendar-view');

    //     for (var i = 0; i < events.length; i++) {
    //         drawEvent(calendar, events[i].start, events[i].end, 'Sample Item', 'Sample Location');
    //     }
    // }

    // function drawEvent(view, start, end, title, location) {
    //     var newEvent = document.createElement('div');
    //     newEvent.className = 'event';
    //     newEvent.style.top = start + "px";
    //     newEvent.style.height = (end - start) + "px";
    //     newEvent.style.width = "600px";

    //     var eventTitle = document.createElement('div');
    //     eventTitle.className = 'event-title';
    //     eventTitle.innerHTML = title;

    //     var eventLocation = document.createElement('span');
    //     eventLocation.className = 'event-location';
    //     eventLocation.innerHTML = location;

    //     newEvent.appendChild(eventTitle);
    //     newEvent.appendChild(eventLocation);

    //     view.appendChild(newEvent);
    // }

    // // Helper functions
    // function isCollide(event1, event2) {

    // }

    //layOutDay(eventList);


    return (
        <div className="calendar">
            <div className="time-block">
                <div className="time">9:00 <small>AM</small></div>
                <div className="time"><small>9:30</small></div>
                <div className="time">10:00 <small>AM</small></div>
                <div className="time"><small>10:30</small></div>
                <div className="time">11:00 <small>AM</small></div>
                <div className="time"><small>11:30</small></div>
                <div className="time">12:00 <small>PM</small></div>
                <div className="time"><small>12:30</small></div>
                <div className="time">1:00 <small>PM</small></div>
                <div className="time"><small>1:30</small></div>
                <div className="time">2:00 <small>PM</small></div>
                <div className="time"><small>2:30</small></div>
                <div className="time">3:00 <small>PM</small></div>
                <div className="time"><small>3:30</small></div>
                <div className="time">4:00 <small>PM</small></div>
                <div className="time"><small>4:30</small></div>
                <div className="time">5:00 <small>PM</small></div>
                <div className="time"><small>5:30</small></div>
                <div className="time">6:00 <small>PM</small></div>
                <div className="time"><small>6:30</small></div>
                <div className="time">7:00 <small>PM</small></div>
                <div className="time"><small>7:30</small></div>
                <div className="time">8:00 <small>PM</small></div>
                <div className="time"><small>8:30</small></div>
                <div className="time">9:00 <small>PM</small></div>
            </div>
            <div id="calendar-view" className="calendar-view">
                <div className="event">
                    <div className="pull-left border-blue"></div>
                    <div className="pull-right">
                        <div className="event-title">Sample Item</div>
                        <span className="event-location">Sample Location</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CalendarDayView;