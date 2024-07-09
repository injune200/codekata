function solution(citations) {
    citations.sort().reverse()
    let count = 0
    for (let element of citations) {
        count = citations.filter(a => element <= a).length;
        if (count == element) {
            break
        }
    }
    console.log(count)
}
solution([3, 0, 6, 1, 5])