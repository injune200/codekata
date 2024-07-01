function solution(n) {
    let num1 = 0
    let num2 = 1
    for (let a = 2; a <= n; a++) {
        b = num1 + num2
        num1 = num2
        num2 = b
    }
    return console.log(num2)
}
solution(5)
solution(3)