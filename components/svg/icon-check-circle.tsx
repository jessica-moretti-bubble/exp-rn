import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconCheckCircle = ({
  width = 24,
  height = 24,
  fill = "#BAF7CD", 
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M10.017 3.215a9 9 0 0 1 5.646.558 1 1 0 1 0 .814-1.827A11 11 0 1 0 23 12v-.92a1 1 0 1 0-2 0V12a9 9 0 1 1-10.983-8.785Z"
      fill={fill}
    />
    <Path
      d="M22.707 4.707a1 1 0 0 0-1.415-1.414L12 12.595l-2.293-2.292a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.415 0l10-10.01Z"
      fill={fill}
    />
  </Svg>
);

export default IconCheckCircle;
