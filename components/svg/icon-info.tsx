import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconInfo = ({ width = 24, height = 24, fill = "#2E1540", ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <Path
      d="M10.5 9.166c.46 0 .833.373.833.834v3.333a.833.833 0 0 1-1.666 0V10c0-.46.373-.834.833-.834ZM10.5 5.833a.833.833 0 0 0 0 1.667h.008a.833.833 0 0 0 0-1.667H10.5Z"
      fill={fill}
    />
   <Path
  d="M1.333 10a9.167 9.167 0 1 1 18.334 0 9.167 9.167 0 0 1-18.334 0ZM10.5 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
  fill={fill}
/>

  </Svg>
);

export default IconInfo;
