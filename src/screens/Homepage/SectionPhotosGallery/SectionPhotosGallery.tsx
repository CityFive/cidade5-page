import React from "react";
import { Box, Flex } from "reflexbox";
import ButtonSecondary from "../../../components/ButtonSecondary";
import Grid from "../../../components/Grid";
import Icon, { Icons } from "../../../components/Icons";
import Typography from "../../../components/Typography";
import { BrandColors } from "../../../foundation/tokens";
import Image from "next/image";
import { GalleryItem, GalleryList } from "./SectionPhotosGallery.styles";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";

const SectionsPhotosGallery = ({ instagramPosts }) => {
  return (
    <div id="galeria" style={{ marginTop: "64px", marginBottom: "128px" }}>
      <Grid.Container>
        <Flex justifyContent="space-between" width={1}>
          <Flex justifyContent={["center", "flex-start"]} width={[1, "auto"]}>
            <Typography.HeadingLarge>Galeria de fotos</Typography.HeadingLarge>
          </Flex>
          <HiddenOnSmall>
            <ButtonSecondary
              as="a"
              href="https://www.instagram.com/cidade.cinco/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Visitar galeria
              <Icon icon={Icons.ArrowRight} color={BrandColors.colorBrand02} />
            </ButtonSecondary>
          </HiddenOnSmall>
        </Flex>
        <GalleryList>
          {instagramPosts.map((post, i) => {
            return (
              <GalleryItem key={i}>
                {post && (
                  <Image
                    src={post}
                    alt="Image"
                    width={349}
                    height={300}
                    objectFit="cover"
                  />
                )}
              </GalleryItem>
            );
          })}
        </GalleryList>

        <HiddenOnMedium>
          <Flex justifyContent="center" marginTop="51px">
            <ButtonSecondary
              as="a"
              href="https://www.instagram.com/cidade.cinco/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Visitar galeria
              <Icon icon={Icons.ArrowRight} color={BrandColors.colorBrand02} />
            </ButtonSecondary>
          </Flex>
        </HiddenOnMedium>
      </Grid.Container>
    </div>
  );
};

export default SectionsPhotosGallery;
