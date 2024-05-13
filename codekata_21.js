function solution(arr) {
    arr.sort((a,b) => b-a).pop();
    if(arr.length == 0){
        return [-1]
    }
    else{
        return arr;
    }
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));