import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './Components/Screens/HomeScreen.js'
import ProfileScreen from './Components/Screens/ProfileScreen.js'
import BottomNavigator from './Components/Navigators/BottomNavigator'


const App = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  BottomNavigator: {screen: BottomNavigator}

}, {
  initialRouteName: 'BottomNavigator',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#30336b',
      },
      
    },
  }
);

export default App;