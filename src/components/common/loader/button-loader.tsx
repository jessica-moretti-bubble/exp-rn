import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ButtonVariant } from '../button/generic-button';

interface ButtonLoaderProps {
  positionStyle?: object;
  type?: ButtonVariant;
}

const getColor = (type: string) => {
  switch (type) {
    case 'secondary':
      return '#542774';
    case 'primary':
    case 'primary-shadow':
      return '#808080';
    default:
      return '#808080';
  }
};

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  positionStyle,
  type = 'default',
}) => {
  const delays = [0, 135, 270];
  const dotColor = getColor(type);

  return (
    <View style={[styles.container, positionStyle]}>
      {delays.map((delay, i) => (
        <LoaderDot key={i} delay={delay} color={dotColor} />
      ))}
    </View>
  );
};

const LoaderDot = ({ delay, color }: { delay: number; color: string }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 0.5, 1], [1, 1.4, 1]);
    return {
      transform: [{ scale }],
      backgroundColor: color,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const DOT_SIZE = 16;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    transform: [{ scale: 0.5625 }],
    gap: 10,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2, 
    backgroundColor: '#808080',
    marginHorizontal: 5,
  },
});
