import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, ListItem, Input, Button} from 'react-native-elements';

export default function ProfileScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.inputHeading}>Sign Up</Text>

      <Input
        autoFocus={true}
        placeholder="Email"
        type="email"
        leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
      />
      <Input
        placeholder="Password"
        type="password"
        secureTextEntry={true}
        leftIcon={<FontAwesomeIcon icon={faLock} />}
      />
      <Button buttonStyle={styles.button} title="Submit" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  inputHeading: {
    fontSize: 22,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    marginTop: 15,
  },
  button: {
    backgroundColor: 'darkslateblue',


    borderRadius: 5,
  },
});
