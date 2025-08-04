import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconPlus = ({
  width = 16,
  height = 17,
  fill = "#BAF7CD",
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
      d="M7.75 2.2a.75.75 0 0 1 .75.75V7.2h4.25a.75.75 0 1 1 0 1.5H8.5v4.25a.75.75 0 1 1-1.5 0V8.7H2.75a.75.75 0 0 1 0-1.5H7V2.95a.75.75 0 0 1 .75-.75Z"
      fill={fill}
    />
  </Svg>
);

export default IconPlus;
