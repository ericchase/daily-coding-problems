// Source
solution_list = require('../source/035.js')

/* Problem Text
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the
 array so that all the Rs come first, the Gs come second, and the Bs come last. You can only
 swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become
 ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

describe(`Problem 035`, function () {
  describe.each(solution_list)
  ('Solution %#', function ( solution ) {
    test.each([
      [[], []],
      [['R'], ['R']],
      [['G', 'R'], ['R', 'G']],
      [['G', 'B', 'R', 'R', 'B', 'R', 'G'], ['R', 'R', 'R', 'G', 'G', 'B', 'B']],
    ])('for arr = %p, expect %p', function ( arr, expected ) {
      expect(solution(arr)).toEqual(expected)
    })
  })
})
