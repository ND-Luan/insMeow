import AppProvider from '@appContext/AppProvider';
import AppNavigation from '@navigation/AppNavigation';
import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';

function App() {
  return (
    <AppProvider>
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    </AppProvider>
  );
}
export default App;
