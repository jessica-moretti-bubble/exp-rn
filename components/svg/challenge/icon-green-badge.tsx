import React from "react";
import {
    Circle,
    Defs,
    LinearGradient,
    Stop,
    Svg,
    SvgProps,
} from "react-native-svg";

const IconGreenBadge: React.FC<SvgProps> = (props) => (
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
        y1={24.512}
        x2={7.884}
        y2={3.165}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#257F52" />
        <Stop offset="1" stopColor="#54C7BB" />
      </LinearGradient>

      <LinearGradient
        id="b"
        x1={23.354}
        y1={24.512}
        x2={0.754}
        y2={24.575}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#257F52" />
        <Stop offset="1" stopColor="#54C7BB" />
      </LinearGradient>
    </Defs>

    <Circle
      cx={12}
      cy={12.512}
      r={10.756}
      fill="url(#a)"
      stroke="url(#b)"
      strokeWidth={2.489}
    />
  </Svg>
);

export default IconGreenBadge;
