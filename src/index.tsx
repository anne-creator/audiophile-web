import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "antd/dist/antd.css";
// import { store } from 'redux/store';
// import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    {/* connect redux store with app */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

