import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@screens/home/Home';
import Notification from '@screens/notification/Notification';
import Reel from '@screens/reel/Reel';
import Search from '@screens/search/Search';
import Self from '@screens/self/Self';
import {TouchableOpacity, Text} from 'react-native';

//Icon

import HeaderTitle from '@components/navigation/HeaderTitle';
import HeaderRight from '@components/navigation/HeaderRight';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => {
            return <HeaderTitle />;
          },
          headerRight: () => {
            return <HeaderRight />;
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Reel"
        component={Reel}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Self"
        component={Self}
        options={{headerShown: true}}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;
