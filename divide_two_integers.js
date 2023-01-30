/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let dividend_sign = dividend < 0 ? 0 : 1 
    let divisor_sign = divisor < 0 ? 0 : 1 

    let div_sign = dividend_sign ^ divisor_sign
    let sign = div_sign === 0 ? '+' : '-'

    let quotient = 0;
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    if(divisor === 1){
        if(sign === '-'){
            if(dividend < -(Math.pow(2, 31))){
                return -(Math.pow(2, 31))
            }
            return dividend - dividend - dividend
        }else{
            if(dividend > 2 ** 31 - 1){
                return 2 ** 31 - 1
            }
            return dividend
        }
    }

    while (dividend >= divisor){
        dividend -= divisor
        quotient += 1

        let q = quotient
        if(sign === '-'){
            q = q - q - q
        }
        if(q > 2 ** 31 - 1){
            break
        }
        if(q < -(Math.pow(2, 31))){
            break
        }
    }
    if(sign === '-'){
        quotient = quotient - quotient - quotient
    }
    return quotient
};
