import React from "react";
import {
    Defs,
    G,
    LinearGradient,
    RadialGradient,
    Rect,
    Stop,
    Svg,
    SvgProps,
} from "react-native-svg";

const IconDirector: React.FC<SvgProps> = (props) => (
  <Svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="a"
        x1="16"
        x2="16"
        y1="45.532"
        y2="55.267"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0" />
        <Stop offset="1" stopColor="#fff" />
      </LinearGradient>

      <LinearGradient
        id="b"
        x1="16"
        x2="16"
        y1="23.267"
        y2="49.667"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </LinearGradient>

      <LinearGradient
        id="d"
        x1="24.332"
        x2="12.252"
        y1="25.102"
        y2="43.222"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2E2925" />
        <Stop offset="0.489" stopColor="#BF5E34" />
        <Stop offset="0.69" stopColor="#F07635" />
        <Stop offset="1" stopColor="#EFAD7D" />
      </LinearGradient>

      <LinearGradient
        id="f"
        x1="18.828"
        x2="18.828"
        y1="23.267"
        y2="38.941"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0.53" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </LinearGradient>

      <RadialGradient
        id="e"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-58.392 42.676 11.077) scale(9.33669)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </RadialGradient>
    </Defs>

    <Rect
      width="32.001"
      height="32.001"
      y="23.267"
      rx="7.508"
      transform="rotate(-45 0 23.267)"
      fill="url(#a)"
      fillOpacity="0.15"
    />

    <Rect
      width="31.318"
      height="31.318"
      x="0.483"
      y="23.267"
      rx="7.167"
      stroke="url(#b)"
      strokeOpacity="0.28"
      strokeWidth="0.683"
      transform="rotate(-45 .483 23.267)"
    />

    <G transform="rotate(-45 9.652 23.267)">
      <Rect
        width="18.35"
        height="18.35"
        x="9.652"
        y="23.267"
        rx="3.058"
        fill="url(#d)"
      />
      <Rect
        width="18.35"
        height="18.35"
        x="9.652"
        y="23.267"
        rx="3.058"
        fill="url(#e)"
        fillOpacity="0.6"
      />
    </G>

    <Rect
      width="18.197"
      height="18.197"
      x="9.761"
      y="23.267"
      rx="2.982"
      stroke="url(#f)"
      strokeWidth="0.153"
      transform="rotate(-45 9.76 23.267)"
    />
  </Svg>
);

export default IconDirector;
