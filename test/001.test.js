// Source
solution_list = require('../source/001.js')

/* Problem Text
Given a list of numbers and a number K, return whether any two numbers from the list add up to K.

Can you do this in one pass?
*/

describe(`Problem 001`, function () {
  describe.each(solution_list)
  ('Solution %#', function ( solution ) {
    describe.each([
      [[2, 4, 6, 8, 10]],
    ])('arr = %p', function ( arr ) {
      test.each([
        [6, 8, 10, 12, 14],
      ])(`for k = %i, expect true`, function ( k ) {
        expect(solution(arr, k)).toBe(true)
      })
      test.each([
        [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 16],
      ])(`for k = %i, expect false`, function ( k ) {
        expect(solution(arr, k)).toBe(false)
      })
    })
  })
})
