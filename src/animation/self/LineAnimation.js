import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

function LineAnimation() {
  const motion = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(motion, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.ease,
    });
  }, []);

  return <Animated.View></Animated.View>;
}
export default LineAnimation;
