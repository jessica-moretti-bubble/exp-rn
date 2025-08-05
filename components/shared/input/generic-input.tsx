import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface GenericInputProperties extends TextInputProps {
  svg: React.ReactNode;
}

export const GenericInput = (properties: GenericInputProperties) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={properties.placeholder}
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        secureTextEntry={properties.secureTextEntry}
        keyboardType={properties.keyboardType}
        value={properties.value}  // Imposta il valore
        onChangeText={properties.onChangeText}  // Gestisce l'aggiornamento
      />
      {properties.svg}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 12,
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
