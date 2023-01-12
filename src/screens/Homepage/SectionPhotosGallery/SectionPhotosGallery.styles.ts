import { BrandColors, NeutralColors } from "src/foundation/tokens";
import styled from "styled-components";

export const GalleryList = styled.div`
  width: 950px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const GalleryItem = styled.div`
  img {
    width: 306px;
    height: 297px;
    object-fit: cover;
  }
`;

export const SectionGalleryContainer = styled.div`
  width: 100%;
  /* height: 650px; */
  padding-top: 128px;
  padding-bottom: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BrandColors.colorBrand05};
  gap: 64px;
`;
export const SectionTextGallery = styled.div`
  width: 950px;
  height: 100px;
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
    font-size: 3rem;
    text-align: center;
    font-family: "Proxima Nova Semibold";
  }
`;
