/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faJedi} from '@fortawesome/free-solid-svg-icons';
import {BookCard, SearchBar} from '../components';
import GOOGLE_API_KEY from '../key';
import {BooksContext} from '../contexts/BooksProvider';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const {fetchBooks, books} = useContext(BooksContext);
  // const [books, setBooks] = useState([]);

  // async function fetchBooks(q) {
  //   const result = await axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${GOOGLE_API_KEY}`,
  //     )
  //     .then((response) => {
  //       setBooks(response.data.items);
  //     });
  // }

  return (
    <View style={styles.center}>
      <SearchBar fetchBooks={fetchBooks} />

      <FlatList
        data={books}
        renderItem={({item}) => (
          <BookCard
            key={item.id}
            bookId={item.id}
            book={item.volumeInfo}
            thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});

// const [count, setCount] = React.useState(0);
// React.useLayoutEffect(() => {
//   navigation.setOptions({
//     headerRight: () => (
//       <Button onPress={() => setCount((c) => c + 1)} title="Update Count" />
//     ),
//   });
// }, [navigation]);
// return (
//   <Button
//     title="Go to Josh's profile"
//     onPress={() => {
//       navigation.navigate('Profile', {name: 'Josh'});
//     }}
//   />
// );
// return <Text>Count: {count}</Text>;
