/*function range(start, end, step) {
    let arr = [], i;

    if (step == undefined) {
        step = 1;
        for (i = start; i <= end; i += step){
            arr.push(i);
        };
    
    } else if (step < 0) {
        for (i = start; i <= end; i += Math.abs(step)){
            arr.shift(i);
        };
    } else if (step > 0) {
        for (i = start; i <= end; i += step){
            arr.push(i);
        };
    }

    return arr;
};

console.log(range(1, 10, 2));
console.log(range(1, 10, -2));

function sum(...array) {
    let sum = 0;

    for(let arr of array){
        sum += arr;
    }

    return sum;
}

console.log(sum(...range(1, 10)));

function add(array) {
    let sum = 0;

   for (let i = 0; i < array.length; i++){
       sum += array[i];
   }

   return sum;
}

console.log(add(range(1, 10)));
*/


/**function for reversing array */
function reverseArray(arr) {//function takes in an array and prints it out reversed
    let reversedArray = [], 
        i = arr.length;

    while(i--){
        reversedArray.push(i);
    }

    return reversedArray;
};
/**end of reversing array function */

/** */