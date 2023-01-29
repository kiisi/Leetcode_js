/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0
    nums.forEach((num, index) =>{
        if(nums.indexOf(num) !== index){
            nums[index] = undefined
        }else{
            count += 1
        }
    })
    nums.sort((a,b)=> a-b)
    return count
};