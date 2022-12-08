import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faVolumeDown,
  faVolumeHigh,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

function Media({uriMedia, media}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);

  const [showHeartMedia, setshowHeartMedia] = React.useState(false);
  const lastTap = React.useRef(0);
  const Heart = () => {
    return (
      <TouchableOpacity
        style={styles.heart}
        onPress={() => {
          const now = Date.now();
          const DELAY = 300;
          if (lastTap.current && now - lastTap.current < DELAY) {
            setshowHeartMedia(!showHeartMedia)
            
          } else {
            lastTap.current = now;
          }
        }}>
        {showHeartMedia && (
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
            paused={!isPlaying}
            muted={isMuted}
            style={styles.video}
            source={uriMedia}
            resizeMode="contain"
            repeat={true}
            onTouchEnd={() => setIsPlaying(p => !p)}
          />

          <TouchableOpacity
            style={styles.btnMute}
            onPress={() => {
              setShowIcon(!showIcon);
              setIsMuted(m => !m);
            }}>
            {showIcon ? (
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
