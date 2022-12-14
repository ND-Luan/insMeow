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
    flexShrink: 1,
    paddingLeft: 10,

  },
  textTitle: {
    fontSize: 13,
    fontWeight: '500',
  
  },
  textSubTitle: {
    fontSize: 12,
    fontWeight: '300',
  },
});
export default InfoCircle;
