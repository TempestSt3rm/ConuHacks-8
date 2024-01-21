import {Link} from 'react-router-dom';


 function Navigation() {

    return (
        <>
            <nav>
                <ul>
                    <li className="Home"><Link to="/Home">Home</Link></li>
                    <li className="Steve"><Link to="/Steve">Steve</Link></li>
                    <li className="Daily"><Link to="/Daily">Daily</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation