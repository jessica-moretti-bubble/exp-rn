import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GenericProgressBarProps {
  progress: number;
}

export const GenericProgressBar = ({ progress }: GenericProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <LinearGradient
          colors={["#90D3AE", "#BAF7CD"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={[styles.fill, { width: `${progress * 100}%` }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  track: {
    flex: 1,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  fill: {
    height: "100%",
  },
});
