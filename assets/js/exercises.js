function range(start, end) {
    let arr = [], i;

    for (i = start; i <= end; i++){
        arr.push(i);
    };

    return arr;
};

console.log(range(1, 10));

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
