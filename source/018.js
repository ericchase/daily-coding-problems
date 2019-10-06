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

let solutions = []

module.exports = solutions

/*
Solution #1

  init array c of length k
  for i in k, store max ( c0..ci, item i ) in c0..ci
  for i = k to length:
  output and clear c[i mod k]
  store max ( c0..k-1, item i ) in c0..k-1
  finally output length mod k
  
  time: O(k*n) => O(n)
  space: O(k)
  
*/

solutions.push(
  function ( arr, k ) {
    if (k > arr.length)
      return []
    
    let ops_arr = 0
    let ops_other = 0
    
    let comparators = new Array(k)
    let output = []
    
    for (let i = 0; i < k; ++i) {
      ops_arr++
      comparators[i] = arr[i]
      for (let j = 0; j < i; ++j) {
        ops_other++
        comparators[j] = Math.max(comparators[j], arr[i])
      }
    }
    
    for (let i = k; i < arr.length; ++i) {
      ops_arr++
      output.push(comparators[i % k])
      comparators[i % k] = arr[i]
      for (let j = i + 1; j < i + k; ++j) {
        ops_other++
        let n = j % k
        comparators[n] = Math.max(comparators[n], arr[i])
      }
    }
    output.push(comparators[arr.length % k])
    
    // console.log('\t\tops:', ops_arr, ops_other, `${(ops_arr + ops_other) / arr.length}n`)
    
    return output
  },
)

/*
Solution #2

  to reduce space complexity even further
  we take the minimum value between k and arr.length - k + 1
  for example, an array of length 6 only has 3 subarrays of length 4
  
  time: O(k*n) => O(n)
  space: O(min(k, arr.length - k + 1))
  
*/

solutions.push(
  function ( arr, k ) {
    if (k > arr.length)
      return []
    
    let ops_arr = 0
    let ops_other = 0
    
    let min_k = Math.min(k, arr.length - k + 1)
    let comparators = new Array(min_k)
    let output = []
    
    for (let i = 0; i < min_k; ++i) {
      ops_arr++
      comparators[i] = arr[i]
      for (let j = 0; j < i; ++j) {
        ops_other++
        comparators[j] = Math.max(comparators[j], arr[i])
      }
    }
    
    for (let i = min_k; i < k; ++i) {
      ops_arr++
      for (let j = i; j < i + min_k; ++j) {
        ops_other++
        let n = j % min_k
        comparators[n] = Math.max(comparators[n], arr[i])
      }
    }
    
    for (let i = k; i < arr.length; ++i) {
      ops_arr++
      output.push(comparators[i % min_k])
      comparators[i % min_k] = arr[i]
      for (let j = i + 1; j < i + min_k; ++j) {
        ops_other++
        let n = j % min_k
        comparators[n] = Math.max(comparators[n], arr[i])
      }
    }
    output.push(comparators[arr.length % min_k])
    
    // console.log('\t\tops:', ops_arr, ops_other, `${(ops_arr + ops_other) / arr.length}n`)
    
    return output
  },
)
