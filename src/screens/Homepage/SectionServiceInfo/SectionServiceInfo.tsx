import React from "react";
import { Flex, Box } from "reflexbox";
import { SocialInfo } from "../../../api/data";
import Grid from "../../../components/Grid";
import Typography from "../../../components/Typography";
import { InfoSection } from "../Homepage.styles";

interface Props {
  social: SocialInfo;
}

const SectionServiceInfo: React.FC<Props> = ({ social }) => {
  return (
    <InfoSection>
      <Grid.Container>
        <Grid.Row style={{ alignItems: 'center' }}>
          <Grid.Column width={[4, 5]}>
            <Box width={0.8}>
              <Typography.HeadingMedium>
                Nosso culto público acontece às{" "}
                <Typography.Highlight>10:30</Typography.Highlight> aos domingos
                no teatro Santo Agostinho
              </Typography.HeadingMedium>
            </Box>
          </Grid.Column>
          <Grid.Column width={[4, 7]}>
            <Typography.Paragraph style={{ margin: 0 }}>
              Devido a pandemia do vírus COVID-19, por enquanto, pedimos que todos
              estejam de máscara e utilizem de álcool em gel na entrada do teatro.
              Para os que possuem comorbidades, acompanhe as transmissões pelo <Typography.Link href={social.youtubeUrl} target="_blank">Youtube</Typography.Link>.
            </Typography.Paragraph>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </InfoSection>
  );
};

export default SectionServiceInfo;
