// Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphaNumericString = '';
    let alphaNumeric = /^[0-9a-zA-Z]+$/;
    let endPointer;

    if(typeof s !== 'string')
        return false;
  
    let stringLength = s.length;

    for(let i = 0; i < stringLength; i++){
        if(s.charAt(i).match(alphaNumeric))
            alphaNumericString += s.charAt(i).toLowerCase();
    }
    
    if(alphaNumericString.length % 2 === 0)
        alphaNumericString = alphaNumericString.slice(0, alphaNumericString.length / 2) + "|" + alphaNumericString.slice(alphaNumericString.length / 2, alphaNumericString.length);
   
    endPointer = alphaNumericString.length;
    for (i = 0; i < alphaNumericString.length;  i++){
        endPointer--;
        if(alphaNumericString.charAt(i) !== alphaNumericString.charAt(endPointer))
            return false;
        
        if(i === endPointer)
            return true;
        
    }

};

// Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let dict = {};
    let accumulator = 0;
    let stringLength = s.length;
    let uniqueCharacters = 0;
    let noOdds = true;
    
    // If length of string is 1 return 1
    if(stringLength === 1)
        return 1;
    
    // Count all letters that are the same 
    for (let i = 0; i < stringLength; i++){
        // If current letter exists in the hashtable
        // Increase count by one. Else add letter to hashtable with value 1
        if (dict.hasOwnProperty(s.charAt(i))){
            dict[s.charAt(i)] += 1;
        }else{
            dict[s.charAt(i)] = 1;
            }
        }
    
    // Iterate over each key value pair
    for(const key in dict){
        uniqueCharacters++;
        // If letter occurs even number of times
       if(dict[key] % 2 === 0){
           accumulator += dict[key];
           // Else letter occurs odd number of times
       }else{
           // Only count even occurrences
           accumulator += dict[key] - 1;
           noOdds = false;
       }
        
    }
    
    // Example 'cc'
    if (uniqueCharacters === 1 && stringLength % 2 === 0)
        return accumulator;
    
    // If no odd occurrences appear return without incrementing by 1
    if(noOdds)
        return accumulator;
    
    return accumulator + 1;     
};

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
