function solution(number, limit, power) {
    let num = [];
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let k = 1; k <= i; k++) {
            if (i % k == 0) {
                count++
            }
        }
        num.push(count)
    }

    for (let element of num) {
        if (element <= limit) {
            result += element
        } else {
            result += power
        }
    }

    return console.log(result)
}
solution(5, 3, 2)
solution(10, 3, 2)