import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Btn from './Btn';
import Circle from './Circle';
import Info from './Info';

function Item({isBtn, title, media}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Circle media={media} />
        <Info title={title} />
      </View>
      {isBtn && <Btn />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexShrink: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Item;
