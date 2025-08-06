import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const IconEyeOff = ({
  width = 24,
  height = 24,
  fill = "gray",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1_1)" fill={fill}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.707.293A1 1 0 0 0 .293 1.707l4.275 4.276a19.45 19.45 0 0 0-4.45 5.544 1 1 0 0 0-.012.92L1 12c-.894.447-.894.449-.894.449l.002.002.003.007.011.022a8.247 8.247 0 0 0 .192.354 20.67 20.67 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21h.016a11.07 11.07 0 0 0 5.81-1.76l4.467 4.467a1 1 0 0 0 1.414-1.414l-22-22Zm.436 11.71a17.45 17.45 0 0 1 3.844-4.602l2.549 2.55a3.994 3.994 0 0 0-.32 3.622 4 4 0 0 0 5.834 1.891l2.321 2.322A9.07 9.07 0 0 1 11.991 19c-3.096-.003-5.597-1.775-7.386-3.684a18.68 18.68 0 0 1-2.462-3.313Zm7.782.037a2 2 0 0 1 .103-.598l2.53 2.53a2 2 0 0 1-2.633-1.932Z"
      />
      <Path d="M21.845 12.02c-2.823-4.654-6.58-7.783-11.696-6.848a1 1 0 1 1-.36-1.967c6.554-1.199 11.05 3.12 14.028 8.219a1 1 0 0 1 .065 1.047 19.506 19.506 0 0 1-2.277 3.363 1 1 0 0 1-1.53-1.288 17.503 17.503 0 0 0 1.77-2.526Z" />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IconEyeOff;
