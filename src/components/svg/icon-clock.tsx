import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const IconClock = ({
  width = 17,
  height = 17,
  fill = "#BAF7CD",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <Defs>
      <ClipPath id="clip0">
        <Rect x={0.5} y={0.2} width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0)" fill={fill}>
      <Path d="M9.167 4.2a.667.667 0 0 0-1.334 0v4c0 .252.143.483.369.596l2.667 1.333a.667.667 0 0 0 .596-1.192l-2.298-1.15V4.2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5.866a7.333 7.333 0 1 0 0 14.667A7.333 7.333 0 0 0 8.5.866ZM2.5 8.2a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
      />
    </G>
  </Svg>
);

export default IconClock;
