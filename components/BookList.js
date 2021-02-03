import {faBook} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

export default function BookList({book}) {
  return (
    <Card>
      {book && book.title ? (
        <View>
          <Card.Title style={styles.title}>{book.title}</Card.Title>
          <Card.Divider />
          <Text style={styles.subtitle}>{book.authors}</Text>
        </View>
      ) : (
        // {book.authors}
        <Text style={styles.title}>No books yet!</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'darkslateblue',
    textAlign: 'center',
  },
});
