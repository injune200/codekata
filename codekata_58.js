function solution(n) {
    let maxNum2 = Math.floor(n / 2)
    let sum = 0
    let list = []
    for (let element = 0; element <= maxNum2; element++) {
        let maxNum1 = n - 2 * element
        sum += factorial(maxNum1 + element) / factorial(maxNum1) / factorial(element)
    }

    return console.log(sum)
}
function factorial(a) {
    let sum = 1
    for (let element = 1; element <= a; element++) {
        sum *= element
    }
    return sum
}
solution(4)
solution(3)