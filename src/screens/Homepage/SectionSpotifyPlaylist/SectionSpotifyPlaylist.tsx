import { SocialInfo } from "../../../api/data";
import Grid from "../../../components/Grid";
import Image from "next/image";
import Typography from "../../../components/Typography";
import { Box } from "reflexbox";
import {
  ImageWrapper,
  SectionWrapper,
  PlayButton,
} from "./SectionSpotifyPlaylist.styles";
import Icon, { Icons } from "../../../components/Icons";
import { NeutralColors } from "../../../foundation/tokens";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";

interface Props {
  social: SocialInfo;
}

const SectionSpotifyPlaylist: React.FC<Props> = ({ social }) => {
  return (
    <SectionWrapper>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column width={[4, 4]}>
            <HiddenOnSmall>
              <ImageWrapper>
                <Image
                  src="/images/spotify-playlist.png"
                  alt="Picture of the author"
                  width={343}
                  height={400}
                />
              </ImageWrapper>
            </HiddenOnSmall>
          </Grid.Column>
          <Grid.Column width={[4, 8]}>
            <HiddenOnMedium>
              <Typography.HeadingLarge style={{ lineHeight: "38.4px" }}>
                Ouça no Spotify as músicas cantadas na{" "}
                <Typography.Highlight>Cidade Cinco</Typography.Highlight>
              </Typography.HeadingLarge>
            </HiddenOnMedium>

            <HiddenOnSmall>
              <Typography.HeadingLarge style={{ lineHeight: "57.6px" }}>
                Ouça no Spotify as músicas cantadas na{" "}
                <Typography.Highlight>Cidade Cinco</Typography.Highlight>
              </Typography.HeadingLarge>
            </HiddenOnSmall>

            <Box marginTop="48px" width={1}>
              <a
                href={social.spotifyPlaylist}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <PlayButton>
                  Tocar playlist{" "}
                  <Icon
                    icon={Icons.ArrowRight}
                    color={NeutralColors.lightest}
                  />
                </PlayButton>
              </a>
            </Box>
          </Grid.Column>
          <Grid.Column width={[4, 4]}>
            <HiddenOnMedium>
              <ImageWrapper style={{ marginTop: "40px", width: "100%" }}>
                <Image
                  src="/images/spotify-playlist.png"
                  alt="Picture of the author"
                  width={343}
                  height={400}
                />
              </ImageWrapper>
            </HiddenOnMedium>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </SectionWrapper>
  );
};

export default SectionSpotifyPlaylist;
