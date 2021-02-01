import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
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
  // header: {},
  // text: {
  //   color: '#eee',
  //   textAlign: 'center',
  //   fontSize: 23,
  // },
  // btn: {
  //   fontSize: 48,
  // },
});
