class Solution
{
public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
    {
        vector<int> mergedArr = nums1;
        mergedArr.insert(mergedArr.end(), nums2.begin(), nums2.end());

        sort(mergedArr.begin(), mergedArr.end());

        int n = mergedArr.size();
        if (n % 2 != 0)
        {
            return mergedArr[n / 2];
        }
        else
        {
            return (mergedArr[n / 2 - 1] + mergedArr[n / 2]) / 2.0;
        }
    }
};
