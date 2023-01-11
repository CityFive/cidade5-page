import Activity from "src/components/Activity/Activity";
import { ActivitiesData } from "src/screens/Homepage/SectionActivities/ActivitiesData";
import ButtonSecondary from "src/components/ButtonSecondary";
import {
  Activitiescards,
  SectionActivitiesContainer,
  SectionTextActivities,
} from "./SectionActivities.styles";

const SectionActivities = () => {
  return (
    <SectionActivitiesContainer id="atividades">
      <SectionTextActivities>
        <h3>ATIVIDADES</h3>
        <h2>A vida cristã na Cidade Cinco</h2>
        <p>
          Como seguidores de Cristo, entendemos que estamos a todo momento em
          discipulado e que fomos salvos para prestar culto a Deus. Portanto, o
          culto dominical é o ápice da nossa semana. Também valorizamos os
          momentos de comunhão e de estudo, pois entendemos que um dos objetivos
          da igreja local é preparar testemunhas fiéis de Cristo.
        </p>
      </SectionTextActivities>
      {ActivitiesData.map((activity) => (
        <Activity
          key={activity.id}
          id={activity.id}
          title={activity.title}
          text={activity.text}
          buttonContent={activity.buttonContent}
          imageUrl = {activity.imageUrl}
        />
      ))}
    </SectionActivitiesContainer>
  );
};
export default SectionActivities;
