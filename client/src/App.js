import React, { useEffect, useState } from 'react';
import RegisterScreen from './screens/RegisterScreen';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import authApi from './api/auth';
import UserContext from './context/userContext';
import LoginScreen from './screens/LoginScreen';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import PrivateRoute from './components/routes/PrivateRoute';
import SellScreen from './screens/SellScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setUser(authApi.getUser() || null);
    setUserLoading(false);
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, userLoading, setUserLoading }}>
        <ToastContainer />
        <Navbar />

        <Switch>
          <Route path="/products/:id" component={ProductScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <PrivateRoute path='/sell' component={SellScreen} />
          <PrivateRoute path='/cart' component={CartScreen} />
          <PrivateRoute exact path='/' component={HomeScreen} />
        </Switch>

      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
