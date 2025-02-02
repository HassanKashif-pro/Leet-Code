#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    bool isMatch(string s, string p)
    {
        int m = s.size(), n = p.size();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));

        dp[0][0] = true; // Both empty strings match

        // Handling patterns like "a*", "a*b*", which can match empty string
        for (int j = 2; j <= n; j += 2)
        {
            if (p[j - 1] == '*')
            {
                dp[0][j] = dp[0][j - 2];
            }
        }

        // Filling the DP table
        for (int i = 1; i <= m; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                if (p[j - 1] == s[i - 1] || p[j - 1] == '.')
                {
                    dp[i][j] = dp[i - 1][j - 1]; // Match previous character
                }
                else if (p[j - 1] == '*')
                {
                    dp[i][j] = dp[i][j - 2]; // Ignore previous character

                    if (p[j - 2] == s[i - 1] || p[j - 2] == '.')
                    {
                        dp[i][j] = dp[i][j] || dp[i - 1][j]; // Use previous character
                    }
                }
            }
        }

        return dp[m][n];
    }
};

int index()
{
    Solution solution;
    string s = "mississippi";
    string p = "mis*is*p*.";

    cout << (solution.isMatch(s, p) ? "True" : "False") << endl;
    return 0;
}
