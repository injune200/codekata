function solution(nums) {
    const list = [];
    const answers = [];
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let k = i + 1; k < nums.length - 1; k++) {
            for (let a = k + 1; a < nums.length; a++) {
                list.push(nums[i] + nums[k] + nums[a])
                console.log(nums[i], nums[k], nums[a])
            }
        }
    }
    for (let element of list) {
        for (let b = 2; b < element; b++) {
            if (element % b == 0) {
                count++
                console.log(element)
                break
            }
        }
    }

    return console.log(list.length - count)
}

solution([1, 2, 3, 4])
solution([1, 2, 7, 6, 4])