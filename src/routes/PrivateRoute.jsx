import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loader/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location)

  if(loading){
    return <Loading/>
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;