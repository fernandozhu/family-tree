import { Map as ImmutableMap } from "immutable";

import { ImmutablePerson } from "../models";
import { TPersonById, TSpousePairByChildrenId } from "./interface";

/**
 * Parse raw json data and index persons based on their ids. This function also constructs
 * spouse pair based composited children id.
 *
 * Main purpose of the maps is to provide quick access of person object without looping
 * through the complete data set
 * @param json
 */
export function parseFamilyTree(
  json: any[]
): {
  personById: TPersonById;
  spousePairByChildrenId: TSpousePairByChildrenId;
} {
  const personByIdCollection: { [personId: string]: ImmutablePerson } = {};

  const spousePairCollection: {
    [compositeChildrenId: string]: string[];
  } = {};

  for (const personJson of json) {
    const person = new ImmutablePerson(personJson);

    if (person.compositeChildrenId in spousePairCollection) {
      spousePairCollection[person.compositeChildrenId].push(person.id);
    } else {
      spousePairCollection[person.compositeChildrenId] = [person.id];
    }
    // Collect person by id and store in a JS object
    personByIdCollection[person.id] = person;
  }

  // Convert person by id json to immutable map
  const personById: TPersonById = ImmutableMap(personByIdCollection);

  const spousePairByChildrenId: TSpousePairByChildrenId = ImmutableMap(
    spousePairCollection
  );

  return {
    personById,
    spousePairByChildrenId,
  };
}
