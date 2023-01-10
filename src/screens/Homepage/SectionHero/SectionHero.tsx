import { SectionHeroContainer, SectionTextHero } from "./SectionHero.styles";


const SectionHero = () => {
  return (
    <SectionHeroContainer>
      <SectionTextHero>
        <h3>BEM-VINDO À CIDADE CINCO!</h3>
        <h2>
          A boa notícia <br /> ecoando na cidade
        </h2>
        <p>
          Somos uma comunidade de pessoas que confessam a fé em Jesus Cristo e
          vivem para proclamar a grande história da redenção na cidade de São
          Paulo.
        </p>
      </SectionTextHero>
    </SectionHeroContainer>
  );
};

export default SectionHero;
