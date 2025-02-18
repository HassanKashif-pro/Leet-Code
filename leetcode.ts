function characterReplacement(s: string, k: number): number {
  let maxLen = 0;
  let left = 0;
  const charCount = new Map<string, number>();
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    charCount.set(currentChar, (charCount.get(currentChar) || 0) + 1);

    maxCount = Math.max(maxCount, charCount.get(currentChar)!);

    if (right - left + 1 - maxCount > k) {
      const leftChar = s[left];
      charCount.set(leftChar, charCount.get(leftChar)! - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
