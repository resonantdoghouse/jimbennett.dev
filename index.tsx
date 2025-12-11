import React from 'react';
import ReactDOM from 'react-dom/client';
import LogRocket from 'logrocket';
import App from './App';

try {
  // Disable network capture to prevent "Cannot set property fetch" error
  LogRocket.init("fskgrn/personal-site", {
    network: {
      isEnabled: false
    }
  });
} catch (e) {
  console.warn("LogRocket failed to initialize:", e);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);