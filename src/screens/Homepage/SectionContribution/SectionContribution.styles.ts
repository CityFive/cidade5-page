import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const SectionContributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;
`;

export const Container = styled.div`
  width: 970px;
  height: 280px;
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand02};
  }
  h2 {
    text-align: left;
    margin: 0;
    font-size: 3rem;
    font-family: "Proxima Nova Semibold";
    color: ${NeutralColors.darkest};
  }
`;
