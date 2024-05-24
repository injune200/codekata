function solution(n) {
    const num_3 = n.toString(3).split("").reverse();
    const num = Number(num_3.join(""));
    const num_10 = parseInt(num,3);

    return console.log(num_10);
}
solution(125)
solution(45)