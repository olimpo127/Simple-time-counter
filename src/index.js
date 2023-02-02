import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let number = 0;
setInterval(() => {
  number++;
  const one = Math.floor(number);
  const ten = Math.floor(number/10);
  const hundred = Math.floor(number/100);
  const thousand = Math.floor(number/1000);
  const tenThousand = Math.floor(number/10000);
  const hundredThousand = Math.floor(number/100000);
  root.render(
    <React.StrictMode>
      <App num1={hundredThousand} num2={tenThousand} num3={thousand} num4={hundred} num5={ten} num6={one}/>
    </React.StrictMode>
  );
}, 1000);
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
