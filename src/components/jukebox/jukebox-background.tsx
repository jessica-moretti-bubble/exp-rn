import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View
} from "react-native";

interface JukeboxBackgroundElementsProps {
  zoomIn: () => void;
  scale: number;
}

export const JukeboxBackground = ({
  zoomIn,
  scale,
}: JukeboxBackgroundElementsProps) => {
  const animatedScale = useRef(new Animated.Value(scale)).current;

  const top = scale === 1 ? 195 : 330;

  const left = scale === 1 ? 10 : 14;

  useEffect(() => {
    Animated.timing(animatedScale, {
      toValue: scale,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scale, animatedScale]);

  return (
    <View style={styles.container}>
    

      <Animated.Image
        source={require("../../assets/images/jukebox/jukebox.png")}
        style={[
          {
            position: "absolute",
            width: 344,
            height: 650,
            top: top,
            left: left,
            transform: [{ scale: animatedScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  zoomButton: {
    position: "absolute",
    top: 200,
    right: 16,
    zIndex: 20,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
 
  jukebox: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -0.5 }],
    width: "100%",
    maxWidth: 700,
    height: 601,
    zIndex: 10,
    alignSelf: "center",
  },
});
