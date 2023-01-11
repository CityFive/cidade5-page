import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const SectionActivitiesContainer = styled.div`
  width: 100%;
  /* height: 650px; */
  padding-top: 128px;
  padding-bottom: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand01}; ;
  gap: 64px;
`;
export const SectionTextActivities = styled.div`
  width: 950px;
  height: 220px;
  color: ${NeutralColors.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 64px;
  
  h3 {
    padding-top: 0px;
    font-size: 1.125rem;
    margin: 0;
    padding: none;
    font-family: "Proxima Nova Semibold";
    color: ${BrandColors.colorBrand05};
  }
  h2 {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
  p {
    margin: 0;
    font-size: 1.125rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
    line-height: 150% ;
    font-weight:lighter ;
  }
`;

export const Activitiescards = styled.div`
width: 950px;
`

