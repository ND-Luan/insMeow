import {Text, View, StyleSheet} from 'react-native';
import ButtonFollowing from './ButtonFollowing';
import CircleAvatar from './CircleAvatar';
import InfoCircle from './InfoCircle';
import Media from './Media';
function ItemList({title, subTitle, media, avatar, isBtn, isMedia}) {
  //console.log(media);
  return (
    <View style={styles.container}>
      <CircleAvatar avatar={avatar} />
      <InfoCircle title={title} subTitle={subTitle} />
      {isMedia && <Media media={media} />}
      {isBtn && <ButtonFollowing />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
export default ItemList;
