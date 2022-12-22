import Typography from "../Typography";
import {
  CardBody,
  CardFooter,
  CardIcon,
  CardImage,
  CardLayout,
} from "./ProfileCard.styles";
import Image from "next/image";
import React from "react";
import { BrandColors } from "../../foundation/tokens";
import Icon, { Icons } from "../Icons";
import { SocialInfo } from "../../api/data";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  position: string;
  social: SocialInfo;
}

const ProfileCard = ({
  title,
  position,
  description,
  imageUrl,
  social,
}: Props) => {
  return (
    <CardLayout>
      <CardImage>
        <Image src={imageUrl} alt={title} width={349} height={300} />
      </CardImage>
      <CardBody>
        <Typography.HeadingMedium>{title}</Typography.HeadingMedium>
        <Typography.ParagraphSmall style={{ marginBottom: "44px" }}>
          <Typography.Highlight>{position}</Typography.Highlight>, {description}
        </Typography.ParagraphSmall>

        <CardFooter>
          {social.instagramUrl && (
            <CardIcon href={social.instagramUrl} target="_blank">
              <Icon
                icon={Icons.Instagram}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </CardIcon>
          )}
          {social.twitterUrl && (
            <CardIcon href={social.twitterUrl} target="_blank">
              <Icon
                icon={Icons.Twitter}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </CardIcon>
          )}
          {social.youtubeUrl && (
            <CardIcon href={social.youtubeUrl} target="_blank">
              <Icon
                icon={Icons.Youtube}
                size="24px"
                color={BrandColors.colorBrand02}
              />
            </CardIcon>
          )}
        </CardFooter>
      </CardBody>
    </CardLayout>
  );
};

export default ProfileCard;
