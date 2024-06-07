function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let sum = b
    let weekName;
    for (let i = 1; i < a; i++) {
        sum += month[i - 1];
    }
    if (sum % 7 >= 3) {
        weekName = week[sum % 7 - 3]
    } else {
        weekName = week[sum % 7 + 4]
    }

    return console.log(weekName)
}
solution(3, 3)