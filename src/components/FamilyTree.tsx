import React from "react";
import styled from "styled-components";

import { ImmutablePerson } from "../models";
import {
  findFamilyRoots,
  TPersonById,
  TSpousePairByChildrenId,
} from "../utils";
import FamilyGroup from "./FamilyGroup";
import FamilyMemberCard from "./FamilyMemberCard";

interface IFamilyTreeProps {
  spousePairByChildrenId: TSpousePairByChildrenId;
  personById: TPersonById;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const AbsoluteCenterDiv = styled.div`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
`;

const FamilyTree: React.FC<IFamilyTreeProps> = (props: IFamilyTreeProps) => {
  const familyRoots: ImmutablePerson[] = findFamilyRoots(
    props.personById,
    props.spousePairByChildrenId
  );

  const firstFamilyRoot = familyRoots[0];

  return (
    <Wrapper>
      <CenterDiv>
        <FamilyMemberCard person={firstFamilyRoot} />;
      </CenterDiv>
      <AbsoluteCenterDiv>
        <FamilyGroup
          person={firstFamilyRoot}
          personById={props.personById}
          spousePairByChildrenId={props.spousePairByChildrenId}
        ></FamilyGroup>
      </AbsoluteCenterDiv>
    </Wrapper>
  );
};

export default FamilyTree;
