import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";
import { ICONS_NAME } from "../../../constants/icons.const";

interface StyledSVGIconProps {
  size?: number;
  transform?: string;
  color?: string;
}

const StyledSVGIcon = styled(ReactSVG)<StyledSVGIconProps>`
  svg {
    fill: black;
    ${({ size }) =>
      size &&
      css`
        width: ${size}px;
        height: ${size}px;
      `}
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  transform?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, transform }) => {
  return (
    <StyledSVGIcon
      src={`../../../src/${ICONS_NAME[name]}`}
      color={color}
      size={size}
      transform={transform}
    />
  );
};

export default Icon;
