import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  width: 100%;

  @media ${MediaQueries.Medium} {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
  }
`;

export default Row;
