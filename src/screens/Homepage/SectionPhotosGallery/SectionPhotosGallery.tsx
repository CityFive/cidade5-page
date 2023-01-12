import React from "react";
import {
  GalleryItem,
  GalleryList,
  SectionGalleryContainer,
  SectionTextGallery,
} from "./SectionPhotosGallery.styles";

const SectionsPhotosGallery = ({ instagramPosts }) => {
  return (
    <SectionGalleryContainer>
      <SectionTextGallery>
        <h3>GALERIA DE FOTOS</h3>
        <h2>Os tesouros da Cidade Cinco</h2>
      </SectionTextGallery>
      <GalleryList>
        {instagramPosts.map((post: string, i: number) => {
          return (
            <GalleryItem>
              <img src={post} key={i} />
            </GalleryItem>
          );
        })}
      </GalleryList>
    </SectionGalleryContainer>
  );
};

export default SectionsPhotosGallery;
