function average (arr){
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return console.log(sum/arr.length)
};

average([1,2,3,4]);
average([5,5]);