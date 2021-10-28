import React, { useEffect } from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage, CategoryPage } from './pages'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductList } from './redux/productList/slice'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList({}));
  }, []);
  return (
    <div className={styles['app']}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/categories/:categoryId" component={CategoryPage} />
          <Route render={() => <h1> 404 page not found </h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
