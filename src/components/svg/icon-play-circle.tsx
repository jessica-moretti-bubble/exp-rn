import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconPlayCircle = ({
  width = 32,
  height = 32,
  fill = "#fff", 
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.073 9.558A1.333 1.333 0 0 0 12 10.668v10.666a1.334 1.334 0 0 0 2.073 1.11l8-5.334a1.333 1.333 0 0 0 0-2.219l-8-5.333ZM18.93 16l-4.263 2.842v-5.684L18.93 16Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 1.334C7.9 1.334 1.333 7.9 1.333 16.001 1.333 24.1 7.9 30.667 16 30.667s14.667-6.566 14.667-14.666C30.667 7.9 24.1 1.334 16 1.334ZM4 16.001C4 9.373 9.373 4 16 4c6.628 0 12 5.372 12 12 0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12Z"
    />
  </Svg>
);

export default IconPlayCircle;
