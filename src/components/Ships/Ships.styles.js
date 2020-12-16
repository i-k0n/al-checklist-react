import styled from "@emotion/styled";

const ShipsContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(8, minmax(100px, 186px));
  justify-content: center;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(6, minmax(100px, 186px));
  }

  @media only screen and (max-width: 928px) {
    grid-template-columns: repeat(auto-fit, 124px);
  }
`;

export { ShipsContainer };