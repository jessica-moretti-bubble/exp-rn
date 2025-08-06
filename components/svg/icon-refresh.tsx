import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

const IconRefresh = ({
  width = 33,
  height = 33,
  fill = 'gray',
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M14.039 6.105a10.667 10.667 0 0 1 9.937 2.9l3.792 3.5h-4.7a1.333 1.333 0 0 0 0 2.668h8c.735 0 1.332-.597 1.332-1.334v-8a1.333 1.333 0 0 0-2.666 0v4.852l-3.93-3.627a13.334 13.334 0 0 0-21.98 4.997 1.333 1.333 0 1 0 2.513.89 10.666 10.666 0 0 1 7.702-6.846ZM1.734 17.84C.997 17.84.4 18.435.4 19.172v8a1.333 1.333 0 1 0 2.667 0V22.32l3.93 3.627a13.334 13.334 0 0 0 21.98-4.997 1.333 1.333 0 1 0-2.514-.89 10.667 10.667 0 0 1-17.638 3.945l-3.792-3.5h4.7a1.333 1.333 0 1 0 0-2.667h-8Z"
        fill={fill}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="32" height="32" fill="white" transform="translate(0.4 0.506)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IconRefresh;
