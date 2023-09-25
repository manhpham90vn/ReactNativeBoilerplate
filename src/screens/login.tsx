import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Loading from '../components/loading';
import { LoginRequest } from '../data/apis/loginApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  authAction,
  errorSelector,
  loadingSelector,
} from '../redux/slices/authSlice';
import { defaultFont } from '../resources/fonts';

const Login = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isLoading = useAppSelector(loadingSelector);
  const error = useAppSelector(errorSelector);
  const dispatch = useAppDispatch();

  const login = () => {
    const payload: LoginRequest = {
      body: { email: user, password },
    };
    dispatch(authAction.loginApi(payload));
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(authAction.resetMessage());
          },
        },
      ]);
    }
  }, [error]);

  return isLoading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='User Name'
        keyboardType='email-address'
        value={user}
        onChangeText={(value) => setUser(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity onPress={login}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  input: {
    ...defaultFont,
    fontSize: 18,
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  button: {
    ...defaultFont,
    fontSize: 20,
    height: 50,
    padding: 10,
    margin: 10,
    alignSelf: 'center',
  },
});

export default Login;
