import React from "react";
import {
    Circle,
    Defs,
    LinearGradient,
    Stop,
    Svg,
    SvgProps,
} from "react-native-svg";

const IconGrayBadge: React.FC<SvgProps> = (props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="a"
        x1={15.453}
        y1={24.256}
        x2={7.884}
        y2={2.909}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#546882" />
        <Stop offset="1" stopColor="#D9ECEF" />
      </LinearGradient>

      <LinearGradient
        id="b"
        x1={23.354}
        y1={24.256}
        x2={0.754}
        y2={24.32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#546882" />
        <Stop offset="1" stopColor="#D9ECEF" />
      </LinearGradient>
    </Defs>

    <Circle
      cx={12}
      cy={12.256}
      r={10.756}
      fill="url(#a)"
      stroke="url(#b)"
      strokeWidth={2.489}
    />
  </Svg>
);

export default IconGrayBadge;
