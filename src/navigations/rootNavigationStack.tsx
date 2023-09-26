import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AuthNavigationStack from 'src/navigations/authNavigationStack';
import MainNavigationStack from 'src/navigations/mainNavigationStack';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { authAction, tokenSelector } from 'src/redux/slices/authSlice';

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
