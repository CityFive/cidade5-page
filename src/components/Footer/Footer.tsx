import { Box, Flex } from "reflexbox";
import { BrandColors } from "../../foundation/tokens";
import Grid from "../Grid";
import Typography from "../Typography";
import {
  FooterContainer,
  FooterContent,
  FooterSocialList,
} from "./Footer.styles";
import Image from "next/image";
import CopyToClipboard from "../CopyToClipboard";
import HiddenOnSmall from "../Grid/HiddenOnSmall";
import Icon, { Icons } from "../Icons";
import HiddenOnMedium from "../Grid/HiddenOnMedium";

const Footer = ({ social, offerPix }) => {
  return (
    <FooterContainer id="mais-info">
      <Grid.Container>
        <FooterContent>
          <Box>
            <Image
              width={164}
              height={218}
              alt="Cidade 5"
              src="/images/logo.png"
            />
          </Box>

          <Box>
            <HiddenOnSmall>
              <Typography.Subtitle color={BrandColors.colorBrand03}>
                Contribua
              </Typography.Subtitle>
              <Typography.Paragraph color={BrandColors.colorBrand03}>
                Para contribuir com dizímos e ofertas, utilize a informação
                abaixo:
              </Typography.Paragraph>
            </HiddenOnSmall>
            <HiddenOnSmall>
              <Flex alignItems="center" mt="24px">
                <Typography.ParagraphSmall color={BrandColors.colorBrand03}>
                  <strong>PIX:</strong> {offerPix}
                </Typography.ParagraphSmall>
                <CopyToClipboard text={offerPix} />
              </Flex>
            </HiddenOnSmall>
          </Box>

          <HiddenOnSmall>
            <Box>
              <Typography.Subtitle color={BrandColors.colorBrand03}>
                Redes sociais
              </Typography.Subtitle>
              <FooterSocialList>
                <a href={social.instagramUrl} target="_blank">
                  <Icon
                    icon={Icons.Instagram}
                    size="24px"
                    color={BrandColors.colorBrand02}
                  />
                </a>
                <a href={social.youtubeUrl} target="_blank">
                  <Icon
                    icon={Icons.Youtube}
                    size="24px"
                    color={BrandColors.colorBrand02}
                  />
                </a>
                <a href={social.spotifyUrl} target="_blank">
                  <Icon
                    icon={Icons.Spotify}
                    size="24px"
                    color={BrandColors.colorBrand02}
                  />
                </a>
              </FooterSocialList>
            </Box>
          </HiddenOnSmall>

          <Box>
            <Typography.Subtitle color={BrandColors.colorBrand03}>
              Mais informações
            </Typography.Subtitle>
            <Typography.Paragraph color={BrandColors.colorBrand03}>
              <strong>Teatro Santo Agostinho</strong>
              <br />
              R. Apeninos, 118 - Liberdade, São Paulo - SP, 01533-000
            </Typography.Paragraph>

            <Typography.Paragraph
              color={BrandColors.colorBrand03}
              style={{ marginTop: "16px" }}
            >
              <strong>Contato</strong>
              <br />
              cidade.cinco@gmail.com
            </Typography.Paragraph>
          </Box>

          <HiddenOnMedium>
            <FooterSocialList>
              <a href={social.instagramUrl} target="_blank">
                <Icon
                  icon={Icons.Instagram}
                  size="24px"
                  color={BrandColors.colorBrand02}
                />
              </a>
              <a href={social.youtubeUrl} target="_blank">
                <Icon
                  icon={Icons.Youtube}
                  size="24px"
                  color={BrandColors.colorBrand02}
                />
              </a>
              <a href={social.spotifyUrl} target="_blank">
                <Icon
                  icon={Icons.Spotify}
                  size="24px"
                  color={BrandColors.colorBrand02}
                />
              </a>
            </FooterSocialList>
          </HiddenOnMedium>
        </FooterContent>
      </Grid.Container>
    </FooterContainer>
  );
};

export default Footer;
