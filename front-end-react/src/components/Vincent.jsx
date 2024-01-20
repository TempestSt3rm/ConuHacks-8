import tireChangeImage from '../assets/images/tirechange.jpeg';
import tire_repair from '../assets/images/tire_repair.png';

export default function Vincent() {
    
    
    return (
        <> 
            <h1 className="tireChange">The Tire Change Shop</h1>
            <img src={tireChangeImage} className="tireChangeImage" alt="Tire Change Shop" />
            <a href="/schedule" className="schedule">Schedule</a>
            <a href="/revenue" className="revenue">Revenue</a>
            <a href="/customerNumbers" className="customerNumbers">Customer Numbers</a>
            <input type="date" name="Calendar" id="calendar" />
            <img src={tire_repair} className="tireRepair" alt="Tire Repair" />   
            
        </>
    )

}