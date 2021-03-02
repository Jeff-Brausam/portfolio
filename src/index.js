import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const modal = document.getElementById('modal');
const root = document.getElementById('root');

// if (modal.children.length >= 1) {
  // this area is for trap focusing... 
  // console.log(modal.children[0])
  // find a way to make it tab-indexable...
  // basically all children in root will be -1 index when modal has children, otherwise set to 0..
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
