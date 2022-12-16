import {StyleSheet, View} from 'react-native';
import Btn from './Btn';
import Circle from './Circle';
import Info from './Info';

function Card() {
  return (
    <View style={styles.card}>
      <Circle />
      <Info />
      <Btn />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 130,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    borderRadius: 10,
    padding:10
  },
});
export default Card;
