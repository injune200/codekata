function solution(n, left, right) {
    let list = []
    for (let a = 0; a < n; a++) {
        for (let b = 0; b < n; b++) {
            if (b <= a) {
                list.push(a + 1)
            } else {
                list.push(b + 1)
            }

        }
    }
    return console.log(list.slice(left, right + 1))
}
solution(3, 2, 5)
solution(4, 7, 14)