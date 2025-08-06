import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const vinylImages = [
  require("../../assets/images/jukebox/common-vinyl.png"),
  require("../../assets/images/jukebox/gold-vinyl.png"),
  require("../../assets/images/jukebox/platinum-vinyl.png"),
];

const POSITIONS = [
  { x: -65, y: 30, scale: 1, zIndex: 1 },
  { x: 3, y: -5, scale: 1.3, zIndex: 2 },
  { x: 70, y: 30, scale: 1, zIndex: 1 },
];

interface JukeboxVinylsSliderProperties {
  scale: number;
}

export const JukeboxVinylsSlider = ({
  scale,
}: JukeboxVinylsSliderProperties) => {
  const [vinyls, setVinyls] = useState([
    {
      id: "common",
      source: vinylImages[0],
      x: new Animated.Value(POSITIONS[0].x),
      y: new Animated.Value(POSITIONS[0].y),
      scale: new Animated.Value(POSITIONS[0].scale),
      position: 0,
    },
    {
      id: "gold",
      source: vinylImages[1],
      x: new Animated.Value(POSITIONS[1].x),
      y: new Animated.Value(POSITIONS[1].y),
      scale: new Animated.Value(POSITIONS[1].scale),
      position: 1,
    },
    {
      id: "platinum",
      source: vinylImages[2],
      x: new Animated.Value(POSITIONS[2].x),
      y: new Animated.Value(POSITIONS[2].y),
      scale: new Animated.Value(POSITIONS[2].scale),
      position: 2,
    },
  ]);

  const animatedScale = useRef(new Animated.Value(scale)).current;

  useEffect(() => {
    Animated.timing(animatedScale, {
      toValue: scale,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const rotate = (direction: "left" | "right") => {
    const nextVinyls = [...vinyls];

    if (direction === "left") {
      nextVinyls.push(nextVinyls.shift()!);
    } else {
      nextVinyls.unshift(nextVinyls.pop()!);
    }

    nextVinyls.forEach((vinyl, i) => {
      Animated.parallel([
        Animated.timing(vinyl.x, {
          toValue: POSITIONS[i].x,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(vinyl.y, {
          toValue: POSITIONS[i].y,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(vinyl.scale, {
          toValue: POSITIONS[i].scale,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });

    setVinyls(nextVinyls);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ scale: animatedScale }],
        }}
      >
      <View style={styles.clipMask}>
        {vinyls.map((vinyl, index) => (
          <Animated.View
            key={vinyl.id}
            style={[
              styles.vinylWrapper,
              {
                zIndex: POSITIONS[index].zIndex,
                transform: [
                  { translateX: vinyl.x },
                  { translateY: vinyl.y },
                  { scale: vinyl.scale },
                ],
              },
            ]}
          >
            <Image source={vinyl.source} style={styles.vinyl} />
          </Animated.View>
        ))}
      </View>
      <View style={[styles.buttonsRow, {
        bottom: scale === 1 ? -110 : -97
      }]}>
        <TouchableOpacity style={styles.button} onPress={() => rotate("left")}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => rotate("right")}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>
      </Animated.View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 60,
    position: "absolute",
    top: 290,
    right: 105,
  },
  clipMask: {
    width: 160,
    height: 70,
    overflow: "hidden",
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
   // borderColor: 'red',
   // borderWidth: 1
  },
  vinylWrapper: {
    position: "absolute",
    top: 13,
    left: "50%",
    marginLeft: -30,
  },
  vinyl: {
    width: 52,
    height: 52,
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 20,
    position: "absolute",
    right: -13,
    columnGap: 90
  },
  button: {
    backgroundColor: "#ff00aa",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 999,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
