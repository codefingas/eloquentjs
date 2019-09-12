function range(start, end) {
    let arr = [], i;

    for (i = start; i <= end; i++){
        arr.push(i);
    };

    return arr;
};

console.log(range(1, 10));