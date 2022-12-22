import { Box, Flex } from "reflexbox";
import ButtonPrimary from "../../../components/ButtonPrimary";
import Grid from "../../../components/Grid";
import Icon, { Icons } from "../../../components/Icons";
import Typography from "../../../components/Typography";
import { NeutralColors } from "../../../foundation/tokens";
import Image from "next/image";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";
import { KnowMoreButton, Title } from "./SectionConfessionOfFaith.styles";

const SectionConfessionOfFaith = () => {
  return (
    <div id="confissao" style={{ marginTop: "72px" }}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column width={[4, 6]}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              height="100%"
              width={[0, 0.8]}
            >
              <Image
                src="/images/confession.png"
                alt="Picture of the author"
                width="100%"
                height={400}
              />
            </Flex>
          </Grid.Column>

          <Grid.Column width={[4, 6]}>
            <Title>Nossa confissão de fé</Title>
            <HiddenOnMedium>
              <Flex mt="32px" justifyContent="center">
                <Image
                  src="/images/confession.png"
                  alt="Picture of the author"
                  width={320}
                  height={350}
                />
              </Flex>
            </HiddenOnMedium>
            <Typography.Paragraph marginTop="23px" marginBottom="32px">
              Somos uma igreja bíblica, confessional, batista e reformada, por isso,
              subscrevemos os credos da fé cristã, a Declaração de Cambridge e
              a Confissão de Fé Batista de 1689.
            </Typography.Paragraph>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};

export default SectionConfessionOfFaith;
