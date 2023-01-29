/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    if(strs.length === 1) return strs[0]
    
    strs.sort();
    let min = Math.min(strs[0].length, strs.at(-1).length)
    let arr = ""

    for (let i = 0; i < min; i++){
        if(!(strs[0][i] === strs.at(-1)[i])) break;
        arr += strs[0][i]
    }

    return arr
}
