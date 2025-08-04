import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconCopy = ({ width = 24, height = 24, fill, color, ...props }: SvgProps) => {
  const iconColor = fill || color || "#BAF7CD";

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      {...props}
    >
      <Path
        d="M2.695 2.196A.667.667 0 0 1 3.167 2h6a.667.667 0 0 1 .666.667v.667a.667.667 0 0 0 1.334 0v-.667a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h.666a.667.667 0 0 0 0-1.333h-.666a.667.667 0 0 1-.667-.667v-6c0-.177.07-.346.195-.471Z"
        fill={iconColor}
      />
      <Path
        fill={iconColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.833 5.334a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6Zm-.666 2c0-.369.298-.667.666-.667h6c.369 0 .667.298.667.667v6a.667.667 0 0 1-.667.666h-6a.667.667 0 0 1-.666-.666v-6Z"
      />
    </Svg>
  );
};

export default IconCopy;
