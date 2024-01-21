import {Link} from 'react-router-dom';


 function Navigation() {

    return (
        <>
            <nav>
                <ul>
                    <li className="Schedule"><Link to="/Schedule">Schedule</Link></li>
                    <li className="Revenue"><Link to="/Revenue">Revenue</Link></li>
                    <li className="NumberCustomers"><Link to="/NumberCustomers">Number of Customers</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation