/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let consucutCounter = 0
    let tempCounter = 0

    for (let i =0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tempCounter++
             if(tempCounter > consucutCounter){
                consucutCounter = tempCounter
            }
        } else {
           
            tempCounter = 0
        }
    }

    return consucutCounter

};