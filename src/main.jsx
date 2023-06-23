import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { makeServer } from "./server.js";

import {BrowserRouter} from "react-router-dom";
import { AuthContext,AuthProvider } from 'src/context/AuthContext';
import { ProfileContext,ProfileProvider } from 'src/context/ProfileContext.jsx';
import { PostContext,PostProvider } from 'src/context/PostContext.jsx';

export {AuthContext,ProfileContext,PostContext};

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <PostProvider>
          <AuthProvider>
            <App />
          </AuthProvider>  
        </PostProvider>
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
