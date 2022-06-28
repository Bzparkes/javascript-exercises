const sumAll = function(...args) {
    const array = [];
    let sum = args;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
        
    }
    console.log(sum)
    return sum;
};

sumAll();

// Do not edit below this line
module.exports = sumAll;
