import React, { useEffect, useState } from "react";
import { Map as ImmutableMap } from "immutable";

import { ImmutablePerson } from "./models";
import { parseFamilyTree, TPersonId } from "./utils";
import { familyTree } from "./data/familyTree";
import FamilyTree from "./components/FamilyTree";

function App() {
  const [personById, setPersonById] = useState(
    ImmutableMap<TPersonId, ImmutablePerson>()
  );

  const [spousePairByChildrenId, setSpousePairByChildrenId] = useState(
    ImmutableMap<string, Array<TPersonId>>()
  );

  useEffect(() => {
    const {
      personById: updatedPersonById,
      spousePairByChildrenId: updatedSpousePairByChildrenId,
    } = parseFamilyTree(familyTree);

    setPersonById(updatedPersonById);
    setSpousePairByChildrenId(updatedSpousePairByChildrenId);
  }, []);

  return (
    <FamilyTree
      personById={personById}
      spousePairByChildrenId={spousePairByChildrenId}
    ></FamilyTree>
  );
}

export default App;
