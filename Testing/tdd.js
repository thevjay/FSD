const isPalindrome = (x) => {
    if(!x) return null;

    if(typeof x === 'number') {
        x = Math.abs(x).toString();
    }

    if(typeof x !== 'string') return null

    if(x.length > 10 ) return null;

    if(x.length === 1) return true;

    //Aba
    x = x.toLowerCase().trim();
    // abc -> [a,b,c] -> [c,b,a] -> cba
    
    const reverse = x.split("").reverse().join("");
    if(x === reverse) return true;
    else return false;

}

module.exports = isPalindrome;