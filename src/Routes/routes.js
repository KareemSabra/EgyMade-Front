import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  //const userdata = JSON.parse(window.localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
       
            <Component {...props} />
      }
        
    />
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

// export const PublicRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => <Component {...props} />} />
// );
