import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconRepeat = ({
  width = 21,
  height = 20,
  fill = "gray",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <Path
      d="M15.256.244a.833.833 0 1 0-1.179 1.179l1.911 1.91H6.333A4.167 4.167 0 0 0 2.167 7.5v1.667a.833.833 0 0 0 1.666 0V7.5a2.5 2.5 0 0 1 2.5-2.5h9.655l-1.91 1.91a.833.833 0 0 0 1.178 1.18l3.333-3.334a.833.833 0 0 0 0-1.179L15.256.244ZM6.923 11.91a.833.833 0 0 1 0 1.18L5.012 15h9.655a2.5 2.5 0 0 0 2.5-2.5v-1.667a.833.833 0 0 1 1.666 0V12.5a4.167 4.167 0 0 1-4.166 4.167H5.012l1.91 1.91a.833.833 0 1 1-1.178 1.179l-3.333-3.333a.833.833 0 0 1 0-1.179l3.333-3.333a.833.833 0 0 1 1.179 0Z"
      fill={fill}
    />
  </Svg>
);

export default IconRepeat;
