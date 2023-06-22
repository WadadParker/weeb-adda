import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from "./server.js";

import {BrowserRouter} from "react-router-dom";
import { AuthContext,AuthProvider } from 'src/context/AuthContext';
import { ProfileContext,ProfileProvider } from 'src/context/ProfileContext.jsx';

export {AuthContext,ProfileContext};

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <AuthProvider>
          <App />
        </AuthProvider>  
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
