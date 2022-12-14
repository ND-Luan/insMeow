import {Context} from '@appContext/AppProvider';
import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ItemList from '../ItemList';
function Month() {
  const context = useContext(Context);
  const title = context.notification.month.post.title;
  const subTitle = context.notification.month.post.subTitle;
  const avatar = context.notification.month.post.avatar;
  const media = context.notification.month.post.media;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tháng này</Text>
      <ItemList
        title={title}
        subTitle={subTitle}
        avatar={avatar}
        media={media}
        isMedia
      />
     
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingTop: 10,
    
  },
  container: {
   
  },
});
export default Month;
