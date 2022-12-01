import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  faHeart as heartFull,
  faBookmark as saveFull,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as heartRegular,
  faMessage,
  faPaperPlane,
  faBookmark as saveRegular,
} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';

function InteractionIcon() {
  const [showHeart, setShowHeart] = useState(false);
  const [showMessage, setShowMessage] = useState();
  const [showSend, setShowSend] = useState();
  const [showSave, setShowSave] = useState(false);
  return (
    <View style={styles.imgIcon}>
      <View style={styles.imgIconList}>
        <TouchableOpacity onPress={() => setShowHeart(!showHeart)}>
          {showHeart ? (
            <FontAwesomeIcon icon={heartFull} size={25} />
          ) : (
            <FontAwesomeIcon icon={heartRegular} size={25} />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesomeIcon icon={faMessage} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPaperPlane} size={25} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setShowSave(!showSave)}>
        {showSave ? (
          <FontAwesomeIcon icon={saveFull} size={25} color={'#e6cc00'} />
        ) : (
          <FontAwesomeIcon icon={saveRegular} size={25} />
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  imgIcon: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  imgIconList: {
    width: 125,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default InteractionIcon;
