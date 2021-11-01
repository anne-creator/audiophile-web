import React from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage, CategoryPage, ProductPage } from './pages'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles['app']}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/categories/:categoryId" component={CategoryPage} />
          <Route path="/productItem/:productId" component={ProductPage} />
          <Route render={() => <h1> 404 page not found </h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
