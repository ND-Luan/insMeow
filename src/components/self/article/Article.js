import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import {
  View,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {faTableCells} from '@fortawesome/free-solid-svg-icons';

function Article() {
  const iconLeft = () => {
    return <FontAwesomeIcon icon={faTableCells} />;
  };
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const  Left = ()=> {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
      </View>
    );
  }
  function Middle() {
    return (
      <View style={styles.container}>
        <Text>Middle</Text>
      </View>
    );
  }
  function Right() {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
      </View>
    );
  }
  const renderScene = SceneMap({
    first: Left,
    second: Middle(),
    third: Right(),
  });
  const [routes] = React.useState([
    {key: 'first', title: 'iconLeft'},
    {key: 'second', title: 'Second'},
    {key: 'thrid', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{height: layout.height}}
    />
  );
}
const styles = StyleSheet.create({
  left: {},
  middle: {},
  right: {},
});
export default Article;
