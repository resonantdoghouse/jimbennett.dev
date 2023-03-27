import React from 'react';
import ReactDOM from 'react-dom/client';
import LogRocket from 'logrocket';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

LogRocket.init('fskgrn/personal-site');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
