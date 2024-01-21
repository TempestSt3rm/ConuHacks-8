import Navbar from "./Navbar"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import reactLogo from '../assets/react.svg'
import "./Home.css"

function Home() {
    
    return (
        <>
        <Navbar className="w-full"></Navbar>
        {/* <a href="https://react.dev" target="_blank" style={{position:"relative", left:"215px", height:"300px", top: "450px"}}>
          <img src={reactLogo} className="logo react" alt="React logo" style={{height:"300px"}}/>
        </a> */}
        <DirectionsCarIcon style={{fontSize:"700px", height:"300px", position:"relative", top:"100px"}}></DirectionsCarIcon>
        <h1 style={{position:"relative", top:"100px"}}>TuneUp</h1>
        </>
    )
}
export default Home
 