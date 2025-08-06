import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconMinus from "src/components/svg/icon-minus";
import IconPlus from "src/components/svg/icon-plus";

export const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={decrement}>
        <IconMinus />
      </Pressable>
      <Text style={styles.counterValue}>{quantity}</Text>
      <Pressable onPress={increment}>
        <IconPlus />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#808080",
    width: 160,
    height: 56,
  },

  counterValue: {
    color: "#EEAEF3",
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
