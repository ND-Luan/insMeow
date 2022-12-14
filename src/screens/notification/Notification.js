import After from '@components/notification/after/After';
import Month from '@components/notification/month/Month';
import RequireFollow from '@components/notification/requirefollow/RequireFollow';
import Suggest from '@components/notification/suggest/Suggest';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Notification() {
  return (
    <View style={styles.container}>
      <RequireFollow />
      <Month />
      <After />
      <Suggest />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default Notification;
