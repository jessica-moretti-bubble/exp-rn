import { ImageBackground, StyleSheet, Text } from "react-native";
const background = require("../../assets/images/background/bubble-bg.png");

export default function RosterPage() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      resizeMode="cover"
    >
      <Text>Roster page</Text>
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
