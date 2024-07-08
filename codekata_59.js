function solution(elements) {
    const length = elements.length
    let list = []
    let count = 0
    for (let a = 1; a <= length; a++) {
        for (let b = 0; b < length; b++) {
            let sum = 0
            for (let c = 0; c < a; c++) {
                if (b + c < length) {
                    sum += elements[b + c]
                } else {
                    sum += elements[b + c - length]
                }

            }
            list.push(sum)
        }
    }

    return console.log([...new Set(list)].length)
}

solution([7, 9, 1, 1, 4])