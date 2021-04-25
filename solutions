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
