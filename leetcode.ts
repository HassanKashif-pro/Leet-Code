function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
