import ButtonSecondary from "../ButtonSecondary";
import { CardActivity, ContentContainer } from "./Activity.styles";

interface ActivityProp {
  title: string;
  text: string;
  buttonContent?: string;
  id: number;
  imageUrl: string;
}

const Activity = ({ title, text, buttonContent, id, imageUrl }: ActivityProp) => {
  return (
    <>
      {id % 2 === 0 ? (
        <CardActivity id={id}>
          <ContentContainer>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            {buttonContent && (
              <ButtonSecondary>{buttonContent}</ButtonSecondary>
            )}
          </ContentContainer>
          <img
            src={imageUrl}
          />
        </CardActivity>
      ) : (
        <CardActivity id={id}>
          <img
            src={imageUrl}
          />
          <ContentContainer>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            {buttonContent && (
              <ButtonSecondary>{buttonContent}</ButtonSecondary>
            )}
          </ContentContainer>
        </CardActivity>
      )}
    </>
  );
};
export default Activity;
