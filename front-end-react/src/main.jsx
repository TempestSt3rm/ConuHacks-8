import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./components/Home.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Daily from './components/Daily.jsx'
import Dashboard from './components/Dashboard.jsx'
import NotFound from './components/NotFound.jsx'
import WalkIn from './components/WalkIn.jsx'
import Visualization from './components/Visualization.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/Test",
    element: <Daily/>,
  },
  {
    path: "/Visualization",
    element: <Visualization/>,
  },
  {
    path: "/WalkIn",
    element: <WalkIn/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
