/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    for(let i = nums.length; i--;){
        if(nums[i] === val) nums.splice(i, 1)
    }
    return nums.length
};

//Test
let numArray = [0,1,2,2,3,0,4,2]
let value = 2;

console.log(removeElement(numArray, value))