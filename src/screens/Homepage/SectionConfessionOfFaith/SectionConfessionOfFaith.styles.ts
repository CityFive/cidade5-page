import styled from "styled-components";
import ButtonPrimary from "../../../components/ButtonPrimary";
import Typography from "../../../components/Typography";
import { MediaQueries } from "../../../foundation/media";

export const KnowMoreButton = styled(ButtonPrimary)`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${MediaQueries.Medium} {
    width: auto;
  }
`;

export const Title = styled(Typography.HeadingLarge)`
  text-align: center;

  @media ${MediaQueries.Medium} {
    text-align: left;
  }
`;
