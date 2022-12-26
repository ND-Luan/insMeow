import {ScrollView, StyleSheet, View} from 'react-native';
import Card from './card/Card';
import Title from './header/Title';

function Explore() {
  return (
    <View style={styles.container}>
      <Title />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingTop:10}}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({container: {}});
export default Explore;
