function solution(arr, divisor) {
    let answer = [];
    arr.forEach(element => {
        if (element % divisor == 0) {
            answer.push(element);
            
        }
    })

    if (answer.length == 0) {
        return [-1];
    }
    else {
        return answer.sort().reverse();
    }
}

console.log(solution([5, 9, 7, 10], 5))
console.log(solution([2, 36, 1, 3], 1))
console.log(solution([3,2,6], 10))