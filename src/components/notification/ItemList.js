import {Text, View, StyleSheet} from 'react-native';
import CircleAvatar from './CircleAvatar';
import InfoCircle from './InfoCircle';
function ItemList({title, subTitle, chilren}) {
  return (
    <View style={styles.container}>
      <CircleAvatar chilren={chilren}/>
      <InfoCircle title={title} subTitle={subTitle}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,

    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ItemList;
