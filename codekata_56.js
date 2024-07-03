function solution(n, a, b) {
    let element = 1
    while (true) {
        if (2 ** element >= a && 2 ** element >= b) {
            return console.log(element)
        }
        else {
            element++
        }
    }
}
solution(8, 4, 7)