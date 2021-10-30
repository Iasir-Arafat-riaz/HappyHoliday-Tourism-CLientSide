import React from 'react';
import { useFirebase } from '../../Hooks/useFirebase';

const Login = () => {
    const{goolgeSignIn,user}=useFirebase()
    console.log(user)
    return (
        <div>
            <h1>please login</h1>
            <button onClick={goolgeSignIn}>google sign in</button>
        </div>
    );
};

export default Login;