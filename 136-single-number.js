// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
 
// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/* 
XOR Rules in simple terms:
1. It returns zero if we take XOR of two same numbers.
2. It returns the same number if we XOR with zero.
*/

// for loop XOR solution

function singleNumber(nums) {
  // check for valid input
  if (nums.length < 1) return 0;
	// initialize variable
  let num = 0;
	
	// iterate through the nums array and XOR all the numbers in the input, 
	// As stated in the rule above, duplicate numbers will zero out each other and we will be left with the single number.
    for (let i = 0; i < nums.length; i++) {
        num ^= nums[i];
    }

    return num;
}

console.log(singleNumber([2,2,1]), 1);
console.log(singleNumber([4,1,2,1,2]), 4);
console.log(singleNumber([1]), 1);

// for...of loop XOR solution

function singleNumber(nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}

// reduce XOR solution

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}