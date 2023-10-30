const removeFromArray = function(myArray, ...arg) {
 const newArray = [];
 myArray.forEach((item) => {
    if (!arg.includes(item)) {
        newArray.push(item) ;
    }
 }); 
 return newArray;
}; 

// Do not edit below this line
module.exports = removeFromArray;
