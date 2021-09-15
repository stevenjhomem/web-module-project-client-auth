import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; //BrowserRouter gives app and all of its descendants the ability to use the browser to create our routes rather than needing to go back to the server to retrieve all of this information. 
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
