import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const FooterContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100px;
   width: 100%;
   background-color: ${BrandColors.colorBrand01};
`;
export const FooterContent = styled.div`
  width: 1300px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 35px 32px;
  color: ${NeutralColors.lightest};
  p{
    font-size: 0.875rem;
  }
`;
