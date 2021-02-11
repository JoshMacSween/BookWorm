import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function SearchBar({fetchBooks}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(text) => fetchBooks(text)}
        style={styles.input}
        placeholder="Search for books"
        placeholderTextColor="darkslateblue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
  input: {
    color: 'darkslateblue',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
