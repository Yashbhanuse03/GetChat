import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {CssBaseline} form '@mui/material';
import {HelmetProvider} from 'react-helmet-async';  
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
