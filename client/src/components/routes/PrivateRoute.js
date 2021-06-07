import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../../context/userContext';

function PrivateRoute({ path, Component, ...rest }) {
    const { user, userLoading } = useContext(UserContext);

    if (userLoading) return <h1>Loading...</h1>;

    if (!user) return <Redirect to='/login' />;

    return (
        <Route path={path} component={Component} {...rest} />
    );
}

export default PrivateRoute;