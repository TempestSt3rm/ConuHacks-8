import {Link} from 'react-router-dom';


 function Navigation() {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Steve">Steve</Link></li>
                    <li><Link to="/Daily">Daily</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation