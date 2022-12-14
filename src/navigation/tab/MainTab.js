import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@screens/home/Home';
import Notification from '@screens/notification/Notification';
import Reel from '@screens/reel/Reel';
import Search from '@screens/search/Search';
import Self from '@screens/self/Self';
import {TouchableOpacity, Text} from 'react-native';

//Icon

import HeaderTitle from '@components/navigation/home/HeaderTitle';
import HeaderRight from '@components/navigation/home/HeaderRight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart as heartRegular,
  faUser as userRegular,
  faCirclePlay as playRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faHouseChimneyWindow,
  faSearch,
  faSearchLocation,
  faCirclePlay as playFull,
  faHeart as heartFull,
  faUser as userFull,
} from '@fortawesome/free-solid-svg-icons';
import HeaderSelfTitle from '@components/navigation/self/HeaderSelfTitle';
import HeaderSelfRight from '@components/navigation/self/HeaderSelfRight';
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Self">
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
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesomeIcon
                icon={focused ? faHouseChimneyWindow : faHome}
                size={25}
              />
            );
          },
          tabBarShowLabel: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={focused ? faSearchLocation : faSearch}
              size={25}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Reel"
        component={Reel}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={focused ? playFull : playRegular}
              size={25}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Thông báo',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={focused ? heartFull : heartRegular}
              size={25}
            />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="Self"
        component={Self}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={focused ? userFull : userRegular}
              size={25}
            />
          ),
          headerTitle: () => <HeaderSelfTitle />,
          headerRight: () => <HeaderSelfRight />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;
