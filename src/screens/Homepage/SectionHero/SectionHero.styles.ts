import { Box } from "reflexbox";
import styled from "styled-components";
import Paragraph from "../../../components/Typography/Paragraph";
import { MediaQueries } from "../../../foundation/media";

export const DesktopDescription = styled(Paragraph)`
  display: none;

  @media ${MediaQueries.Medium} {
    display: block;
    margin-top: 32px;
  }
`;

export const MobileDescription = styled(Box)`
  display: block;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const SectionHeroContainer = styled.div`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
`;
