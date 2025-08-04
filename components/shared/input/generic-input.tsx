import IconBook from "components/svg/icon-book";
import { StyleSheet, TextInput, View } from "react-native";

export const GenericInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Email o username"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <IconBook />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",

    borderRadius: 8,
    borderWidth: 2,
    borderColor: "rgba(128, 128, 128, 0.5)",
    backgroundColor: "rgba(128, 128, 128, 0.2)",

    overflow: "hidden",
  },
  input: {
    flex: 1,
    color: "#fff",
  },
});
