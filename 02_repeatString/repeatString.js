
const repeatString = function(word,num) {
   if(num < 3) return 'ERROR';
   let string = '';
   for (let i =0; i < num; i++) {
       string += word;
   }
   return string;
}



repeatString()
// Do not edit below this line
module.exports = repeatString;
