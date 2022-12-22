import styled from "styled-components";
import { MediaQueries } from "../../foundation/media";

const HiddenOnMedium = styled.div`
  display: block;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export default HiddenOnMedium;