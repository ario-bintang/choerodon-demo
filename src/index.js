import React from 'react';
import "choerodon-ui/lib/configure";
import ReactDOM from 'react-dom'; // ⬅️ No `/client` here
import './index.css';
import './App.css'
import App from './App';
import { seedLocalStorage } from './helper/seed';

seedLocalStorage(); 

console.log(localStorage.getItem("users"))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
