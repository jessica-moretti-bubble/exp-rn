import React from "react";
import {
    Defs,
    G,
    LinearGradient,
    Rect,
    Stop,
    Svg,
    SvgProps,
} from "react-native-svg";

const IconManager: React.FC<SvgProps> = (props) => (
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
        y1="45.405"
        y2="55.14"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0" />
        <Stop offset="1" stopColor="#fff" />
      </LinearGradient>

      <LinearGradient
        id="b"
        x1="16"
        x2="16"
        y1="23.14"
        y2="49.54"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </LinearGradient>

      <LinearGradient
        id="d"
        x1="26.209"
        x2="12.669"
        y1="25.837"
        y2="42.004"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3E131E" />
        <Stop offset="0.554" stopColor="#CB40D9" />
        <Stop offset="1" stopColor="#FCA2FC" />
      </LinearGradient>

      <LinearGradient
        id="e"
        x1="18.828"
        x2="18.828"
        y1="23.14"
        y2="38.814"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0.53" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </LinearGradient>
    </Defs>

    <Rect
      width="32.001"
      height="32.001"
      y="23.14"
      rx="7.508"
      transform="rotate(-45 0 23.14)"
      fill="url(#a)"
      fillOpacity="0.15"
    />

    <Rect
      width="31.318"
      height="31.318"
      x="0.483"
      y="23.14"
      rx="7.167"
      stroke="url(#b)"
      strokeOpacity="0.28"
      strokeWidth="0.683"
      transform="rotate(-45 .483 23.14)"
    />

    <G>
      <Rect
        width="18.35"
        height="18.35"
        x="9.652"
        y="23.14"
        rx="3.058"
        fill="url(#d)"
        transform="rotate(-45 9.652 23.14)"
      />
    </G>

    <Rect
      width="18.197"
      height="18.197"
      x="9.761"
      y="23.14"
      rx="2.982"
      stroke="url(#e)"
      strokeWidth="0.153"
      transform="rotate(-45 9.76 23.14)"
    />
  </Svg>
);

export default IconManager;
