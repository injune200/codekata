function solution(x,n){
    let answer =[];
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += x;
        answer.push(sum);
    }
    return answer;
}
console.log(solution(2,5));
console.log(solution(4,3));
console.log(solution(-4,2));