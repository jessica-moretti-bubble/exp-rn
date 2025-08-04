import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const background = require("../assets/images/background/bubble-bg.png");

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <Slot /> 
      </ImageBackground>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
