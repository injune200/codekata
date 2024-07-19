function solution(n, k) {
    console.log(n.toString(k))
    const num = n.toString(k).split(0)
    console.log(num)
    let count = 0
    for (const element of num) {
        let isDecimal = true;
        if (element == 1 || element == "") {
            continue;
        }
        for (let a = 2; a < element; a++) {
            if (element % a == 0) {
                isDecimal = false;
                break;
            }
        }
        if (isDecimal) {
            count++
        }
    }
    return count
}
console.log(solution(437674, 3))
console.log(solution(110011, 10))