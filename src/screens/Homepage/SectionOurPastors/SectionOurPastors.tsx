import ProfileCard from "src/components/ProfileCard";
import { data } from "../../../api/data";

import {
  CardsContainer,
  SectionOurPastorsContainer,
  SectionTextOurPastors,
} from "./SectionOurPastors.styles";

interface Props {
  imageUrl: string;
  fullName: string;
  description: string;
}

const pastors = data.churchInfo.pastors;

const SectionOurPastors: React.FC<Props> = ({
  imageUrl,
  fullName,
  description,
}: Props) => {
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
