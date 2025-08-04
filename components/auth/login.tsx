import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import AuthWrapper from "./components/auth-wrapper";

export default function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  function handleAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (!initializing && user) {
      router.push("./home");
    }
  }, [initializing, user]);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      console.error("Errore durante il login:", error);
      Alert.alert("Errore di accesso", "Email o password non validi.");
    } finally {
      setIsLoading(false);
    }
  };

  if (initializing || user) return null;

  return (
    <AuthWrapper authViewTitle="Accedi">
      <TextInput
        style={styles.input}
        placeholder="Inserisci email"
        placeholderTextColor="white"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Inserisci password"
        placeholderTextColor="white"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.button}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Accedi"
            color="white"
            disabled={email === "" || password === ""}
            onPress={handleLogin}
          />
        )}
      </View>
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 16,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    borderStyle: "solid",
    marginBottom: 16,
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    width: "50%",
    alignSelf: "center",
  },
});
