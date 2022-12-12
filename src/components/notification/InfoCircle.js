import {Text, View, StyleSheet} from 'react-native';

function InfoCircle({title, subTitle}) {
  return (
    <View style={styles.row}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSubTitle}>{subTitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  textTitle: {fontSize: 14, fontWeight: '500'},
  textSubTitle: {
    fontSize: 14,
    fontWeight: '300',

  },
});
export default InfoCircle;
