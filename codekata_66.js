

function solution(numbers, target) {
    const list = ['a', 'b'];
    const pick = numbers.length;
    const result = [];
    const numResult = []

    function pwr(items) {
        if (items.length === pick) {
            result.push(items.split(""));
            return;
        }

        for (let i = 0; i < list.length; i++) {
            pwr(`${items}${list[i]}`);
        }
    }

    pwr('');

    result.forEach((element1, idx1) => {
        element1.forEach((element2, idx2) => {
            if (element2 == 'a') {
                result[idx1][idx2] = -1
            } else if (element2 == 'b') {
                result[idx1][idx2] = 1
            }
        })
    })

    result.forEach((element, idx) => {
        let sum = 0
        for (let a = 0; a < pick; a++) {
            sum += element[a] * numbers[a]
        }
        numResult.push(sum)
    })
    let count = numResult.filter(element => target === element).length;

    return console.log(count)
}


solution([1, 1, 1, 1, 1], 3)

solution([4, 1, 2, 1], 4)

