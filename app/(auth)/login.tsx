import { GenericInput } from "components/shared/input/generic-input";
import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "store/auth";

export default function LoginPage() {
  const login = useAuthStore((s) => s.login);

  const handleLogin = async () => {
    const fakeUser = { id: "1", name: "Mario" };
    const fakeToken = "abc123";
    login(fakeUser, fakeToken);
    router.replace("/(tabs)/jukebox");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.heading}>Accedi</Text>
        <Text style={styles.subtext}>
          Inserisci i dati utilizzati durante la tua{"\n"}registrazione
        </Text>
      </View>
      <GenericInput />
      <GenericInput />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: 24,
    paddingHorizontal: 32,
  },
  textGroup: {
    justifyContent: "flex-start",
    rowGap: 8,
  },
  heading: {
    color: "#EEAEF3",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33.6,
  },
  subtext: {
    color: "#808080",
    fontSize: 14,
    lineHeight: 21,
  },
});
