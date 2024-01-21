import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from "./components/Home.jsx"
import Steve from "./components/Steve.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Daily from './components/Daily.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Steve",
    element: <Steve/>,
  },
  {
    path: "/Daily",
    element: <Daily/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
