function solution(s, skip, index) {
    let answerList = [];
    let a = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
    const sList = s.split("")
    const skipList = skip.split("")

    for (let b of skipList) {
        a = a.filter((element) => element !== b)
    }

    for (let c of sList) {
        let num = a.findIndex(e => e === c)
        num += index
        if (num >= a.length) {
            num -= a.length
        }
        answerList.push(a[num])
    }

    let answer = answerList.join("")

    return console.log(answer)
}
solution("aukks", "wbqd", 5)