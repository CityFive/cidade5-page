import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const SectionOurPastorsContainer = styled.div`
  width: 100%;
  /* height: 650px; */
  padding-top: 128px;
  padding-bottom: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${NeutralColors.lightest}; ;
  gap: 80px;
`;


export const CardsContainer = styled.div`
 display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 64px;

width: 1249.79px;
height: 498.67px;
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
  
  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand02};
  }
  h2 {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
`;
