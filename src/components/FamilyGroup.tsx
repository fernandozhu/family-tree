import React from "react";
import styled from "styled-components";

import { ImmutablePerson } from "../models";
import {
  findChildren,
  findSpouse,
  TPersonById,
  TSpousePairByChildrenId,
} from "../utils";
import FamilyMemberCard from "./FamilyMemberCard";

const Group = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const Spouse = styled.div`
  display: flex;
  justify-content: center;
`;

const Children = styled.div`
  display: flex;
`;

const CenterDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const NextFamilyGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 5px;
`;

interface IFamilyGroup {
  person: ImmutablePerson;
  personById: TPersonById;
  spousePairByChildrenId: TSpousePairByChildrenId;
}

export const FamilyGroup: React.FC<IFamilyGroup> = (props: IFamilyGroup) => {
  const person = props.person;
  const spouse = findSpouse(
    props.personById,
    props.spousePairByChildrenId,
    person
  );

  const children = findChildren(props.personById, person);

  return (
    <Group>
      <Spouse>{spouse && <FamilyMemberCard person={spouse} />}</Spouse>
      <Children>
        {children &&
          children.map((child, i) => (
            <NextFamilyGroupWrapper key={i}>
              <CenterDiv>
                <FamilyMemberCard person={child} />
              </CenterDiv>
              <FamilyGroup
                person={child}
                personById={props.personById}
                spousePairByChildrenId={props.spousePairByChildrenId}
              />
            </NextFamilyGroupWrapper>
          ))}
      </Children>
    </Group>
  );
};

export default FamilyGroup;
