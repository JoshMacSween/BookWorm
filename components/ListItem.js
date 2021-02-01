import {faBook} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ListItem({book}) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>
        {book.title} - {book.author}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    padding: 8,
    color: 'darkslateblue',
  },
});
