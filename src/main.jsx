import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js'

atatus.config('6cf9b350f64047c3b49b6f7e5f0e4dec').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
serviceWorkerRegistration.register()
