const permutation = (permu, rests, output) => {
    if (rests.length == 0) {
        return output.push(permu);
    }
    rests.forEach((v, idx) => {
        const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
        permutation([...permu, v], rest, output);
    })
}

function solution(k, dungeons) {
    let result = [];
    const output = [];
    permutation([], dungeons, output);
    output.forEach((data1) => {
        let count = 0;
        let currentK = k
        data1.forEach((data2) => {
            if (data2[0] <= currentK) {
                count++
                currentK -= data2[1]
            }
        })
        result.push(count)
    })
    return console.log(Math.max(...result))
}

solution(80, [[80, 20], [50, 40], [30, 10]])

