import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

import AuthNavigationStack from './authNavigationStack';
import MainNavigationStack from './mainNavigationStack';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authAction, tokenSelector } from '../redux/slices/authSlice';

const RootNavigationStack = () => {
  const isLogin = useAppSelector(tokenSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authAction.checkLogin());
  }, []);

  return (
    <NavigationContainer>
      {isLogin && <MainNavigationStack />}
      {!isLogin && <AuthNavigationStack />}
    </NavigationContainer>
  );
};

export default RootNavigationStack;
