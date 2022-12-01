import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import IMGSECTION from '@constants/imgSection';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
      <Text style={styles.rightIcon}>
        <FontAwesomeIcon style={styles.icon} icon={faEllipsisVertical} size={20}/>
      </Text>
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
    top:6
  },

  icon: {
    alignSelf: 'center',
  },
  textName: {
    fontSize: 15,
    paddingLeft: 10,
  },
});
export default TitleHeader;
