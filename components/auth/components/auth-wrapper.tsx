import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface AuthWrapperInterface {
  children: ReactNode;
  authViewTitle: string
}

export default function AuthWrapper({ children, authViewTitle }: AuthWrapperInterface) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{authViewTitle}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "700",
    marginBottom: 32,
  },
});
