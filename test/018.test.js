// Source
solution_list = require('../source/018.js')

/* Problem Text
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the
 maximum values of each subarray of length k.

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not
 need to store the results. You can simply print them out as you compute them.
 
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
*/

describe(`Problem 018`, function () {
  describe.each(solution_list)
  ('Solution %#', function ( solution ) {
    describe.each([
      [[10, 5, 2, 7, 8, 7]],
    ])('arr = %p', function ( arr ) {
      test.each([
        [3, [10, 7, 8, 8]],
      ])('for k = %p, expect %p', function ( k, expected ) {
        expect(solution(arr, k)).toEqual(expected)
      })
    })
    describe.each([
      [[1, 2, 3, 4, 3, 5]],
    ])('arr = %p', function ( arr ) {
      test.each([
        [2, [2, 3, 4, 4, 5]],
        [3, [3, 4, 4, 5]],
        [4, [4, 4, 5]],
        [5, [4, 5]],
        [6, [5]],
        [7, []],
      ])('for k = %p, expect %p', function ( k, expected ) {
        expect(solution(arr, k)).toEqual(expected)
      })
    })
  })
})
