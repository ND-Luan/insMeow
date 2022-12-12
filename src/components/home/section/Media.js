import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faVolumeDown,
  faVolumeHigh,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {Context} from '@appContext/AppProvider';

function Media({uriMedia, media}) {
  const context = React.useContext(Context);
  const Heart = () => {
    return (
      <TouchableOpacity style={styles.heart} onPress={context.doubleTap}>
        {context.showHeartMedia && (
          <FontAwesomeIcon icon={faHeart} color={'red'} size={60} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {media == 'video' ? (
        <View style={{flex: 1}}>
          <Video
            paused={!context.isPlaying}
            muted={context.isMuted}
            style={styles.video}
            source={uriMedia}
            resizeMode="contain"
            repeat={true}
            onTouchEnd={context.funcsetIsPlaying}
          />

          <TouchableOpacity
            style={styles.btnMute}
            onPress={() => {
              context.funcsetShowIconLike();

              context.funcsetIsMuted();
            }}>
            {context.showIconLike ? (
              <FontAwesomeIcon icon={faVolumeDown} size={17} />
            ) : (
              <FontAwesomeIcon icon={faVolumeHigh} size={17} />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <FastImage
            style={styles.img}
            source={uriMedia}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Heart />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 500,
    marginVertical: 10,
  },
  video: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  btnMute: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  btnPlay: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 140,
  },
  heart: {
    position: 'absolute',

    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Media;
