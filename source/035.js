/* Problem Text
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the
 array so that all the Rs come first, the Gs come second, and the Bs come last. You can only
 swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become
 ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

let solutions = []

module.exports = solutions

/*
Solution #1

For each known element, swap each occurrence into the leftmost available position. Next available position is
 determined through 'nap' variable. Increment 'nap' variable after each swap. Start at 0.
*/

solutions.push(
  function ( arr ) {
    if (!Array.isArray(arr))
      return []
    if (arr.length < 2)
      return arr
    
    let swap = ( arr, i, j ) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    
    // next available position
    let nap = 0;
    
    ['R', 'G', 'B'].forEach(ele => {
        for (let i = 0; i < arr.length; ++i) {
          if (arr[i] === ele) {
            swap(arr, i, nap)
            nap++
          }
        }
      },
    )
    
    return arr
  },
)
