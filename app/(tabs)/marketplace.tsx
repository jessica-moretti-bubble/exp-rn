import { ImageBackground, StyleSheet, Text } from "react-native";
const background = require("../../assets/images/background/bubble-bg.png");

export default function MarketplacePage() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      resizeMode="cover"
    >
      <Text>Marketplace page</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
