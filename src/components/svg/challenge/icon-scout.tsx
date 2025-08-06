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

const IconScout: React.FC<SvgProps> = (props) => (
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
        y1="45.149"
        y2="54.884"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0" />
        <Stop offset="1" stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1="16"
        x2="16"
        y1="22.884"
        y2="49.284"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1="26.168"
        x2="13.705"
        y1="25.483"
        y2="39.628"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#20171A" />
        <Stop offset="0.315" stopColor="#24713E" />
        <Stop offset="0.73" stopColor="#29BDAB" />
        <Stop offset="1" stopColor="#517FA9" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1="18.828"
        x2="18.828"
        y1="22.884"
        y2="38.558"
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
        gradientTransform="rotate(-138.071 21.442 15.428) scale(11.0991)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity="0.7" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </RadialGradient>
    </Defs>

    <Rect
      width="32.001"
      height="32.001"
      y="22.884"
      rx="7.508"
      transform="rotate(-45 0 22.884)"
      fill="url(#a)"
      fillOpacity="0.15"
    />

    <Rect
      width="31.318"
      height="31.318"
      x="0.483"
      y="22.884"
      rx="7.167"
      stroke="url(#b)"
      strokeOpacity="0.28"
      strokeWidth="0.683"
      transform="rotate(-45 .483 22.884)"
    />

    <G transform="rotate(-45 9.652 22.884)">
      <Rect
        width="18.35"
        height="18.35"
        x="9.652"
        y="22.884"
        rx="3.058"
        fill="url(#d)"
      />
      <Rect
        width="18.35"
        height="18.35"
        x="9.652"
        y="22.884"
        rx="3.058"
        fill="url(#e)"
        fillOpacity="0.6"
      />
    </G>

    <Rect
      width="18.197"
      height="18.197"
      x="9.761"
      y="22.884"
      rx="2.982"
      stroke="url(#f)"
      strokeWidth="0.153"
      transform="rotate(-45 9.76 22.884)"
    />
  </Svg>
);

export default IconScout;
