import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

ReactDOM.render(
  <Router>
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/SignUp" exact>
      <SignUp />
    </Route>
    <Route path="/App" exact>
      <App />
    </Route>
    <Redirect to="/" />
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
