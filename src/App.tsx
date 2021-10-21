import React from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage } from './pages'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles['app']}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route render={() => <h1> 404 page not found </h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
