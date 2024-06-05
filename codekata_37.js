function solution(a, b, n) {
    let currentBottle = n
    let sum = 0;
    while (2 < currentBottle) {
        let newBottle = Math.floor(currentBottle / a) * b
        let emptyBottle = currentBottle % a
        sum += newBottle
        currentBottle = newBottle + emptyBottle
    }
    return console.log(sum)
}

solution(2, 1, 20)
solution(3, 1, 20)