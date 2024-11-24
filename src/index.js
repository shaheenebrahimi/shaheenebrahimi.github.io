// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// component imports
import App from './components/App';

// styling imports
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
