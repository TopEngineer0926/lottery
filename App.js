import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/Screens/HomeScreen';
import PrivacyPolicyScreen from './src/Screens/PrivacyPolicyScreen';
import RoomListScreen from './src/Screens/RoomsListScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CustomTabs from './src/Component/CustomsTabs';
import MyEntryScreen from './src/Screens/MyEntriesScree';
import ProfileScreen from './src/Screens/ProfileScreen';

const bottomTabs = createBottomTabNavigator(
  {
    RoomList: RoomListScreen,
    MyEntry: MyEntryScreen,
  },
  {
    swipeEnabled: true,
    tabBarComponent: (props) => <CustomTabs {...props} />,
  },
);

const LoginScreens = createStackNavigator({
  Home: HomeScreen,
  PrivacyPolicy: PrivacyPolicyScreen,
});

const profileStack = createStackNavigator({
  Profile: ProfileScreen,
});

const SwitchNavigator = createSwitchNavigator({
  AppStart: LoginScreens,
  TabsOption: bottomTabs,
  Profile: profileStack,
});

export default createAppContainer(SwitchNavigator);
