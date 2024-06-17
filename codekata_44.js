function solution(n, lost, reserve) {
    let count = n - lost.length;
    for (let element of lost) {
        if (reserve.includes(element + 1) || reserve.includes(element - 1)) {
            if (reserve.includes(element + 1)) {
                let index = reserve.indexOf(element + 1)
                reserve = reserve.filter((e) => e !== element + 1);
                count++;
            } else {
                let index = reserve.indexOf(element - 1)
                reserve = reserve.filter((e) => e !== element - 1);
                count++;
            }
        }
    }
    return console.log(count)
}
solution(5, [2, 4], [1, 3, 5])
solution(5, [2, 4], [3])
solution(3, [3], [1])