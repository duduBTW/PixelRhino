import styled from "@emotion/styled";

export const HomePageWrapper = styled.div`
  height: 100%;

  display: grid;

  @media (min-width: 938px) {
    grid-template-rows: 1fr 1fr;

    .header {
      grid-row: 1 / 2;
    }

    .ip-card {
      grid-row: 2 / 3;
    }
  }

  @media (min-width: 1270px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    .header {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .ip-card {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
`;
