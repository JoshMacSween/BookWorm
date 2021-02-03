import {faBook} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function BookCard({book, bookId, navigation}) {
  return (
    <TouchableOpacity>
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
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details', {bookId: bookId})}
        />
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
