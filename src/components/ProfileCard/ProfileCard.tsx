import React from "react";
import { CardLayout } from "./ProfileCard.styles";

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

const ProfileCard = ({ title, name, description, imageUrl }: Props) => {
  return (
    <CardLayout>
      <img src={imageUrl} />
      <div>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardLayout>
  );
};

export default ProfileCard;
