import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconBook = ({ fill = "#808080", width = 24, height = 24 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21 2a1 1 0 0 0-1-1H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H20a1 1 0 0 0 1-1V2ZM5.44 3.44A1.5 1.5 0 0 1 6.5 3H19v13H6.5a3.5 3.5 0 0 0-1.5.338V4.5c0-.398.158-.78.44-1.06ZM5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3H6.5A1.5 1.5 0 0 0 5 19.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconBook;
