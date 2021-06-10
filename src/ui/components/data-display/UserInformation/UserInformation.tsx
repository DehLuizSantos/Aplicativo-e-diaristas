import React from "react";

import {
  UserInformationContainer,
  UserDescription,
  UserName,
  AvatarStyled,
  RatingStyled,
} from "./Userinformation.Style";

interface UserInformationProps {
  picture?: String;
  name: String;
  rating: number;
  description?: String;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled>A</AvatarStyled>
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
      <RatingStyled readOnly value={rating}></RatingStyled>
    </UserInformationContainer>
  );
};

export default UserInformation;
