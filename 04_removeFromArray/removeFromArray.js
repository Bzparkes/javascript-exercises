const removeFromArray = function(...args) {
<<<<<<< HEAD
    return args.filterg((e) => {
        return e;
    })
    
=======
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
            console.log(newArray);
        }
    });
    return newArray;
>>>>>>> c6519349f0cfdcb9743c4d546655341efbf60d4d
};







// Do not edit below this line
module.exports = removeFromArray;
