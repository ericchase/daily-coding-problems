/* Problem Text
Given a list of numbers and a number K, return whether any two numbers from the list add up to K.

Can you do this in one pass?
*/

let solutions = []

module.exports = solutions

/*
Solution #1
  Simple hash table (dictionary) the size of K.
  Add each number N to table O(n) while also looking up its complement O(n).
  If the complement exists, search is finished.
  Compute the complement by subtracting N from K.

  Time  O(n) - extremely quick
  Space O(k) where k is the size of the largest number to consider - great potential to waste a ton of space
  One Pass
*/

solutions.push(
  function ( arr, k ) {
    let table = new Array(k)
    
    for (n of arr) {
      let complement = k - n
      if (table[complement] === true)
        return true
      table[n] = true
    }
    
    return false
  },
)

/*
Solution #2
  Simple linear search of complement for each number N.

  Time  O(n**2) - extremely slow (linear)
  Space O(1)    - least amount of required space
  Multiple Passes
*/

solutions.push(
  function ( arr, k ) {
    
    for (i in arr) {
      for (j in arr) {
        if (i !== j) {
          let complement = k - arr[i]
          if (arr[j] === complement)
            return true
        }
      }
    }
    
    return false
  },
)


/*
Solution #3
  Binary Search Tree or Map of unknown size.
  Add each number N to tree O(n) while also looking up its complement O(log2(n)).
  ..
  ..

  Time  O(n*log2(n)) - linearithmic time, decently quick
  Space O(n)       - linear space, only enough as necessary
  One Pass
  Optimal Choice if Logarithmic time is allowed



  Objects are implemented with Hashmaps in Javascript, so there isn't much point
  in writing out this solution. The results would be very similar to solution 1.
*/


/*
Brandon's Solution
*/
solutions.push(
  function ( listOfNumbers, K ) {
    let addendOfK1
    let addendOfK2
    let addUpToK = false
    
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers[i] <= K) {
        
        addendOfK1 = listOfNumbers[i]
        
        for (let j = 0; j < listOfNumbers.length - 1; j++) {
          if (j !== i) {
            if (listOfNumbers[j] <= K) {
              addendOfK2 = listOfNumbers[j]
              
              if (K === addendOfK1 + addendOfK2) {
                addUpToK = true
              }
            }
          }
        }
      }
    }
    return addUpToK
  },
)
