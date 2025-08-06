import { Card } from "@/types/model/jukebox.model";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, {
    Easing,
    Extrapolation,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import {
    getBackImage,
    getFrontImage,
} from "src/config/jukebox-animated-cards.config";

interface AnimatedCardProps {
  card: Card;
  isTopCard: boolean;
  positionIndex: number;
  onFlipComplete: () => void;
}

const CARD_SIZES = [
  { width: 298.5, height: 448.5 },
  { width: 234, height: 330.24 },
  { width: 195, height: 275.2 },
];

export const AnimatedCard = ({
  card,
  isTopCard,
  positionIndex,
  onFlipComplete,
}: AnimatedCardProps) => {
  const spin = useSharedValue(0);
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isTopCard) {
      rotation.value = 0;
      spin.value = 0;
      setFlipped(false);
    }
  }, [isTopCard]);

  const handlePress = () => {
    if (!isTopCard || flipped) return;

    spin.value = withTiming(
      1080,
      { duration: 500, easing: Easing.linear },
      (finished) => {
        if (finished) {
          spin.value = 0;
          rotation.value = withTiming(
            180,
            { duration: 300, easing: Easing.out(Easing.quad) },
            (flipFinished) => {
              if (flipFinished) {
                runOnJS(setFlipped)(true);
                runOnJS(onFlipComplete)();
              }
            }
          );
        }
      }
    );
  };

  const getCardTop = (index: number) => {
    if (index === 0) return 0;
    return -15 * index;
  };

  const { width, height } =
    CARD_SIZES[Math.min(positionIndex, CARD_SIZES.length - 1)];

  const transformStyle = useAnimatedStyle(() => {
    const rotate = spin.value + rotation.value;

    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${rotate}deg` },
        ...(isTopCard
          ? []
          : [
              {
                scale: interpolate(
                  positionIndex,
                  [1, 2, 3],
                  [0.97, 0.94, 0.91],
                  Extrapolation.CLAMP
                ),
              },
            ]),
      ],
      zIndex: 100 - positionIndex,
    };
  });

  const frontStyle = useAnimatedStyle(() => ({
    opacity: (spin.value + rotation.value) % 360 >= 90 ? 1 : 0,
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: (spin.value + rotation.value) % 360 < 90 ? 1 : 0,
  }));

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[
          { width, height, top: getCardTop(positionIndex) },
          styles.cardContainer,
          transformStyle,
        ]}
      >
        <Animated.View style={[styles.cardFace, backStyle]}>
          <Image
            source={getBackImage(card.rarity)}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View
          style={[styles.cardFace, StyleSheet.absoluteFillObject, frontStyle]}
        >
          <Image
            source={getFrontImage(card.rarity)}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    top: 120,
  },
  cardContainer: {
    position: "absolute",
    alignSelf: "center",
  },
  cardFace: {
    ...StyleSheet.absoluteFillObject,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});
