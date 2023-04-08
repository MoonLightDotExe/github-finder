import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/GithubContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>
);
