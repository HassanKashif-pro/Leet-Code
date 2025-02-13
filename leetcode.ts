function missingNumber(nums: number[]): number {
  let s = nums.length;
  let n = nums.sort((a, b) => a - b);

  for (let i = 0; i < s; i++) {
    if (nums[0] !== 0) {
      return 0;
    }
    if (nums[i + 1] !== nums[i] + 1) {
      return nums[i] + 1;
    }
  }
  return undefined;
}
