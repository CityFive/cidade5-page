import ProfileCard from "src/components/ProfileCard";
import { data } from "../../../api/data";

import {
  CardsContainer,
  SectionOurPastorsContainer,
  SectionTextOurPastors,
} from "./SectionOurPastors.styles";


const pastors = data.churchInfo.pastors;

const SectionOurPastors= () => {
  return (
    <SectionOurPastorsContainer id="atividades">
      <SectionTextOurPastors>
        <h3>EQUIPE PASTORAL</h3>
        <h2>
          Somos liderados por <br /> um corpo de presbíteros{" "}
        </h2>
      </SectionTextOurPastors>
      <CardsContainer>
        {pastors.map((pastor, i) => {
          return (
            <ProfileCard
              key={i}
              id={i}
              imageUrl={pastor.imageUrl}
              title={pastor.fullName}
              description={pastor.description}
            ></ProfileCard>
          );
        })}
      </CardsContainer>
    </SectionOurPastorsContainer>
  );
};

export default SectionOurPastors;
