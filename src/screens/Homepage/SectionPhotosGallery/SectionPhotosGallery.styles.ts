import styled from "styled-components";
import { MediaQueries } from "../../../foundation/media";

export const GalleryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 8px;
  margin-top: 40px;

  @media ${MediaQueries.Medium} {
    grid-template-columns: repeat(auto-fill, minmax(349px, 1fr));
    margin-top: 64px;
  }
`;

export const GalleryItem = styled.div``;
