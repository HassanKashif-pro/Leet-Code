class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int left = 0;
        int right = height.size() - 1;
        int maxArea = 0;

        while (left < right)
        {
            int currentHeight = min(height[left], height[right]);
            maxArea = max(maxArea, (currentHeight * (right - left)));

            if (currentHeight == height[left])
            {
                left++;
            }
            else
            {
                right--;
            }
        }
        return maxArea;
    }
};