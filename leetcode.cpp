#include <iostream>

class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0)
            return false; // Negative numbers are not palindromes

        int original = x;
        long reversed = 0;

        while (x > 0)
        {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return original == reversed;
    }
};

int index()
{
    Solution solution;
    int num = 121; // Change this to test different numbers
    std::cout << (solution.isPalindrome(num) ? "True" : "False") << std::endl;
    return 0;
}
