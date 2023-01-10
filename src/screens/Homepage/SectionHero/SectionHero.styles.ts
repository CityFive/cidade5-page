import { Box } from "reflexbox";
import { NeutralColors } from "src/foundation/tokens";
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
  height: 760px;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.darkest}; ;
`;

export const SectionTextHero = styled.div`
  width: 750px;
  height: 289px;
  color: ${NeutralColors.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
  }
  h2 {
    margin: 0;
    font-size: 5rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150% ;
  }
`;
