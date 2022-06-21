import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ItemsPage from './src/ItemsPage';

export default function ProtectedRoute(props) {
  const { userData } = useContext(UserContext);
  const Component = props.component;

  const isAuthenticated = !!userData.user;
  console.log(isAuthenticated);

  return isAuthenticated ? <ItemsPage /> : <Redirect to={{ pathname: '/Login' }} />;
}

