import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './tab/MainTab';

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}

export default AppNavigation;
