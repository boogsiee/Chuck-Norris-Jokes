import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { ContextAPI } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAPI>
      <Routes>
        <App />
      </Routes>
    </ContextAPI>
  </React.StrictMode>
);