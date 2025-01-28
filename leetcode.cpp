class Solution
{
#include <climits> // For INT_MAX and INT_MIN
public:
    int reverse(int x)
    {
        int rev = 0;
        while (x != 0)
        {
            int digit = x % 10; // Extract the last digit
            x /= 10;            // Remove the last digit

            // Check for overflow before adding the digit
            if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && digit > 7))
            {
                return 0; // Positive overflow
            }
            if (rev < INT_MIN / 10 || (rev == INT_MIN / 10 && digit < -8))
            {
                return 0; // Negative overflow
            }

            rev = rev * 10 + digit; // Append the digit
        }
        return rev;
    }
};