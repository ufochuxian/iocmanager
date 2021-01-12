import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import PromiseTs from "./pages/demo/PromiseTs";
import Admin from './admin'
import ReactTest from "./components/ReactTest"
import reportWebVitals from './reportWebVitals';
import {HelloWorld} from "./study/HelloWorld";
import {JsxExpression} from "./study/JsxExpression";

ReactDOM.render(
  <React.StrictMode>
    <JsxExpression />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
