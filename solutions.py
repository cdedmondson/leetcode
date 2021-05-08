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
