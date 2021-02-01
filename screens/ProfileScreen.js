import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPills} from '@fortawesome/free-solid-svg-icons';

export default function ProfileScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Create a profile</Text>
      <FontAwesomeIcon icon={faPills} size={20} />
    </View>
  );
}
