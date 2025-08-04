import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const IconCards = ({ width = 24, height = 24, fill, color, ...props }: SvgProps) => {
  const iconColor = fill || color || "#808080";
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={iconColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2H8a3.001 3.001 0 0 0-2.83 2H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.17A3.001 3.001 0 0 0 8 22h8a3.001 3.001 0 0 0 2.83-2H20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3.001 3.001 0 0 0 16 2Zm3 4v12h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1ZM5 18V6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1ZM7 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z"
      />
    </Svg>
  );
};


export default IconCards;
