/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0
    nums.forEach((num, index) =>{
        if(num === val){
            nums[index] = undefined
        }else{
            count += 1
        }
    })
    nums.sort((a,b)=> a-b)
    return count
};