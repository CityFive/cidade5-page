import ButtonSecondary from "src/components/ButtonSecondary";
import {
  SectionActivitiesContainer,
  SectionTextActivities,
} from "./SectionActivities.styles";

const SectionActivities = () => {
  return (
    <SectionActivitiesContainer id="sobre">
      <SectionTextActivities>
        <h3>ATIVIDADES</h3>
        <h2>A vida cristã na Cidade Cinco</h2>
        <p>
        Como seguidores de Cristo, entendemos que estamos a todo momento em discipulado e que fomos salvos para prestar culto a Deus. Portanto, o culto dominical é o ápice da nossa semana. Também valorizamos os momentos de comunhão e de estudo, pois entendemos que um dos objetivos da igreja local é preparar testemunhas fiéis de Cristo.
        </p>
      </SectionTextActivities>
      {/* <ButtonSecondary>Conheça a Cidade Cinco</ButtonSecondary> */}
    </SectionActivitiesContainer>
  );
};
export default SectionActivities;
