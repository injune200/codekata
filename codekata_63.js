function solution(want, number, discount) {
    let list = {}
    for (let element in want) {
        list[want[element]] = number[element]
    }

    for (let a = 0; a <= discount.length - 10; a++) {
        let discountList = {}
        for (let element of want) {
            discountList[element] = 0
        }
        for (let b = a; b < a + 10; b++) {
            if (Object.keys(discountList).includes(discount[b])) {
                discountList[discount[b]] += 1
            }

        }

        if (JSON.stringify(list) == JSON.stringify(discountList)) {
            return console.log(a + 1)
        }
    }
    return console.log(0)
}
solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])
solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])