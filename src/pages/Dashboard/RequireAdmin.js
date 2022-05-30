import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useAdmin from '../../Hook/useAdmin'
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {

    let location = useLocation();

    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;