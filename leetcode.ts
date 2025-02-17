function findMin(nums: number[]): number {
  const minValue = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minValue) {
      let rotations = nums[i];
    }
  }
  return minValue;
}
