import tireChangeImage from '../assets/images/tirechange.jpeg';

export default function Vincent() {
    
    return (
        <div> 
            <h1 className="tireChange">The Tire Change Shop</h1>
            <img src={tireChangeImage} className="tireChangeImage" alt="Tire Change Shop" />
            <a href="/schedule" className="schedule">Schedule</a>
            <a href="/revenue" className="revenue">Revenue</a>
            <a href="Customer Numbers" clasName="customerNumbers">Customer Numbers</a>
        </div>
    )
}