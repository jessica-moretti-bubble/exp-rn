import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconCheck = ({ width = 24, height = 24, fill = "#21423A", ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M21.207 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9.5 15.586 19.793 5.293a1 1 0 0 1 1.414 0Z"
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCheck;
