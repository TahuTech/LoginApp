import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';

import LoginButton from './src/components/LoginButton';
import Title from './src/components/Title';

const App = () => {
  const [username] = useState('');
  const [pass] = useState('');
  return (
    <View style={{flex: 1}}>
      <Title />
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

      <LoginButton />
    </View>
  );
};

export default App;
