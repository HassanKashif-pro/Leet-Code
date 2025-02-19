function minWindow(s: string, t: string): string {
    if (t.length > s.length) return ""; // Edge case

    let l = 0;
    let minStart = 0;
    let minLength = Infinity;
    let charCount = new Map<string, number>();

    // Store frequency of characters in t
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let required = charCount.size; // Number of unique characters required
    let formed = 0;
    let windowCount = new Map<string, number>();

    for (let r = 0; r < s.length; r++) {
        let char = s[r];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        if (charCount.has(char) && windowCount.get(char) === charCount.get(char)) {
            formed++; // One required character fully matched
        }

        // Shrink the window when all characters are present
        while (formed === required) {
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
                minStart = l;
            }

            let leftChar = s[l];
            windowCount.set(leftChar, windowCount.get(leftChar)! - 1);

            if (charCount.has(leftChar) && windowCount.get(leftChar)! < charCount.get(leftChar)!) {
                formed--; // A required character is now missing
            }

            l++; // Move the left pointer
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}