import { ImmutablePerson } from "../models";
import { TPersonById, TSpousePairByChildrenId } from "./interface";

/**
 *  Find spouse for a given person
 * @param personById
 * @param spousePairByChildrenId
 * @param person
 */
export function findSpouse(
  personById: TPersonById,
  spousePairByChildrenId: TSpousePairByChildrenId,
  person: ImmutablePerson
): ImmutablePerson | undefined {
  const childrenId = person?.compositeChildrenId;

  if (childrenId !== null && childrenId !== undefined && childrenId !== "") {
    const spouseId = spousePairByChildrenId
      .get(childrenId)
      ?.find((id) => id !== person.id);

    if (spouseId !== null && spouseId !== undefined && spouseId !== "") {
      const spouse = personById.get(spouseId);
      return spouse;
    }
  }
}
