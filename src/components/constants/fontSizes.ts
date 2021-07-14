import { css } from "@emotion/react";

export const fontSizes = css`
  @media (max-width: 838px) {
    font-size: clamp(52px, 1vw, 32px);
    line-height: 52px;
  }

  @media (min-width: 838px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1270px) {
    font-size: 72px;
    line-height: 72px;
  }
`;
