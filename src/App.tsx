import React from 'react';
import styles from './App.module.css';
import { HomePage } from './pages'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
