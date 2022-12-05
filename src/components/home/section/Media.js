import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {faVolumeDown, faVolumeHigh} from '@fortawesome/free-solid-svg-icons';

function Media({uriMedia, media}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);
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
            
            onTouchEnd ={()=> setIsPlaying(p => !p)}
            
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
        <FastImage
          style={styles.img}
          source={uriMedia}
          resizeMode={FastImage.resizeMode.cover}
        />
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
});
export default Media;
