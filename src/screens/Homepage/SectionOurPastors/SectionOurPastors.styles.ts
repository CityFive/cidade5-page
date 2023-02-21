import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionOurPastorsContainer = styled.div`
  width: 100%;
  padding-top: 128px;
  padding-bottom: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand03};
  gap: 60px;

  h4 {
    padding-top: 0px;
    font-size: 1.625rem;
    margin: 0;
    
    padding: none;
    font-family: "Proxima Nova Semibold";
    font-weight: 100;
    color: ${NeutralColors.darkest};
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 1250px;
`;

export const SectionTextOurPastors = styled.div`
  width: 950px;
  height: 155px;
  color: ${NeutralColors.darkest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h2 {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }

  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand02};
  }
`;
