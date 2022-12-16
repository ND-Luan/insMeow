import {StyleSheet, View} from 'react-native';
import Explore from './explore/Explore';
import Circle from './Info/Circle';
import EditSelf from './Info/EditSelf';

import StatusSelf from './Info/StatusSelf';
import Story from './story/Story';

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Circle />
        <StatusSelf />
      </View>

      <View style={styles.edit}>
        <EditSelf />
      </View>

      <View style={styles.explore}>
        <Explore />
      </View>
      <View style={styles.story}>
        <Story />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  edit: {},
  explore: {marginTop: 10},
  story: {marginTop: 10},
});
export default Header;
