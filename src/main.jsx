import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios  from 'axios'
import REQUEST from './constants/serverLink.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = REQUEST.SERVER;
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
