import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BookWorm</Text>
      <Text style={styles.text}>Home | My Books | Search | More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 23,
  },
});
