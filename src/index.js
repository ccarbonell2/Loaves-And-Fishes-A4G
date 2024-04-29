//Thank you to Samhitha Bodangi for helping set up the navigation bar!
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/styles.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import Preferences from './Components/Preferences';
import ClientSchedule from './Components/ClientSchedule';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Preferences",
    element: <Preferences />,
  },
  {
    path: "Schedule",
    element: <Schedule />,
  },
  {
    path: "ClientSchedule",
    element: <ClientSchedule />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);