// Source
solution_list = require('../source/002.js')

/* Problem Text
Given an array of integers, return a new array such that each element at index i of the new array is the product of all
 the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was
 [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

describe(`Problem 002`, function () {
  describe.each(solution_list)
  ('Solution %#', function ( solution ) {
    test.each([
      [[1, 2, 3, 4, 5], [120, 60, 40, 30, 24]],
    ])(`for arr = %p, expect %p`, function ( arr, expected ) {
      expect(solution(arr)).toEqual(expected)
    })
  })
})
