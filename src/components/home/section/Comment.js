import {MoreOrLess} from '@rntext/more-or-less';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';

function Comment({name, likes, content, uriLogo}) {
  const TitleName = (name) =>{
    <Text>{name}</Text>
  }
  return (
    <View style={styles.comment}>
      <Text style={styles.textLikes}>{likes} lượt thích</Text>
      <View>
        <MoreOrLess
          numberOfLines={1}
          textButtonStyle={{textDecorationLine: 'underline'}}
          animated>
          <Text>
            {TitleName(name)}: {content}
          </Text>
        </MoreOrLess>
      </View>
      {/* 
      <View style={styles.spaceBetween}>
        <View style={styles.listInput}>
          <FastImage source={uriLogo} style={styles.logoInput} resizeMode={FastImage.resizeMode.cover}/>
          <TextInput style={styles.input}  placeholder="useless placeholder"/>
        </View>

        <View style={styles.list}>
          <Text>icon</Text>
          <Text>icon</Text>
          <Text>icon</Text>
        </View>
      </View>
  */}
    <Text style={styles.italic}>2 ngày trước</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  comment: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flexDirection: 'row',
  },
  listInput: {
    width: 200,
    flexDirection: 'row',
  },
  textLikes: {
    fontWeight: '600',
  },
  textName: {
    fontWeight: '600',
  },
  showMoreText: {
    textDecorationLine: 'underline',
  },
  logoInput: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
  },
  italic:{
    fontStyle:"italic",
    fontSize:12
  }
});
export default Comment;
