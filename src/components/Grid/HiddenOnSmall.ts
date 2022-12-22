import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";

const HiddenOnSmall = styled.div`
  display: none;

  @media ${MediaQueries.Medium} {
    display: block;
  }
`;

export default HiddenOnSmall;