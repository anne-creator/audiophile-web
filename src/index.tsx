import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import { Provider } from 'react-redux'
import rootStore from './redux/store'; //the combination of persistor(persist store) & the real store
import { PersistGate } from 'redux-persist/integration/react';// provider from redux-persist only for react
import { Spin } from 'antd'

ReactDOM.render(
  <React.StrictMode>
    {/* connect redux store with app */}
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor} loading={Spin}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

