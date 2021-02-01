/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faJedi} from '@fortawesome/free-solid-svg-icons';
import {ListItem, SearchBar} from '../components';

export default function HomeScreen({navigation}) {
  const [books, setItems] = useState([
    {id: 1, title: "Gravity's Rainbow", author: 'Thomas Pynchon'},
    {id: 2, title: 'Watchmen', author: 'Alan Moore'},
    {id: 3, title: 'Invisibles', author: 'Grant Morrison'},
    {id: 4, title: 'Valis', author: 'Phillip K. Dick'},
  ]);

  return (
    <View style={styles.center}>
      <SearchBar />
      <FlatList
        data={books}
        renderItem={({item}) => <ListItem book={item} />}
      />

      {/* <FontAwesomeIcon icon={faJedi} size={20} /> */}
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
