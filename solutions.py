# Reverse String
class Solution:
    def reverseString(self, s: List[str]) -> None:
        odd = False
        """
        Do not return anything, modify s in-place instead.
        """
        # Step 1: Get length of list
        listLength = len(s)
        # Step 2: Check if length is odd
        if(listLength % 2 != 0):
            odd = True
        # Step 3: Set 'j' tp last index of list
        j = listLength - 1
        # Step 4: Find midrange of even length list
        temp = (listLength / 2) - 1
        
        # Step 5: Iterate over list
        for i in range(0, listLength):
            # If odd length list and 'i' is equal to 'j' (i.e. midpoint reached) return list
            if(odd and i == j):
                return s
            # If even length list reaches mid point return list
            elif(i == temp and j == i + 1):
                s[i], s[j] = s[j], s[i]
                return s
            else:
                # Swap first character with last and last character with first
                s[i], s[j] = s[j], s[i]
                j = j - 1

# Contains Duplicate
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        arrayLength = len(nums)
        # Step 1: If array is empty or contains only one value return False
        if(arrayLength == 0 or arrayLength == 1):
            return False
        # Step 2: Create empty dictionary 
        dict = {}
        # Step 3: Add first value to dictionary as 'key' and count as 'value'
        dict[nums[0]] = 1
        # Step 4: Loop through array
        for i in range(1, arrayLength):
            # If value is in dictionary increase count by 1
            if(nums[i] in dict):
                dict[nums[i]] = dict[nums[i]] + 1;
                # If count is >= 2 return True
                if(dict[nums[i]] >= 2):
                    return True
                
            dict[nums[i]] = 1
            
        # Step 5: return False
        return False

# Valid Anagram
class Solution:
    def isAnagram(self, s: str, t: str):

        if len(s) != len(t):
            return False
        
        list1, list2 = [], []
        
        list1[:0] = s
        list2[:0] = t
        
        list1.sort()
        list2.sort()

        if list1 == list2:
            return True
