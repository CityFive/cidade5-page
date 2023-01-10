import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const SectionAboutUsContainer = styled.div`
  width: 100%;
  height: 650px;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand05}; ;
`;
export const SectionTextAboutUs = styled.div`
  width: 950px;
  height: 289px;
  color: ${NeutralColors.darkest};
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
    font-size: 2.5rem;
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
