import styled from "@emotion/styled";
import { center } from "components/constants/center";

export const HeaderWrapper = styled.section`
  height: 100vh;
  position: relative;

  ${center}
`;

export const HeaderBackground = styled.div`
  position: absolute;
  inset: 0px;
  bottom: 40%;

  @media (max-width: 838px) {
    background: linear-gradient(
        0deg,
        #f8f8fa 20%,
        rgba(248, 248, 250, 0.75) 100%
      ),
      url("/small.jpg");

    background-size: cover;
    background-position: center;
  }

  @media (min-width: 838px) {
    background: linear-gradient(
        0deg,
        #f8f8fa 20.08%,
        rgba(248, 248, 250, 0.75) 100%
      ),
      url("/medium.jpg");

    background-size: cover;
    background-position: center;
  }

  @media (min-width: 1270px) {
    background: linear-gradient(
        0deg,
        #f8f8fa 20.08%,
        rgba(248, 248, 250, 0.75) 100%
      ),
      url("/big.jpg");

    background-size: cover;
    background-position: center;
  }
`;
