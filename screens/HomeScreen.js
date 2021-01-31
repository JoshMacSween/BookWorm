import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <Button
      title="Go to Josh's profile"
      onPress={() => {
        navigation.navigate('Profile', {name: 'Josh'});
      }}
    />
  );
}
