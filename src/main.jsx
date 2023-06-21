import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from "./server.js";

import {BrowserRouter} from "react-router-dom";
import { AuthContext,AuthProvider } from 'src/context/AuthContext';

export {AuthContext};

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)
