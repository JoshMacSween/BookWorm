import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function SearchBar({query, setQuery}) {
  return (
    <View>
      <TextInput
        value={query}
        name="query"
        onChangeText={(text) => setQuery(text)}
        placeholder="Search for books"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
});
