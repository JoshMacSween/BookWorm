import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPills} from '@fortawesome/free-solid-svg-icons';
import {Card, ListItem} from 'react-native-elements';

export default function ProfileScreen({navigation, route}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 450,
      }}>
      <Text style={styles.inputHeading}>Sign Up</Text>

      <View>
        <TextInput
          style={styles.input}
          autoFocus="true"
          placeholder="User Name"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputHeading: {
    fontSize: 22,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    marginTop: 15,
  },
});
