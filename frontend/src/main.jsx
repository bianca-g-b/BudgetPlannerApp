import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store, persistor } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
)
