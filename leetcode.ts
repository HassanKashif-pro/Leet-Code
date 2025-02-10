function isPalindrome(s: string): boolean {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
}
