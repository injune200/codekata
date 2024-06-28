function solution(s) {
    let result = []
    let list = s.split(" ")
    result.push(Math.min(...list))
    result.push(Math.max(...list))


    return console.log(result.join(" "))
}
solution("1 2 3 4")
solution("-1 -2 -3 -4")
solution("-1 -1")