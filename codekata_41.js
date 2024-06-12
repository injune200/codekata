function solution(n, m, section) {
    let area = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (section.includes(i + 1)) {
            area.push(false)
        } else {
            area.push(true)
        }
    }

    for (let element = 0; element < area.length; element++) {
        if (area[element] == false) {
            for (let a = 0; a < m; a++) {
                if (element + a > area.length) {
                    break;
                }
                area[element + a] = true
            }
            count++
        }
    }
    return console.log(count)
}

solution(8, 4, [2, 3, 6])
solution(5, 4, [1, 3])
solution(4, 1, [1, 2, 3, 4])