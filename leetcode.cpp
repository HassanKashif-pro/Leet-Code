#include <iostream>
#include <vector>
#include <algorithm>

class Solution
{
public:
    int firstMissingPositive(std::vector<int> &nums)
    {
        std::sort(nums.begin(), nums.end()); // Sort the array
        int missing = 1;

        for (int num : nums)
        {
            if (num == missing)
            {
                missing++; // Check next positive integer
            }
        }
        return missing;
    }
};

int index()
{
    Solution sol;
    std::vector<int> nums = {3, 4, -1, 1};
    std::cout << "First missing positive: " << sol.firstMissingPositive(nums) << std::endl;
    return 0;
}
