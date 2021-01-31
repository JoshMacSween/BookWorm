import React from 'react';
import {View, Text, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faJedi} from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home!</Text>
      <FontAwesomeIcon icon={faJedi} size={20} />
    </View>
  );

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
}
