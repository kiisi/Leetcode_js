/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reverse_num = 0;

    while(x !== 0){
        let dig = x % 10;
        reverse_num = (reverse_num * 10) + dig
        x = parseInt(x / 10)
    }
    if(reverse_num < (-2) ** 31 || reverse_num > 2 ** 31 - 1) return 0
    return reverse_num
};


