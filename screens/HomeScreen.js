/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faJedi} from '@fortawesome/free-solid-svg-icons';
import {ListItem, SearchBar} from '../components';
import GOOGLE_API_KEY from '../key';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [books, setBooks] = useState([{}]);

  async function fetchBooks() {
    const result = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=vineland+inauthor:pynchon&key=${GOOGLE_API_KEY}`,
      )
      .then((response) => {
        setBooks(response.data.items);
      });
  }

  return (
    <View style={styles.center}>
      <Button title="Click Me" onPress={fetchBooks} />
      <SearchBar />

      <FlatList
        data={books}
        renderItem={({item}) => <ListItem book={item.volumeInfo} />}
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
