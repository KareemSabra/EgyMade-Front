import './App.css';
import React from 'react';
import { Router, Switch } from "react-router-dom";
import { PrivateRoute, ProtectedRoute } from "./Routes/routes";
import history from "./history";




const LogIn = React.lazy(()=> import("./components/logIn/parentComponent"))

export default class App extends React.Component {
  render(){

    
  return (
    <React.Suspense fallback={<div>loading</div>}>
    <Router history={history}>
      <Switch>

      <ProtectedRoute exact path="/" component={LogIn} />

      </Switch>
    
    </Router>
    </React.Suspense>
  );
}
}

