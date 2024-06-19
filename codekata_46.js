function solution(keymap, targets) {
    let a = [];
    keymap.forEach(element => a.push(element.split("")))
    let answer = [];
    for (let element of targets) {
        const b = element.split("")
        let sum = 0;
        let possi = true;
        for (let c of b) {
            let indexs = []
            for (let d = 0; d < a.length; d++) {
                if (a[d].includes(c)) {
                    indexs.push(a[d].indexOf(c))
                }
            }
            if (indexs.length > 0) {
                sum += Math.min(...indexs) + 1
            } else {
                possi = false;
            }
        }
        if (possi) {
            answer.push(sum)
        } else {
            answer.push(-1)
        }
    }
    return console.log(answer);
}
solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])
solution(["AA"], ["B"])
solution(["AGZ", "BSSS"], ["ASA", "BGZ"])