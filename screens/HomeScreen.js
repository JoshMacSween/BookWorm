import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update Count" />
      ),
    });
  }, [navigation]);
  // return (
  //   <Button
  //     title="Go to Josh's profile"
  //     onPress={() => {
  //       navigation.navigate('Profile', {name: 'Josh'});
  //     }}
  //   />
  // );
  return <Text>Count: {count}</Text>;
}
