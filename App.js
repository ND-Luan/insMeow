import AppNavigation from '@navigation/AppNavigation';
import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';

function App() {
  return (
    <MenuProvider>
      <AppNavigation />
    </MenuProvider>
  );
}
export default App;
