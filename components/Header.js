import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BookWorm</Text>
      <Button
        style={styles.btn}
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    padding: 10,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 23,
  },
  btn: {
    fontSize: 48,
  },
});
