import {Context} from '@appContext/AppProvider';
import {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ItemList from '../ItemList';

function RequireFollow() {
  const context = useContext(Context);
  const title = context.notification.requireFollow.title;
  const subTitle = context.notification.requireFollow.subTitle;
  const avatar = context.notification.requireFollow.avatar;
  console.log(title);
  return <ItemList title={title} subTitle={subTitle} avatar={avatar} isMedia/>;
}
const styles = StyleSheet.create({});
export default RequireFollow;
