import { GenericButton } from "@/components/common/button/generic-button";
import { GenericInput } from "@/components/common/input/generic-input";
import { LoginSchema } from "@/types/model/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLogin } from "src/api/auth/auth.hooks";
import IconUser from "src/components/svg/icon-user";

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();

  const { mutateAsync, isPending } = useLogin();

  const password = watch("password");

  const handle = watch("handle");

  const handleLogin = async (data: { handle: string; password: string }) => {
    try {
      await mutateAsync(data);
    } catch (e) {
      setError("handle", {
        type: "manual",
        message: "Nome utente o email errata.",
      });
      setError("password", {
        type: "manual",
        message: "Password errata.",
      });
    }
  };

  const handleRegisterPress = () => {
    router.replace("/(app)/jukebox");
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
            svg={<IconUser />}
            value={field.value || ""}
            onChangeText={field.onChange}
            error={errors.handle && handle.length ? true : undefined}
          />
        )}
      />
      <View>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <GenericInput
              placeholder="Inserisci la tua password"
              value={field.value || ""}
              onChangeText={field.onChange}
              secureTextEntry
              keyboardType="visible-password"
              error={errors.password && password.length ? true : undefined}
            />
          )}
        />
        {(errors.password || errors.handle) &&
          handle.length &&
          password.length && (
            <View>
              <Text style={styles.errorText}>
                Nome dell’etichetta o email errata.
              </Text>
              <Pressable onPress={() => router.push("/(auth)/password-reset")}>
                <Text style={styles.resetText}>
                  Password dimenticata? Recupera
                </Text>
              </Pressable>
            </View>
          )}
      </View>

      <GenericButton
        label="Continua"
        onPress={handleSubmit(handleLogin)}
        variant="primary-shadow"
        style={{
          maxWidth: 88,
          marginBottom: 16,
        }}
        isLoading={isPending}
      />

      <Text style={styles.footerText}>
        Non hai un account? {" "} 
        <Text style={styles.registerText} onPress={handleRegisterPress}>
          Registrati
        </Text>
      </Text>
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
    marginTop: 8,
  },
  resetText: {
    color: "#808080",
    fontSize: 12,
  },
  loadingText: {
    color: "blue",
    fontSize: 14,
  },
});
