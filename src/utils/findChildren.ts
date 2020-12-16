import { ImmutablePerson } from "../models";
import { TPersonById } from "./interface";

/**
 * Find children for a given person
 * @param personById
 * @param person
 */
export function findChildren(
  personById: TPersonById,
  person: ImmutablePerson
): ImmutablePerson[] {
  const childIds = person?.childIds.toArray() || [];

  const children: ImmutablePerson[] = childIds
    .map((childId) => personById.get(childId))
    .filter(
      (person) => person !== null && person !== undefined
    ) as ImmutablePerson[];

  return children;
}
