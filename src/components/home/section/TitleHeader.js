import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import MenuPopUpMenu from './popupmenu/PopupMenu';
function TitleHeader({name, uriLogo}) {
  return (
    <View style={styles.row}>
      <View style={styles.leftAvatar}>
        <FastImage
          style={styles.img}
          source={uriLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.textName}>{name}</Text>
      </View>

      <View style={styles.rightIcon}>
        <MenuPopUpMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  leftAvatar: {
    width: 120,
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    flex: 1,
    top: 6,
  },

  textName: {
    fontSize: 15,
    paddingLeft: 10,
  },
});
export default TitleHeader;
