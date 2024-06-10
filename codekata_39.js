function solution(answers) {
    const a = [1, 2, 3, 4, 5]
    const b = [2, 1, 2, 3, 2, 4, 2, 5]
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let answerCounts = [0, 0, 0]
    let newIndex
    for (const index in answers) {
        if (index >= a.length) {
            newIndex = index - a.length
        }
        else {
            newIndex = index
        }
        if (a[newIndex] == answers[newIndex]) {
            answerCounts[0] += 1
        }

        if (index >= b.length) {
            newIndex = index - b.length
        }
        else {
            newIndex = index
        }
        if (b[newIndex] == answers[newIndex]) {
            answerCounts[1] += 1
        }

        if (index >= c.length) {
            newIndex = index - c.length
        }
        else {
            newIndex = index
        }
        if (c[newIndex] == answers[newIndex]) {
            answerCounts[2] += 1
        }
    }

    const max = Math.max(...answerCounts)
    const maxIndex = answerCounts.indexOf(max)
    const answer = [maxIndex]
    for (let i = maxIndex + 1; i < 3; i++) {
        if (answerCounts[maxIndex] == answerCounts[i]) {
            answer.push(i)
        }
    }

    return console.log(answer)
}

solution([1, 2, 3, 4, 5])
solution([1, 3, 2, 4, 2])