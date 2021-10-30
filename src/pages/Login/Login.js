import React from "react";
import { useHistory, useLocation } from "react-router";
import { useFirebase } from "../../Hooks/useFirebase";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from||"/home";
  const { goolgeSignIn, user } = useFirebase();
  console.log(user);
  const handleGoogleSignIn = () => {
    goolgeSignIn().then(() => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <h1>please login</h1>
      <button onClick={handleGoogleSignIn}>google sign in</button>
    </div>
  );
};

export default Login;
