import styled from "styled-components";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { MediaQueries } from "../../../foundation/media";
import { NeutralColors } from "../../../foundation/tokens";

export const ImageWrapper = styled.div`
  height: 100%;
  width: 70%;

  div {
    height: 100%;
    display: block !important;
  }
`;

export const SectionWrapper = styled.div`
  background-color: ${NeutralColors.light};
  padding-top: 64px;
`;

export const PlayButton = styled(ButtonPrimary)`
  display: flex;
  width: 100%;
  justify-content: center;

  @media ${MediaQueries.Medium} {
    width: 230px;
    justify-content: space-between;
  }
`;
