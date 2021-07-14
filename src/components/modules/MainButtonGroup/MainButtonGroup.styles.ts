import styled from "@emotion/styled";

export const MainButtonGroupWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 60%;

  @media (max-width: 838px) {
    flex-direction: column;
    padding-top: 30px;
  }

  .button {
    flex-grow: 1;
    flex: 1;
  }
`;
