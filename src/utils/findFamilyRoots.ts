import { ImmutablePerson } from "../models";
import { TPersonById, TPersonId, TSpousePairByChildrenId } from "./interface";

/**
 * Find root members of the family tree
 *
 * Both root family members don't have any parents
 * @param personById
 * @param spousePairByChildrenId
 */
export function findFamilyRoots(
  personById: TPersonById,
  spousePairByChildrenId: TSpousePairByChildrenId
): ImmutablePerson[] {
  const familyRoots: ImmutablePerson[] = [];

  spousePairByChildrenId.forEach((spousePair: TPersonId[]) => {
    let ancestorCount = 0;

    spousePair.forEach((spouseId) => {
      ancestorCount += personById.get(spouseId)?.parentIds.size || 0;
    });

    if (ancestorCount < 1) {
      spousePair.forEach((personId) => {
        const person = personById.get(personId);
        if (person !== null && person !== undefined) {
          familyRoots.push(person);
        }
      });
    }
  });
  return familyRoots;
}
