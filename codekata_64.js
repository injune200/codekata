function solution(priorities, location) {
    let currentMax = Math.max(...priorities)
    let maxCount = priorities.filter(element => currentMax === element).length;
    let count = 0

    while (true) {
        for (let a = 0; a < priorities.length; a++) {
            if (priorities[a] == currentMax) {
                priorities[a] = -1
                currentMax = Math.max(...priorities)
                count++
                if (a == location) {
                    return console.log(count)
                }
            }
        }
    }
}
solution([2, 1, 3, 2], 2)
solution([1, 1, 9, 1, 1, 1], 0)