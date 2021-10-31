import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404 page not found</h2>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default NotFound;