import IMGSELFSTORY from '@constants/imgSelfStory';
import {ScrollView, StyleSheet, View} from 'react-native';
import Circle from './Circle';
function Story() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Circle urlImage={IMGSELFSTORY.img1} name="A" />
        <Circle urlImage={IMGSELFSTORY.img2} name="B" />
        <Circle urlImage={IMGSELFSTORY.img3} name="C" />
        <Circle urlImage={IMGSELFSTORY.img4} name="D" />
        <Circle urlImage={IMGSELFSTORY.img5} name="E" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
export default Story;
