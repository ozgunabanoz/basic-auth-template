import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Signup from './components/signup/Signup';
import ErrorPage from './components/errorPage/ErrorPage';
import { useAuth } from './shared/hooks/auth-hook';
import { AuthContext } from './shared/context/auth-context';

function App() {
  const { isLoggedIn, login, logout } = useAuth();

  let routes = (
    <Switch>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/" exact component={Main}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  );

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="app">
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn}></Header>
          <main>{routes}</main>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
