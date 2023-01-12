import { SocialInfo } from "../../../api/data";
import Image from "next/image";
import {
  Container,
  SectionSpotify,
  SectionYoutube,
} from "./SectionMedias.styles";
import ButtonSecondary from "src/components/ButtonSecondary";

interface Props {
  social: SocialInfo;
}

const SectionSpotifyPlaylist: React.FC<Props> = ({ social }) => {
  return (
    <>
      <SectionYoutube>
        <Container>
          <section>
            <div>
              <h3>PREGAÇÕES</h3>
              <h2>
                Acesse as pregações <br /> realizadas em nossa igreja
              </h2>
            </div>
            <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
          </section>
          <Image
            src="/images/youtubechannel.png"
            alt="Picture of the author"
            width={343}
            height={400}
          />
        </Container>
      </SectionYoutube>
      <SectionSpotify>
        <Container>
          <Image
            src="/images/spotify-playlist.png"
            alt="Picture of the author"
            width={343}
            height={400}
          />
          <section>
            <div>
              <h3>MÚSICAS</h3>
              <h2>
                Ouça no Spotify as músicas <br /> que cantamos nos cultos
              </h2>
            </div>
            <ButtonSecondary>Acessar canal no Youtube</ButtonSecondary>
          </section>
        </Container>
      </SectionSpotify>
      Sec
    </>
  );
};

export default SectionSpotifyPlaylist;
