import { Box, Flex } from "reflexbox";
import Grid from "../../../components/Grid";
import Typography from "../../../components/Typography";
import Image from "next/image";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";

const SectionAboutUs = () => {
  return (
    <div style={{ marginTop: "48px" }} id="sobre">
      <Grid.Container>
        <Grid.Row>
          <Grid.Column width={[4, 6]}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
              width={[1, 0.8]}
            >
              <Typography.HeadingLarge>Sobre nós</Typography.HeadingLarge>
              <HiddenOnSmall>
                <Typography.Paragraph marginTop="32px">
                  Nossa história começou em julho de 2020, durante a pandemia do
                  COVID-19, por meio do trabalho de plantação de igreja do
                  pastor Fábio Leal e de outros irmãos.
                </Typography.Paragraph>
              </HiddenOnSmall>
            </Flex>
          </Grid.Column>
          <Grid.Column width={[4, 6]}>
            <HiddenOnMedium>
              <Typography.Paragraph marginTop="32px">
                Nossa história começou em julho de 2020, durante a pandemia do
                COVID-19, por meio do trabalho de plantação de igreja do pastor
                Fábio Leal e de outros irmãos.
              </Typography.Paragraph>
            </HiddenOnMedium>

            <Box mt={["24px", 0]}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/DxNe9DVP6s8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};

export default SectionAboutUs;
