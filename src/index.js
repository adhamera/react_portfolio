import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/projects/Cards';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

