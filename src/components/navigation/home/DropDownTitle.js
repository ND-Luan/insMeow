import {StyleSheet, View, Text} from 'react-native';

import {faUserGroup, faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function DropDownTitle() {
  return (
    <View style={styles.containter}>
      <View style={styles.following}>
        <Text style={styles.textFollowing}>Đang theo dõi</Text>
        <FontAwesomeIcon icon={faUserGroup} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.favourite}>
        <Text style={styles.textFavourite}>Yêu thích</Text>
        <FontAwesomeIcon icon={faHeart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    position: 'absolute',
    width: 180,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    top: 45,
    left: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,

    flex: 1,
    flexDirection: 'column',
  },
  /*
  line:{
    width:"100%",
    height:0.5,
    backgroundColor:"gray",
    opacity:0.4
    
  },
  */
  following: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  favourite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  textFollowing:{
    fontSize:16,
    
  },
  textFavourite:{
    fontSize:16,
  },
});
export default DropDownTitle;
