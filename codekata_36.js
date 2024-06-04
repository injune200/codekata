function solution(food) {
    const a = [];
    for (let i = 1; i < food.length ; i++){
        for (let k = 0; k < Math.floor(food[i]/2); k++){
            a.push(i)
        }
    }
    const b = [...a].reverse()
    const c = [...a,0,...b]
    return console.log(c.join(""))
}

solution([1,3,4,6])
solution([1, 7, 1, 2])