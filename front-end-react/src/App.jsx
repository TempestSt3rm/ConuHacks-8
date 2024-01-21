import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Vincent from './components/Vincent.jsx'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'  
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data.message);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <Home></Home> 
    
     
 

    </>
  )
}

export default App
