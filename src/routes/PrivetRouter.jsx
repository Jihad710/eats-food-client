import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../provider/AuthProvider';


const PrivetRoute = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="d-flex justify-content-center" ><Spinner className='' animation="border" variant="warning" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace={true} state={{from: location}}></Navigate>
};

export default PrivetRoute;