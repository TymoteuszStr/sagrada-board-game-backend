import randomNr from '../../logic/helpers/randomNr';


test(`random number from min to max}`, () => {
  const nr = expect(randomNr(1, 6))
  nr.toBeGreaterThanOrEqual(1)
  nr.toBeLessThanOrEqual(6)

  const nr1 = expect(randomNr(1.5, 2.5))
  nr1.toBeGreaterThanOrEqual(1)
  nr1.toBeLessThanOrEqual(2)

  expect(randomNr(2, 1)).toStrictEqual(undefined)
})