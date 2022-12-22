import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { MediaQueries } from "../../foundation/media";

interface Props extends SpaceProps {
  width: number | number[];
}

const Column = styled.div<Props>`
  ${(props) =>
    Array.isArray(props.width)
      ? `
    grid-column: span ${props.width[0]};

    @media ${MediaQueries.Medium} {
      grid-column: span ${props.width[1]};
    }
  `
      : `
    grid-column: span ${props.width};
  `}
  ${space}
`;

export default Column;
