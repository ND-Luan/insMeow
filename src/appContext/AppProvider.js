import React, {useState, createContext, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {faUser} from '@fortawesome/free-regular-svg-icons';
export const Context = createContext();
function AppProvider({children}) {
  //state InteractionIcon
  const [showHeart, setShowHeart] = useState(false);
  const funcsetShowHeart = () => {
    setShowHeart(!showHeart);
  };
  const likeCurrent = useRef(0);
  const [like, setLike] = useState(0);
  const funcsetLike = () => {
    setLike(likeCurrent.current + 1);
  };

  //state Media
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [showIconLike, setShowIconLike] = React.useState(false);

  const [showHeartMedia, setshowHeartMedia] = React.useState(false);
  const lastTap = React.useRef(0);
  const doubleTap = () => {
    const now = Date.now();
    const DELAY = 300;
    if (lastTap.current && now - lastTap.current < DELAY) {
      setshowHeartMedia(!showHeartMedia);
      setShowHeart(!showHeart);
      setLike(likeCurrent.current + 1);
    } else {
      lastTap.current = now;
    }
  };
  const funcsetIsPlaying = () => {
    setIsPlaying(p => !p);
  };
  const funcsetShowIconLike = () => {
    return setShowIconLike(!showIconLike);
  };
  const funcsetIsMuted = () => {
    console.log('Muted!');
    return setIsMuted(m => !m);
  };

  //Notifiction
  //Yêu cầu theo dõi
  const title = 'Yêu cầu theo dõi';
  const subTitle = 'Phê duyệt hoặc bỏ qua yêu cầu';
  const media = () => {
    return <FontAwesomeIcon icon={faUser} size={20} />;
  };
  const value = {
    like,
    funcsetLike,
    showHeart,
    funcsetShowHeart,
    isMuted,
    funcsetIsPlaying,
    funcsetIsMuted,
    funcsetShowIconLike,
    isPlaying,
    showIconLike,
    showHeartMedia,
    doubleTap,
    notification: {
      requireFollow: {
        title: title,
        subTitle: subTitle,
        media: media(),
      },
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default AppProvider;
