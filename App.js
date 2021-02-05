/* eslint-disable no-labels */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BooksProvider from './contexts/BooksProvider';

import {
  faTimes,
  faInfoCircle,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Home" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <BooksProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? faInfoCircle : faSlidersH;
                } else if (route.name === 'Profile') {
                  iconName = focused ? faInfoCircle : faSlidersH;
                }

                return (
                  <FontAwesomeIcon icon={iconName} size={size} color={color} />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: 'darkslateblue',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{tabBarLabel: 'Home'}}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{tabBarLabel: 'Settings'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </BooksProvider>
    </SafeAreaProvider>
  );
};

export default App;
