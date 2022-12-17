import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import LoginButton from './src/components/LoginButton';
import Title from './src/components/Title';
import LoginInput from './src/components/LoginInput';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Title />
      <LoginInput />
      <LoginButton />
    </View>
  );
};

export default App;
