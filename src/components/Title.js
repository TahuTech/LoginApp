import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';

const Title = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
          Hello Words Apps
        </Text>
        <Text>Just Simple Apps Login</Text>
      </View>
    </View>
  );
};

export default Title;
