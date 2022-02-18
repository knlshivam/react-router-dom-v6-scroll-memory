import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { YScroll } from "./components/yScroll";
import { CustomRouter } from "./components/customRouter";

ReactDOM.render(
  <React.StrictMode>
    <CustomRouter>
        <YScroll>
          <App />
        </YScroll>
    </CustomRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals