import React from "react";
import { CardLayout } from "./ProfileCard.styles";

interface Props {
  id:number
  imageUrl: string;
  title: string;
  description: string;
}

const ProfileCard = ({ title, description, imageUrl }: Props) => {
  return (
    <CardLayout>
      <img src={imageUrl} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardLayout>
  );
};

export default ProfileCard;
