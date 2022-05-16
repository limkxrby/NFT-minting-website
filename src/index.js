import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const express = require('express');
const app = express();

app.get('./', (req, res){
  console.log('here')
  res.sendStatus(500)

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

