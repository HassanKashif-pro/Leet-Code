#include <iostream>
#include <vector>
#include <algorithm>

class Solution
{
public:
    std::string longestCommonPrefix(std::vector<std::string> &strs)
    {

        std::sort(strs.begin(), strs.end());

        std::string first = strs[0];
        std::string last = strs[strs.size() - 1];

        int i = 0;
        while (i < first.size() && first[i] == last[i])
        {
            i++;
        }

        return first.substr(0, i);
    }
};
