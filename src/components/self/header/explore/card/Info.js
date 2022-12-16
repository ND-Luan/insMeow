import {StyleSheet, View, Text} from 'react-native';

function Info({name}) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text style={{fontSize:12}}>Có vài người theo dõi</Text>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:"center"
  },
});
export default Info;
