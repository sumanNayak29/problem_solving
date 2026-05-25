/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    const shuffledArr = []

    for(let i = 0 ; i< n; i++){
        shuffledArr.push(nums[i])
        shuffledArr.push(nums[i+n])
    }

    return shuffledArr
    
};