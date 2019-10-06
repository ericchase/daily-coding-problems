let solutions = []

module.exports = solutions

/*
 * Recursive Divide
 * 10
 * 5     5
 * 3   2 3   2
 * 2 1 2 2 1 2
 * 3   2 3   2
 * 5     5
 * 10
 *
 * Iterative Divide
 * 10
 * 2 2 2 2 2
 * 4   4   2
 * 8       2
 * 10
 */

function merge_two_sorted_arrays( a_array, a_start, a_size, b_array, b_start, b_size, out_array, out_start, out_size ) {
  while (a_start < a_size && b_start < b_size && out_start < out_size) {
    if (a_array[a_start] < b_array[b_start])
      out_array[out_start++] = a_array[a_start++]
    else
      out_array[out_start++] = b_array[b_start++]
  }
  while (a_start < a_size && out_start < out_size)
    out_array[out_start++] = a_array[a_start++]
  while (b_start < b_size && out_start < out_size)
    out_array[out_start++] = b_array[b_start++]
  return out_array
}

function merge_sort_i( arr ) {
  for (let split_size = 1; split_size < arr.length; split_size = split_size * 2) {
    for (let n = 0; n < arr.length; n = n + split_size * 2) {
      let a_start = n
      let a_size = a_start + split_size
      let b_start = n + split_size
      let b_size = Math.min(b_start + split_size, arr.length)
      arr = merge_two_sorted_arrays(arr, a_start, a_size, arr, b_start, b_size, [...arr], n, arr.length)
    }
  }
  return arr
}

solutions.push(merge_sort_i)
