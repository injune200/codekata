function solution(n){
    let num = n.toString().split("");
    let num_reverse = num.reverse();
    let result = num_reverse.map(Number);

    return result
}
console.log(solution(12345));