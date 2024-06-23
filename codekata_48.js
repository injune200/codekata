function solution(ingredient) {
    let order = ingredient
    let count = 0
    let a = true
    while (a == true) {
        a = false
        for (let element in order) {
            if (order[element] == 1) {
                console.log("발동1")
                if (order[Number(element) + 1] == 2 && order[Number(element) + 2] == 3 && order[Number(element) + 3] == 1) {
                    console.log("발동")
                    order.splice(element, 4)
                    count++
                    a = true
                    break;
                }
            }
        }
    }

    return console.log(count)

}
solution([2, 1, 1, 2, 3, 1, 2, 3, 1])
solution([1, 3, 2, 1, 2, 1, 3, 1, 2])