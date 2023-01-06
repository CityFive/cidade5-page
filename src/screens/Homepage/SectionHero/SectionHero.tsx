import { Flex } from "reflexbox";
import Grid from "../../../components/Grid";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";
import Typography from "../../../components/Typography";
import { SectionHeroContainer, SectionText } from "./SectionHero.styles";
import Image from "next/image";

const SectionHero = () => {
  return (
    <SectionHeroContainer>
      <SectionText>
        <h3>BEM-VINDO À CIDADE CINCO!</h3>
        <h2>A boa notícia <br/> ecoando na cidade</h2>
        <p>Somos uma comunidade de pessoas que confessam a fé em Jesus Cristo e vivem para proclamar a grande história da redenção na cidade de São Paulo.</p>
      </SectionText>

      {/* <Grid.Container>
        <Grid.Row>
          <Grid.Column width={[4, 5]}>
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography.HeadingLarge>
                A boa notícia ecoando na cidade
              </Typography.HeadingLarge>
              <HiddenOnSmall>
                <Typography.Paragraph marginTop="32px">
                  Seja bem-vindo a Igreja Cidade Cinco. Criamos esse site para
                  que você conheça um pouco mais sobre a nossa igreja.
                </Typography.Paragraph>
              </HiddenOnSmall>
            </Flex>
          </Grid.Column>
          <Grid.Column width={[0, 1]} />
          <Grid.Column width={[4, 6]} mt={["32px", 0]}>
            <video autoPlay loop muted playsInline style={{ width: "100%" }}>
              <source src="/videos/animation.mp4" type="video/mp4" />
            </video>
            <HiddenOnMedium>
              <Typography.Paragraph marginTop="32px">
                Seja bem-vindo a Igreja Cidade Cinco. Criamos esse site para que
                você conheça um pouco mais sobre a nossa igreja.
              </Typography.Paragraph>
            </HiddenOnMedium>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container> */}
    </SectionHeroContainer>
  );
};

export default SectionHero;
