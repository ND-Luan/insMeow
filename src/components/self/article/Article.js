import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { faTableCells, faCirclePlay, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Left from './Left';
import Middle from './Middle';
import Right from './Right';


const renderScene = SceneMap({
  left: Left,
  middle: Middle,
  right: Right
});

function Article() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'left', icon: faTableCells },
    { key: 'middle', icon: faCirclePlay },
    { key: 'right', icon: faUserCircle },
  ]);

  const renderTabBar = (props) => {
    return <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: 'white' }}
      renderIcon={({ route, focused, color }) => (
        <FontAwesomeIcon icon={route.icon} size={25} color={focused ? 'black' : 'gray'} />
      )}
    />
  }
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={{ height: layout.height }}
    />
  );
}
export default Article