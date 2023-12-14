const fibonacci = function(n) {
    if (n < 0){
        return 'OOPS';
    }
    if (n == 0) {
        return 0;
    }
    
    let firstPrev = 1;
    let secondPrev = 0;
    for(i = 2; i <= n; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    } return firstPrev

};
// 1 1 2 3 5 8 
// Do not edit below this line
module.exports = fibonacci;
