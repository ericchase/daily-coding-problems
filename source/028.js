/* Problem Text
Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings
 which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between
 each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as
  equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and
 k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
 "fox  jumps  over", # 2 extra spaces distributed evenly
 "the   lazy   dog"] # 4 extra spaces distributed evenly
*/

let solutions = []

module.exports = solutions

/*
Solution 1

Take words from arr and push into new line while counting total length. If next word's length + total length is greater
 than k, then justify the line and push a new empty string.
*/

solutions.push(
  function ( arr, k ) {
    
    let combine_and_justify = ( words, sum_length_of_words, line_length ) => {
      let spaces = Math.floor((line_length - sum_length_of_words) / (words.length - 1))
      let remainder = (line_length - sum_length_of_words) % (words.length - 1)
      words[0] += Array(remainder).fill(' ').join('')
      return words.join(Array(spaces).fill(' ').join(''))
    }
    
    let out = []
    
    let line = []
    let total_length = 0
    
    for (let word of arr) {
      if (total_length + word.length + line.length > k) {
        out.push(combine_and_justify(line, total_length, k))
        line = []
        total_length = 0
      }
      line.push(word)
      total_length += word.length
    }
    out.push(combine_and_justify(line, total_length, k))
    
    return out
  },
)
