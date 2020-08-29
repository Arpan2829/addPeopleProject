import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/Checkout';
import LandingPage from './Components/LandingPage/LandingPage';

ReactDOM.render(
  <Router>
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/IndiiGlobe" exact>
      <LandingPage/>
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
