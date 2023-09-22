import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/login';

const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack;
