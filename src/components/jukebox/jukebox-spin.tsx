import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";
import { JukeboxButtons } from "./jukebox-buttons";
import { WinningCardsModal } from "./modals/winning-cards-modal";

const cardImage = require("../../assets/images/shared/card-back-common.png");

const CARD_WIDTH = 24.4;
const CARD_HEIGHT = 34.5;
const TOTAL_SPIN_ITEMS = 10;

interface JukeboxSpinProperties {
  scale: number;
}

export const JukeboxSpin = ({ scale }: JukeboxSpinProperties) => {
  const slots = Array.from({ length: 5 });
  const animatedValues = useRef(slots.map(() => new Animated.Value(0))).current;
  const animatedScale = useRef(new Animated.Value(scale)).current;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Animated.timing(animatedScale, {
      toValue: scale,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const spin = () => {
    let completedAnimations = 0;

    animatedValues.forEach((anim, index) => {
      anim.setValue(0);
      Animated.timing(anim, {
        toValue: -CARD_HEIGHT * (TOTAL_SPIN_ITEMS - 1),
        duration: 2000 + index * 200,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start(() => {
        completedAnimations += 1;
        if (completedAnimations === animatedValues.length) {
          setModalVisible(true);
        }
      });
    });
  };

  return (
    <>
      <Animated.View
        style={[
          styles.wrapper,
          {
            transform: [{ scale: animatedScale }],
            top: scale === 1 ? "52%" : "60%",
          },
        ]}
      >
        <View style={styles.slotContainer}>
          {animatedValues.map((animatedValue, slotIndex) => (
            <View key={slotIndex} style={styles.mask}>
              <Animated.View
                style={{
                  transform: [{ translateY: animatedValue }],
                }}
              >
                {Array.from({ length: TOTAL_SPIN_ITEMS }).map((_, i) => (
                  <Image
                    key={i}
                    source={cardImage}
                    style={styles.card}
                    resizeMode="contain"
                  />
                ))}
              </Animated.View>
            </View>
          ))}
        </View>
        <JukeboxButtons spin={spin} purchase={() => {}} />
      </Animated.View>

      <WinningCardsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    position: "absolute",
    left: "10%",
    width: 300,
  },
  slotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  mask: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 2,
    overflow: "hidden",
    marginHorizontal: 3,
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 2,
  },
});
