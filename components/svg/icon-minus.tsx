import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconMinus = ({
  width = 16,
  height = 17,
  stroke = "#BAF7CD",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <Path
      d="M3.333 8.2h9.334"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconMinus;
