import { PatternType } from './IPattern';
export function findAdjoiningIds(id: number): number[] {
  const adjoiningId: number[] = []
  const ids = [id + 1, id - 1, id + 5, id - 5]

  ids.forEach((id) => {
    if (id >= 0 && id <= 19) adjoiningId.push(id)
  })

  return adjoiningId
}

export function findAllPossibleIds(pattern: PatternType): number[] {
  let possibleIds: number[] = []

  pattern.forEach((field) => {
    if (field.dice !== undefined) {
      possibleIds.push(...findAdjoiningIds(field.id))
    }
  })

  possibleIds = [... new Set(possibleIds)]
  return possibleIds

}