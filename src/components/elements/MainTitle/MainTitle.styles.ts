import styled from "@emotion/styled";
import { fontSizes } from "components/constants/fontSizes";

export const MainTitleWrapper = styled.div`
  font-style: normal;
  font-weight: bold;

  letter-spacing: 0.3em;

  position: relative;
`;

export const MainTitleContent = styled.h1`
  color: #262626;
  padding: 0px;
  margin: 0px;
  font-size: 72px;
  line-height: 72px;

  z-index: 3;
  position: relative;

  ${fontSizes}
`;

interface MainTitleShadowProps {
  offset: number;
  opacity: number;
}

export const MainTitleShadow = styled.div<MainTitleShadowProps>`
  position: absolute;
  inset: 0;

  padding: 0px;
  margin: 0px;

  top: ${({ offset }) => `${offset}px`};
  z-index: 1;
  opacity: ${({ opacity }) => `0.${opacity}`};

  -webkit-text-stroke: 1px black;
  color: transparent;
  ${fontSizes}
`;
