import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Schedule from "./components/Schedule.jsx"
import Revenue from "./components/Revenue.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NumberCustomers from './components/NumberCustomers.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Schedule",
    element: <Schedule/>,
  },
  {
    path: "/Revenue",
    element: <Revenue/>,
  },
  {
    path: "/NumberCustomers",
    element: <NumberCustomers/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
