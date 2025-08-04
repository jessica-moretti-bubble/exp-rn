import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconXCircle = ({
  width = 24,
  height = 24,
  fill = "#EF6464",
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
      fill="#EF6464"
      d="M15.707 8.293a1 1 0 0 1 0 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.414 0Z"
    />
    <Path
      fill="#EF6464"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconXCircle;
