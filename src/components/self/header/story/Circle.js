import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

function Circle({name, urlImage}) {
  return (
    <View style={{marginRight: 10}}>
      <FastImage
        source={urlImage}
        style={styles.circle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={{textAlign: 'center'}}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
  },
});
export default Circle;
