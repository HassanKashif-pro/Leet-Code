class Solution
{
public:
    vector<string> letterCombinations(string digits)
    {
        if (digits.empty())
            return {}; // Edge case: empty input

        unordered_map<char, string> phoneMap = {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}};

        vector<string> result;
        string current;
        backtrack(digits, 0, current, result, phoneMap);
        return result;
    }

private:
    void backtrack(const string &digits, int index, string &current, vector<string> &result, unordered_map<char, string> &phoneMap)
    {
        if (index == digits.size())
        {
            result.push_back(current); // Found a valid combination
            return;
        }

        string letters = phoneMap[digits[index]];
        for (char letter : letters)
        {
            current.push_back(letter);                               // Choose a letter
            backtrack(digits, index + 1, current, result, phoneMap); // Explore further
            current.pop_back();                                      // Backtrack (remove last choice)
        }
    }
};
