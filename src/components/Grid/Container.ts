import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px;

  @media ${MediaQueries.Medium} {
    max-width: 1312px;
    padding: none;
  }
`;

export default Container;
