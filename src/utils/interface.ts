import { Map as ImmutableMap, List } from "immutable";

import { ImmutablePerson } from "../models";

export type TPersonId = string;
export type TSpouseId = string;

export type TPersonReferenceIds = {
  parentIds: List<string>;
  childIds: List<string>;
};

export type TFamilyTreeLookup = ImmutableMap<TPersonId, TPersonReferenceIds>;

export type TPersonById = ImmutableMap<TPersonId, ImmutablePerson>;

export type TSpousePairByChildrenId = ImmutableMap<string, Array<TPersonId>>;
