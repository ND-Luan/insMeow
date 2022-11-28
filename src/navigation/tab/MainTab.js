import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@screens/home/Home';
import Notification from '@screens/notification/Notification';
import Reel from '@screens/reel/Reel';
import Search from '@screens/search/Search';
import Self from '@screens/self/Self';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Notification" component={Notification}></Tab.Screen>
      <Tab.Screen name="Reel" component={Reel}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Self" component={Self}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;
