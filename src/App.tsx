import React from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage } from './pages'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
