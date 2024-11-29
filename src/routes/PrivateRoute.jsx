import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    if(user) {
        return children;
    }
    return <Navigate to="/login" ></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;