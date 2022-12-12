import {Context} from '@appContext/AppProvider';
import {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ItemList from '../ItemList';

function RequireFollow() {
  const context = useContext(Context);
  const title = context.notification.requireFollow.title;
  const subTitle = context.notification.requireFollow.subTitle;
  const media = context.notification.requireFollow.media;
  console.log(media);
  return <ItemList title={title} subTitle={subTitle} chilren={media} />;
}
const styles = StyleSheet.create({});
export default RequireFollow;
