function solution(brown, yellow) {
    let brownNum = []
    let yellowNum = []

    for (let element = 1; element <= brown; element++) {
        if (brown % element == 0) {
            brownNum.push(element)
        }
    }

    for (let element = 1; element <= yellow; element++) {
        if (yellow % element == 0) {
            yellowNum.push(element)
        }
    }
    let yellowArea = []
    for (let element of yellowNum) {
        if (element <= Math.sqrt(yellow)) {
            yellowArea.push([element, yellow / element])
        }
    }

    for (let element of yellowArea) {
        if ((element[1] + 2) * 2 + element[0] * 2 == brown) {
            return console.log([element[1] + 2, element[0] + 2])
        }
    }
}

solution(10, 2)
solution(8, 1)
solution(24, 24)