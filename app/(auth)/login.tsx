import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "api/auth/auth.hooks";
import { GenericButton } from "components/shared/button/generic-button";
import { GenericInput } from "components/shared/input/generic-input";
import IconBook from "components/svg/icon-book";
import { useRouter } from 'expo-router';
import { LoginSchema } from "model/schemas/login.schema";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

export default function LoginPage() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();


  const { mutateAsync, isError, error } = useLogin();

  const handleLogin = async (data: { handle: string; password: string }) => {
    await mutateAsync(data);
  };

  const handleRegisterPress = () => {
    router.replace('/(tabs)/jukebox')
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.heading}>Accedi</Text>
        <Text style={styles.subtext}>
          Inserisci i dati utilizzati durante la tua{"\n"}registrazione
        </Text>
      </View>

      <Controller
        control={control}
        name="handle"
        render={({ field }) => (
          <GenericInput
            placeholder="Inserisci la tua email o username"
            svg={<IconBook />}
            value={field.value || ""}
            onChangeText={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <GenericInput
            placeholder="Inserisci la tua password"
            svg={<IconBook />}
            value={field.value || ""}
            onChangeText={field.onChange}
            secureTextEntry
            keyboardType="visible-password"
          />
        )}
      />

      <GenericButton
        label="Continua"
        onPress={handleSubmit(handleLogin)}
        variant="primary-shadow"
        style={{
          maxWidth: 88,
          marginBottom: 16,
        }}
      />

      <Text style={styles.footerText}>
        Non hai un account?
        <Text style={styles.registerText} onPress={handleRegisterPress}>
          Registrati
        </Text>
      </Text>

      {isError && <Text style={styles.errorText}>Errore: {error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 24,
    paddingHorizontal: 32,
    paddingTop: 160,
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
  footerText: {
    color: "#808080",
    fontSize: 14,
  },
  registerText: {
    color: "#BAF7CD",
    fontWeight: "700",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  loadingText: {
    color: "blue",
    fontSize: 14,
  },
});
