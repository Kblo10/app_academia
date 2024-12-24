//loginScreen.js
import React from 'react';
import { View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.replace('Training')} />
    </View>
  );
}
