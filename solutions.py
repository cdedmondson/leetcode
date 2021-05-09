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
