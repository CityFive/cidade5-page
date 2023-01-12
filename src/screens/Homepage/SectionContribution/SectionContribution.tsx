import { SocialInfo } from "../../../api/data";
import Image from "next/image";
import {
  Container,
  SectionContributionContainer,
} from "./SectionContribution.styles";
import ButtonPrimary from "src/components/ButtonPrimary";

interface Props {
  social: SocialInfo;
}

const SectionContribution = ({ offerPix }) => (
  <SectionContributionContainer>
    <Container>
      <Image
        src="/images/qrcode.png"
        width={278}
        height={278}
      />
      <section>
        <div>
          <h3>CONTRIBUA</h3>
          <h2>
            Copie o Pix ou QR-Code para <br /> ofertar na Cidade Cinco
          </h2>
        </div>
        <ButtonPrimary>Copiar chave Pix</ButtonPrimary>
      </section>
    </Container>
  </SectionContributionContainer>
);

export default SectionContribution;
