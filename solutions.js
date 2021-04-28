// Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let charactersArray = [];
    let stack = [];
    let top = 0;
    let strLength = s.length;
  
    if(typeof s !== 'string')
        return false

    if(strLength <= 1)
        return false
  
    if(strLength % 2 !== 0)
        return false
     charactersArray = s.split(""); 
    stack.push(charactersArray[0])
    for(let i = 1; i < strLength; i++){
        switch(stack[top] + charactersArray[i]){
            case '()':
                top--;
                stack.pop();
                break;
            case '{}':
                top--;
                stack.pop();
                break;
            case '[]':
                top--;
                stack.pop();
                break;
            default:
                top++;
                stack.push(charactersArray[i]);
        }
    }
    if(stack.length === 0){
        return true
    }else{
        return false
    }
        
};

// Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Step 1: Check if x is an integer
        // If not return false
    if(typeof x !== 'number')
        return false
    // Step 2: If integer length is one
        // return true
    let originalInteger = String(x);
    if(originalInteger.length === 1)
        return true
    // Step 3: Reverse the integer
    let reverseInteger = originalInteger.split("").reverse().join("");
    // Step 4: compare to original
    if(reverseInteger === originalInteger)
        return true
        // If the same return true
        // Else return false
    return false;
};

// Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Step 1: Find last digit in array
    let arrLength = digits.length;
    if(digits[arrLength - 1] === 9 && arrLength === 1)
        {
           return [1,0]; 
        }
    if(digits[arrLength - 1] === 9 && arrLength > 1){
        let i = arrLength - 1;
         while(digits[i] === 9){
             digits[i] = 0;
             --i;
         }
        if(typeof digits[i] !== 'number')
            return [1, ...digits]
        digits[i] = digits[i] + 1;
        return [...digits];
    }
    digits[arrLength - 1] = digits[arrLength - 1] + 1;
    return digits;
};

// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Step 1: Create empty dictionary
    let potentialSums = {};
    // Step 2: Add first num to dictionary as key and index as value
    potentialSums[nums[0]] = 0;
    // Step 3: Create for loop to iterate over every element in array starting at i + 1
    for(let i = 1; i < nums.length; i++){
        // Step 4: If target minus current element is in dictionary 
        // Return current element index and value index
        if(potentialSums.hasOwnProperty(target - nums[i])){
            return [potentialSums[target - nums[i]], i];
        }
        potentialSums[nums[i]] = i;
    }
};
