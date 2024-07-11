function solution(arr1, arr2) {
    let answer = []
    for (let element1 of arr1) {
        let newArr = []
        for (let a = 0; a < element1.length; a++) {
            let sum = 0
            for (let element2 in arr2) {
                sum += arr2[element2][a] * element1[element2]
            }
            newArr.push(sum)

        }
        answer.push(newArr)
    }
    return console.log(answer)
}
solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])
solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])