import {Link} from 'react-router-dom';


 function Navigation() {

    return (
        <>
            <nav className='flex justify-between w-full text-3xl'>
                    <Link to="/Home">Home</Link>
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/Visualization">Analysis</Link>
                    <Link to="/WalkIn">Walk-In</Link>
            </nav>
            <hr></hr>
            <div style={{height:"100px"}}></div>
        </>
    )
}

export default Navigation