import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

const LoginInput = () => {
  const [username] = useState('');
  const [pass] = useState('');

  return (
    <View>
      <View>
        <TextInput
          value={username}
          style={{
            backgroundColor: '#D3D3D3',
            marginTop: 20,
            borderRadius: 4,
            marginLeft: 20,
            marginRight: 20,
          }}
          placeholder=" Masukkan Username"
        />
      </View>

      <View>
        <TextInput
          value={pass}
          style={{
            backgroundColor: '#D3D3D3',
            marginTop: 10,
            borderRadius: 4,
            marginLeft: 20,
            marginRight: 20,
          }}
          placeholder="Masukkan Password"
          onChangeText={text => pass}
          maxLength={12}
        />
      </View>
    </View>
  );
};

export default LoginInput;
