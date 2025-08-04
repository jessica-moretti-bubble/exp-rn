import { ImageBackground, StyleSheet, Text } from "react-native";
const background = require("../../assets/images/background/bubble-bg.png");

export default function MajorPage() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.text}>Major Page</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

