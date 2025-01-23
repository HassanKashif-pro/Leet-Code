#include <iostream>
#include <string>

class Solution
{
public:
    std::string longestPalindrome(std::string s)
    {
        if (s.empty())
            return "";

        int start = 0, maxLength = 1;
        int n = s.length();

        for (int i = 0; i < n; i++)
        {
            int left = i, right = i;

            // Expand around center for odd-length palindromes
            while (left >= 0 && right < n && s[left] == s[right])
            {
                if (right - left + 1 > maxLength)
                {
                    start = left;
                    maxLength = right - left + 1;
                }
                left--;
                right++;
            }

            // Expand around center for even-length palindromes
            left = i, right = i + 1;
            while (left >= 0 && right < n && s[left] == s[right])
            {
                if (right - left + 1 > maxLength)
                {
                    start = left;
                    maxLength = right - left + 1;
                }
                left--;
                right++;
            }
        }

        return s.substr(start, maxLength);
    }
};

int index()
{
    std::string ret = Solution().longestPalindrome("racecar");
    std::cout << "Longest Palindrome: " << ret << std::endl;
    return 0;
}
