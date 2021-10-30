import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../Hooks/useAuth';
import "./PrivateRoute.css"

const PrivateRoute = ({children,...remaining}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){return  (<h4  className="spinner">please wait.... <Spinner  animation="border" variant="danger" /></h4>)}
    return (
        <Route
        {...remaining}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;