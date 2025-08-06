import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const IconUsers = ({
  width = 21,
  height = 20,
  fill = "#BAF7CD",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip)">
      <Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.333 1.666a4.167 4.167 0 1 0 0 8.333 4.167 4.167 0 0 0 0-8.333Zm-2.5 4.167a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      />
      <Path
        fill={fill}
        d="M5 11.666a4.167 4.167 0 0 0-4.167 4.167v1.666a.833.833 0 1 0 1.667 0v-1.666a2.5 2.5 0 0 1 2.5-2.5h6.667a2.5 2.5 0 0 1 2.5 2.5v1.666a.833.833 0 1 0 1.666 0v-1.666a4.167 4.167 0 0 0-4.166-4.167H5ZM16.693 12.4a.833.833 0 0 1 1.015-.6 4.167 4.167 0 0 1 3.125 4.032V17.5a.833.833 0 0 1-1.666 0v-1.666a2.501 2.501 0 0 0-1.875-2.418.833.833 0 0 1-.599-1.016ZM14.373 1.8a.833.833 0 1 0-.413 1.615 2.5 2.5 0 0 1 0 4.844.833.833 0 1 0 .413 1.614 4.167 4.167 0 0 0 0-8.073Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip">
        <Rect width="20" height="20" x="0.833" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IconUsers;
