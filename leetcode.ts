function majorityElement(nums: number[]): number {
  let candidate = nums[0],
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      candidate = nums[i];
      count = 1;
    }
  }

  return candidate;
}
