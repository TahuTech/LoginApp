import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 30,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          backgroundColor: 'blue',
          paddingVertical: 10,
          marginLeft: 100,
          marginRight: 100,
          borderRadius: 15,
          elevation: 2,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
