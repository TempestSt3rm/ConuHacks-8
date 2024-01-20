import tireChangeImage from '../assets/images/tirechange.jpeg';

export default function Vincent() {
    
    return (
        <> 
            <h1 className="tireChange">The Tire Change Shop</h1>
            <img src={tireChangeImage} className="tireChangeImage" alt="Tire Change Shop" />
            <a href="/schedule" className="schedule">Schedule</a>
            <a href="/revenue" className="revenue">Revenue</a>
            <a href="/customerNumbers" clasName="customerNumbers">Customer Numbers</a>
            <input type="date" name="Calendar" id="calendar" />
        </>
    )

}