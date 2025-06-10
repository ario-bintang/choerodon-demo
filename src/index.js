import React from 'react';
import "choerodon-ui/lib/configure";
import ReactDOM from 'react-dom'; // ⬅️ No `/client` here
import './index.css';
import './App.css'
import App from './App';
import { seedLocalStorage } from './helper/seed';
import { WaterMark } from 'choerodon-ui';

seedLocalStorage();

console.log(localStorage.getItem("users"))
ReactDOM.render(
  <WaterMark content="Choerodon-ui" gapX={100} gapY={100} height={50}>
    
      <App />
    
  </WaterMark>,
  document.getElementById('root')
);

// reportWebVitals();
