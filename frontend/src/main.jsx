import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
)
