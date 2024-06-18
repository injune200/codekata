function solution(s) {
    const a = s.split("");
    let x = a[0];
    let xCount = 0;
    let notxCount = 0;
    let b = [];
    let answer = [];
    for (let k in a) {
        if (a[k] == x) {
            xCount += 1
            b.push(a[k])
        } else {
            notxCount += 1
            b.push(a[k])
        }


        if (xCount == notxCount && xCount !== 0) {
            answer.push(b.join(""))
            b = []
            x = a[Number(k) + 1]
            xCount = 0;
            notxCount = 0;
        }

        if (k == a.length - 1 && b.length != 0) {
            answer.push(b.join(""))
        }

    }
    return console.log(answer)
}
solution("banana")
solution("abracadabra")
solution("aaabbaccccabba")