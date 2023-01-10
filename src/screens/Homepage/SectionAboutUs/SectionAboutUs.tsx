import {
  SectionAboutUsContainer,
  SectionTextAboutUs,
} from "./SectionAboutUs.styles";

const SectionAboutUs = () => {
  return (
    <SectionAboutUsContainer id="sobre">
      <SectionTextAboutUs>
        <h3>NOSSA HISTÓRIA</h3>
        <h2>
          Não estamos começando, somos apenas parte do que Deus
          já está fazendo há muito tempo.
        </h2>
        <p>
        Nascemos na cidade de São Paulo
          durante a pandemia da COVID-19 por meio do trabalho de plantação do
          pastor <br /> Fábio  Leal e de outros irmãos que o acompanharam. A nossa
          missão é ecoar a mensagem do evangelho na cidade de São Paulo e
          cooperar com centenas de igrejas bíblicas que já fazem isso há muito
          mais tempo. Baixar confissão de fé.
        </p>
      </SectionTextAboutUs>
    </SectionAboutUsContainer>
  );
};
export default SectionAboutUs;
