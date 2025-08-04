import { Counter } from "components/shared/input/counter";
import IconClock from "components/svg/icon-clock";
import IconCubble from "components/svg/icon-cubble";
import { Image, StyleSheet, Text, View } from "react-native";

export const SellCardModalContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stai vendendo</Text>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={require("@/assets/images/card/card-common.png")}
          resizeMode="contain"
        />
        <View style={styles.expirationContainer}>
          <IconClock />
          <Text style={styles.expiration}>24h sul Marketplace</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Counter />
        <View style={styles.sellingInfoContainer}>
          <Text style={styles.priceDescriptionText}>
            Prezzo medio di vendita
          </Text>
          <View style={styles.sellingInfoContainer}>
            <IconCubble color="#EEAEF3" />
            <Text style={styles.priceText}>Value</Text>
          </View>

          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 16,
  },
  title: {
    color: "#EEAEF3",
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 33.6,
  },
  cardImage: {
    width: 195,
    height: 275,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 4,
  },
  expirationContainer: {
    flexDirection: "row",
    columnGap: 2,
  },
  expiration: {
    color: "#BAF7CD",
    fontSize: 12,
    fontWeight: 700,
  },
  counterContainer: {
    rowGap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  sellingInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  priceDescriptionText: {
    color: "#808080",
    fontSize: 12,
  },
  priceText: {
    color: "#BAF7CD",
    fontSize: 14,
    fontWeight: 700,
  },
});
