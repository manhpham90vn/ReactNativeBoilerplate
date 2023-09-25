import { AntDesign } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Example2 = () => {
  return (
    <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          paddingTop: 30,
          fontWeight: 'bold',
        }}
      >
        Login
      </Text>
      <View>
        <Text style={{ fontSize: 12, paddingBottom: 5, paddingTop: 30 }}>
          Username
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 5,
          }}
        >
          <AntDesign name='user' size={16} color='black' />
          <TextInput
            style={{ flex: 1, paddingLeft: 5 }}
            placeholder='Type your username'
          />
        </View>
        <View style={{ height: 1, backgroundColor: '#ECECEC' }} />
      </View>

      <View>
        <Text style={{ fontSize: 12, paddingBottom: 5, paddingTop: 30 }}>
          Password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 5,
          }}
        >
          <AntDesign name='user' size={16} color='black' />
          <TextInput
            style={{ flex: 1, paddingLeft: 5 }}
            placeholder='Type your password'
            secureTextEntry
          />
        </View>
        <View style={{ height: 1, backgroundColor: '#ECECEC' }} />
      </View>

      <TouchableOpacity style={{ paddingTop: 10 }}>
        <Text style={{ textAlign: 'right', fontSize: 12 }}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'blueviolet',
          height: 50,
          justifyContent: 'center',
          borderRadius: 25,
          marginTop: 10,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingTop: 40 }}>
        <Text style={{ textAlign: 'center', fontSize: 12 }}>
          Or Sign Up Using
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Example2;
