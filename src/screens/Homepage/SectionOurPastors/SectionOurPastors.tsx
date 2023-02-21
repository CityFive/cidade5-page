import ProfileCard from "src/components/ProfileCard";
import { data } from "../../../api/data";

import {
  CardsContainer,
  SectionOurPastorsContainer,
  SectionTextOurPastors,
} from "./SectionOurPastors.styles";

const pastors = data.churchInfo.pastors;
const deacons = data.churchInfo.deacons;

const SectionOurPastors = () => {
  return (
    <SectionOurPastorsContainer id="atividades">
      <SectionTextOurPastors>
        <h3>EQUIPE PASTORAL</h3>
        <h2>
          Somos liderados por <br /> um corpo de presbíteros{" "}
        </h2>
      </SectionTextOurPastors>
      <h4>Presbitério da Cidade Cinco</h4>
      <CardsContainer>
        {pastors.map((pastor, i) => {
          return (
            <ProfileCard
              key={i}
              id={i}
              imageUrl={pastor.imageUrl}
              name={pastor.fullName}
              title={pastor.title}
              description={pastor.description}
            ></ProfileCard>
          );
        })}
      </CardsContainer>
      <h4>Diáconos da Cidade Cinco</h4>
      <CardsContainer>
        {deacons.map((deacon, i) => {
          return (
            <ProfileCard
              key={i}
              id={i}
              imageUrl={deacon.imageUrl}
              name={deacon.fullName}
              title={deacon.title}
              description={deacon.description}
            ></ProfileCard>
          );
        })}
      </CardsContainer>
    </SectionOurPastorsContainer>
  );
};

export default SectionOurPastors;
