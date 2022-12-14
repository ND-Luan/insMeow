import {Context} from '@appContext/AppProvider';
import IMGAFTER from '@constants/imgAfterNofication';
import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ItemList from '../ItemList';
function After() {
  const context = useContext(Context);
  //Post1
  const title1 = context.notification.after.post1.title;
  const subTitle1 = context.notification.after.post1.subTitle;
  const avatar1 = context.notification.after.post1.avatar;
  //Post2
  const title2 = context.notification.after.post2.title;
  const subTitle2 = context.notification.after.post2.subTitle;
  const avatar2 = context.notification.after.post2.avatar;
  const media2 = context.notification.after.post2.media;
  //Post3
  const title3 = context.notification.after.post3.title;
  const subTitle3 = context.notification.after.post3.subTitle;
  const avatar3 = context.notification.after.post3.avatar;
  const media3 = context.notification.after.post3.media;
  //Post4
  const title4 = context.notification.after.post4.title;
  const subTitle4 = context.notification.after.post4.subTitle;
  const avatar4 = context.notification.after.post4.avatar;
  const media4 = context.notification.after.post4.media;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trước đó</Text>
      <ItemList title={title1} subTitle={subTitle1} avatar={avatar1} isBtn />
      <ItemList
        title={title2}
        subTitle={subTitle2}
        avatar={avatar2}
        media={media2}
        isMedia
      />
      <ItemList
        title={title3}
        subTitle={subTitle3}
        avatar={avatar3}
        media={media3}
        isMedia
      />
      <ItemList title={title4} subTitle={subTitle4} avatar={avatar4} isBtn />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingTop: 10,
  },
});
export default After;
