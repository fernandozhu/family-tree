import React from "react";
import styled from "styled-components";

import { cBlueColor, cDarkGrayColor, cPinkColor } from "../constants/color";
import { EGender, ImmutablePerson } from "../models";

interface IFamilyMemberCardProps {
  person: ImmutablePerson | undefined;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 150px;
  margin: 4px;
`;

const Icon = styled.i`
  color: ${cDarkGrayColor};
  margin: auto 4px;
`;

const Label = styled.span`
  color: ${cDarkGrayColor};
`;

const FamilyMemberCard: React.FC<IFamilyMemberCardProps> = (
  props: IFamilyMemberCardProps
) => {
  const bgColor =
    props.person?.gender === EGender.Male ? cBlueColor : cPinkColor;
  return (
    <Card style={{ backgroundColor: bgColor }}>
      <Icon className="material-icons">person_pin</Icon>
      <Label>{props.person?.name}</Label>
    </Card>
  );
};

export default FamilyMemberCard;
