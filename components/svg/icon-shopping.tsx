import React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const IconShopping = ({ width = 24, height = 24, fill = "#21423A", ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M0.5 0H24.5V24H0.5z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0)" fill={fill}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0a1 1 0 1 0 0 2h3.18l.832 4.155c.004.029.01.057.017.084l1.67 8.346A3.003 3.003 0 0 0 10.19 17h9.702a3 3 0 0 0 2.99-2.415l.001-.008 1.6-8.39A1 1 0 0 0 23.5 5H7.32L6.48.804A1 1 0 0 0 5.5 0h-4Zm6.22 7h14.571l-1.372 7.198a1 1 0 0 1-1 .802H10.16a1 1 0 0 1-1-.805L7.72 7Z"
      />
      <Path d="M7.5 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18.5 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
    </G>
  </Svg>
);

export default IconShopping;
