import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Configs from 'src/constants/configs';
import Login from 'src/screens/login';

const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { ...Configs.Fonts },
      }}
    >
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack;
