import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

export default function BookCard({book, bookId, navigation, thumbnail}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {bookId: bookId, thumbnail: thumbnail})
      }>
      <Card>
        {book && book.title ? (
          <View>
            <Card.Title style={styles.title}>{book.title}</Card.Title>
            <Card.Divider />
            <Text style={styles.subtitle}>{book.authors}</Text>
          </View>
        ) : (
          <Text style={styles.title}>No books yet!</Text>
        )}
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    color: 'darkslateblue',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'darkslateblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
