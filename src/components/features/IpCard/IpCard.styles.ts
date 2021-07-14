import styled from "@emotion/styled";
import { center } from "components/constants/center";
import { fontSizes } from "components/constants/fontSizes";

export const IpCardWrapper = styled.section`
  height: 100vh;

  ${center}

  background: url("/cubesBack.png");
  background-size: cover;
  background-position: center;

  cursor: pointer;

  :hover {
    background-size: cover;
    color: #262626;
  }
`;

export const IpTitle = styled.h2`
  padding: 0px;
  margin: 0px;

  font-style: normal;
  font-weight: bold;
  ${fontSizes}
  text-align: center;
`;
export const IpSubTitle = styled.h3`
  padding: 0px;
  margin: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height */

  text-align: center;

  color: #777777;
`;
