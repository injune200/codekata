function solution(s) {
    const a = s.split("")
    const b = {}
    const answer = [];
    a.map((value, index) => {
        if (value in b) {
            answer.push(index - b[value])
            b[value] = index;
        } else {
            answer.push(-1)
            b[value] = index;
        }
    })
    return console.log(answer);
}

solution("banana")
solution("foobar")