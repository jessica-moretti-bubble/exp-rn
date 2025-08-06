import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const IconShoppingCart = ({ fill = "#808080", width = 24, height = 24, ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G fill={fill} clipPath="url(#clip0)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0a1 1 0 1 0 0 2h3.18l.832 4.155c.004.029.01.057.017.084l1.67 8.346A3.003 3.003 0 0 0 9.69 17h9.702a3 3 0 0 0 2.99-2.415l.001-.008 1.6-8.39A1 1 0 0 0 23 5H6.82L5.98.804A1 1 0 0 0 5 0H1Zm6.22 7h14.571l-1.372 7.198a1 1 0 0 1-1 .802H9.66a1 1 0 0 1-1-.805L7.22 7Z"
      />
      <Path d="M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IconShoppingCart;
