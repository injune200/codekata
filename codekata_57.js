function solution(arr) {
    let num = 1
    while (true) {
        for (let element in arr) {
            if (num % arr[element] == 0) {
                if (element != (arr.length - 1)) {
                    continue
                } else {
                    return console.log(num)
                }

            } else {
                break
            }
        }
        num++
    }
}
solution([2, 6, 8, 14])
solution([1, 2, 3])