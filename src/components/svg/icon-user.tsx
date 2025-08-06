import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconUser = ({
  width = 24,
  height = 24,
  fill = "gray",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12.5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M8.5 14a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5h-8Z"
    />
  </Svg>
);

export default IconUser;
