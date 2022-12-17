import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';

const App = () => {
  const [username] = useState('');
  const [pass] = useState('');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
          Hello Words Apps
        </Text>
        <Text>Just Simple Apps Login</Text>
      </View>

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
    </View>
  );
};

export default App;
