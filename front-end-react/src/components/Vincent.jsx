import tire_repair from '../assets/images/tire_repair.png';
import directions_car from '../assets/images/directions_car.png';
import shipping_truck from '../assets/images/shipping_truck.png';
import engineering from '../assets/images/engineering.png';
import car_repair from '../assets/images/car_repair.png';

export default function Vincent() {
    
    
    return (
        <> 
            <h1 className="tuneUp">Tune Up</h1>
            <img src={tire_repair} className="tireRepair" alt="Tire Repair" />   
            <img src={directions_car} className="directionsCar" alt="Directions Car" />
            <img src={shipping_truck} className="shippingTruck" alt="Shipping Truck" />
            <img src={engineering} className="engineering" alt="Engineering" />
            <img src={car_repair} className="carRepair" alt="Car Repair" />
            
        </>
    )

}