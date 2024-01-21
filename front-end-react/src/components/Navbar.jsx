import {Link} from 'react-router-dom';


 function Navigation() {

    return (
        <>
            <nav>
                <ul>
                    <li className="Home"><Link to="/Home">Schedule</Link></li>
                    <li className="Steve"><Link to="/Steve">Revenue</Link></li>
                    <li className="Daily"><Link to="/Daily">Number of Customers</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation