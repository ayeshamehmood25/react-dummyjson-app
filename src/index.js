// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
