import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import {createBottomTabNavigator} from 'react-navigation';
import {Footer, FooterTab} from 'native-base';
import ProfileScreen from '../Screens/ProfileScreen.js'
import SecondaryScreen from '../Screens/SecondaryScreen.js'
import HomeScreen from '../Screens/HomeScreen.js'
import SettingsScreen from '../Screens/SettingsScreen.js'



const BottomNavigator = createBottomTabNavigator({

    SecondaryScreen: {screen:SecondaryScreen, 
    navigationOptions: {tabBarLabel: 'Secondary Screen',
    tabBarIcon: <Icon name="ios-heart" size={24}/>
    } 
},
  
    ProfileScreen: {screen: ProfileScreen,
    navigationOptions: {tabBarLabel: 'Profile Screen',
    tabBarIcon: <Icon name="ios-home" size={24} />
    }
},
    SettingsScreen: {screen: SettingsScreen,
    navigationOptions: {tabBarLabel: 'Settings Screen',
    tabBarIcon: <Icon name="ios-settings" size={24} />
    }
},

})



export default BottomNavigator;
