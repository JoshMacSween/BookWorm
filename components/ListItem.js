import {faBook} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ListItem({book}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {book && book.title ? (
          <Text style={styles.item}>
            {book.title}, {book.authors}
          </Text>
        ) : (
          <Text style={styles.item}>No books yet!</Text>
        )}
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
    fontSize: 22,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
});
