import React, {useState, createContext, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {faUser, faAddressBook} from '@fortawesome/free-regular-svg-icons';
import {faInfo, faAdd} from '@fortawesome/free-solid-svg-icons';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import IMGAFTER from '@constants/imgAfterNofication';
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
  const titleRequireFollow = 'Yêu cầu theo dõi';
  const subTitleRequireFollow = 'Phê duyệt hoặc bỏ qua yêu cầu';
  const mediaRequireFollow = () => {
    return <FontAwesomeIcon icon={faUser} size={20} />;
  };
  //Tháng này
  //Post1
  const titleMonthPost =
    'Một thiết bị Windows PC lạ vừa đăng nhập gần Biên Hòa, VN';
  const subTitleMonthPost = '4 tuần trước';
  const avatarMonthPost = () => {
    return <FontAwesomeIcon icon={faInfo} size={20} />;
  };

  const mediaMonthPost = require('../assets/notification/media.png');
  //Trước đó
  //Post1
  const titleAfterPost1 = 'Cat_1 đã bắt đầu theo dõi bạn';
  const subTitleAfterPost1 = '6 tuần trước';
  const avatarAfterPost1 = () => {
    return (
      <FastImage
        source={IMGAFTER.img1.avatar}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.circle}
      />
    );
  };
  const mediaAfterPost1 = IMGAFTER.img1.media;
  //Post2
  const titleAfterPost2 = 'Cat_2, Cat_3 đã thích ảnh của bạn';
  const subTitleAfterPost2 = '6 tuần trước';
  const avatarAfterPost2 = () => {
    return (
      <FastImage
        source={IMGAFTER.img2.avatar}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.circle}
      />
    );
  };
  const mediaAfterPost2 = IMGAFTER.img2.media;
  //Post3
  const titleAfterPost3 = 'Cat_3, Cat_4 đã thích tin của bạn';
  const subTitleAfterPost3 = '7 tuần trước';
  const avatarAfterPost3 = () => {
    return (
      <FastImage
        source={IMGAFTER.img3.avatar}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.circle}
      />
    );
  };
  const mediaAfterPost3 = IMGAFTER.img3.media;
  //Post4
  const titleAfterPost4 = 'Cat_4 đã bắt đầu theo dõi bạn';
  const subTitleAfterPost4 = '9 tuần trước';
  const avatarAfterPost4 = () => {
    return (
      <FastImage
        source={IMGAFTER.img4.avatar}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.circle}
      />
    );
  };
  const mediaAfterPost4 = IMGAFTER.img4.media;

  //Self
  //DropdownHeader
  const titleDropDownHeader = 'Myself';
  const avatarDropDownHeader = () => {
    return (
      <FastImage
        source={require('../assets/self/avatarDropdownHeader.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.circleDropDown}
      />
    );
  };
  const addAccount = 'Thêm tài khoản';
  const avatarAddAccount = () => {
    return <FontAwesomeIcon icon={faAdd} size={20} />;
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
        title: titleRequireFollow,
        subTitle: subTitleRequireFollow,
        avatar: mediaRequireFollow(),
      },
      month: {
        post: {
          title: titleMonthPost,
          subTitle: subTitleMonthPost,
          avatar: avatarMonthPost(),
          media: mediaMonthPost,
        },
      },
      after: {
        post1: {
          title: titleAfterPost1,
          subTitle: subTitleAfterPost1,
          avatar: avatarAfterPost1(),
          media: mediaAfterPost1,
        },
        post2: {
          title: titleAfterPost2,
          subTitle: subTitleAfterPost2,
          avatar: avatarAfterPost2(),
          media: mediaAfterPost2,
        },
        post3: {
          title: titleAfterPost3,
          subTitle: subTitleAfterPost3,
          avatar: avatarAfterPost3(),
          media: mediaAfterPost3,
        },
        post4: {
          title: titleAfterPost4,
          subTitle: subTitleAfterPost4,
          avatar: avatarAfterPost4(),
          media: mediaAfterPost4,
        },
      },
    },
    self: {
      dropdownHeader: {
        titleSelf: {
          title: titleDropDownHeader,
          avatar: avatarDropDownHeader(),
        },
        addAccount: {
          title: addAccount,
          avatar: avatarAddAccount(),
        },
      },
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 60 / 2,
  },
  circleDropDown: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
});
export default AppProvider;
