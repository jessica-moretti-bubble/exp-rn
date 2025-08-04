import { useState } from "react";

import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import auth from "@react-native-firebase/auth";
import { AuthState } from "model/auth.model";
import AuthWrapper from "./components/auth-wrapper";



interface SignupProperties {
  setAuthView: (authView: AuthState) => void;
}
export function Signup(properties: SignupProperties) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setIsLoading] = useState(false);

  const signUp = async () => {
    setIsLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      properties.setAuthView(AuthState.LOGIN);
      alert("Check your emails!");
    } catch (e: any) {
      const err = e;
      alert("Registration failed: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthWrapper authViewTitle="Registrati">
      <TextInput
        style={styles.input}
        placeholder="Inserisci email"
        placeholderTextColor="white"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Inserisci password"
        placeholderTextColor="white"
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Conferma password"
        placeholderTextColor="white"
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
      />
      {confirmPassword !== password && (
        <Text style={styles.error}>Le password non combaciano</Text>
      )}
      <View style={styles.button}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Crea account"
            color="white"
            disabled={confirmPassword !== password && confirmPassword === ""}
            onPress={signUp}
          />
        )}
      </View>

      <View>
        <Text
          onPress={() => properties.setAuthView(AuthState.LOGIN)}
          style={styles.loginText}
        >
          Vai al login
        </Text>
      </View>
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
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
  },
  loginText: {
    marginTop: 10,
    color: "green",
  },
});
