

import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Text, TextStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GradientTextProps {
  text: string;
  textStyle?: TextStyle;
  gradientColors: string[];
  angle: number;
}

export const GradientText = ({
  text,
  textStyle,
  gradientColors,
  angle,
}: GradientTextProps) => {
  const angleRad = (angle * Math.PI) / 180;

  return (
    <MaskedView
      maskElement={
        <Text style={[textStyle, { backgroundColor: "transparent" }]}>{text}</Text>
      }
    >
      <LinearGradient
        colors={gradientColors}
        start={{
          x: 0.5 - Math.cos(angleRad) / 2,
          y: 0.5 - Math.sin(angleRad) / 2,
        }}
        end={{
          x: 0.5 + Math.cos(angleRad) / 2,
          y: 0.5 + Math.sin(angleRad) / 2,
        }}
      >
        <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
