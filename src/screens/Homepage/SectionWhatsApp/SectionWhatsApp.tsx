import Image from "next/image";
import ButtonTertiary from "src/components/ButtonTertiary";
import { Container, SectionWhatsApp } from "./SectionWhatsApp.styles";

const SectionSpotifyPlaylist = () => {
  return (
    <>
      <SectionWhatsApp>
        <Container>
          <Image
            src="/images/spotify-playlist.png"
            alt="Picture of the author"
            width={343}
            height={400}
          />
          <section>
            <div>
              <h3>GRUPO DE WHATSAPP</h3>
              <h2>
              Fique por dentro das <br /> novidades da Cidade Cinco
              </h2>
            </div>
            <ButtonTertiary>Entrar no grupo dde WhatsApp</ButtonTertiary>
          </section>
        </Container>
      </SectionWhatsApp>
    </>
  );
};

export default SectionSpotifyPlaylist;
