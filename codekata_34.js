function solution(strings, n) {

    let a = strings.map(element => {
        return element[n]
    })

    for (let index in strings) {
        for (let i = 0; i < strings.length; i++) {
            for (let k = i; k < strings.length; k++) {
                if (strings[i][n] > strings[k][n]) {
                    let b = strings[i]
                    strings[i] = strings[k]
                    strings[k] = b
                } else if (strings[i][n] == strings[k][n]) {
                    if (strings[i] > strings[k]) {
                        let b = strings[i]
                        strings[i] = strings[k]
                        strings[k] = b
                    }
                }
            }
        }
    }
    return console.log(strings);
}

solution(["sun", "bed", "car"], 1)
solution(["abce", "abcd", "cdx"], 2)