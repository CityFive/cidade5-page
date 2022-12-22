import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";
import { BrandColors, NeutralColors } from "../../../foundation/tokens";

export const PageContainer = styled.div`
  margin-top: 114px;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 61px;
  width: 100%;
  overflow-x: scroll;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const CarouselItem = styled.div`
  width: 320px;
  margin-right: 20px;
`;

export const CarouselDotList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  @media ${MediaQueries.Medium} {
    display: none;
  }
`;

export const CarouselDot = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${NeutralColors.medium};
  cursor: pointer;

  ${props => props.isActive && `
    background-color: ${BrandColors.colorBrand02};
  `};
`;