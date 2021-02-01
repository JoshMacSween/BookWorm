import {faBook} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ListItem({book}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.item}>
          {book.title} - {book.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'gainsboro',
    borderRadius: 8,
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
});
