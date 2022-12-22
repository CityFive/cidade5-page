import React from "react";
import { Flex, Box } from "reflexbox";
import Grid from "../../../components/Grid";
import Typography from "../../../components/Typography";
import { InfoSection } from "../Homepage.styles";
import Image from "next/image";
import HiddenOnSmall from "../../../components/Grid/HiddenOnSmall";
import CopyToClipboard from "../../../components/CopyToClipboard";
import HiddenOnMedium from "../../../components/Grid/HiddenOnMedium";

const SectionContribution = ({ offerPix }) => {
  return (
    <InfoSection
      style={{ marginTop: "114px", paddingTop: "39px", paddingBottom: "39px" }}
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Column width={[4, 5]}>
            <Flex flexDirection="column" justifyContent="center" height="100%">
              <HiddenOnSmall>
                <Typography.HeadingMedium style={{ fontSize: "32px" }}>
                  Dados para{" "}
                  <Typography.Highlight>contribuir</Typography.Highlight> <br />
                  financeiramente
                </Typography.HeadingMedium>
              </HiddenOnSmall>
              <HiddenOnMedium>
                <Typography.HeadingMedium>
                  Dados para{" "}
                  <Typography.Highlight>contribuir</Typography.Highlight> <br />
                  financeiramente
                </Typography.HeadingMedium>
              </HiddenOnMedium>
            </Flex>
          </Grid.Column>
          <Grid.Column width={[4, 5]} style={{ display: "flex" }}>
            <HiddenOnMedium>
              <Flex alignItems="center" mt="24px">
                <Typography.Paragraph>
                  <strong>PIX:</strong> {offerPix}
                </Typography.Paragraph>
                <CopyToClipboard text={offerPix} />
              </Flex>
            </HiddenOnMedium>
            <HiddenOnSmall>
              <Flex
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Typography.Paragraph>
                  Aponte a câmera do smartphone para este QR-Code para fazer uma
                  transferência via PIX.
                </Typography.Paragraph>
              </Flex>
            </HiddenOnSmall>
          </Grid.Column>
          <Grid.Column width={[4, 2]}>
            <HiddenOnSmall>
              <Flex
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Image
                  src="/images/qr-code.png"
                  alt="Picture of the author"
                  width={151}
                  height={151}
                />
              </Flex>
            </HiddenOnSmall>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </InfoSection>
  );
};

export default SectionContribution;
