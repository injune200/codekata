function solution(lottos, win_nums) {
    let count = 0;
    let ranking = [6, 6, 5, 4, 3, 2, 1]
    for (let element of lottos) {
        if (win_nums.includes(element)) {
            count++
        }
    }
    let count0 = lottos.filter(element => element == 0).length;



    return console.log(ranking[count + count0], ranking[count]);
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])