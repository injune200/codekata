function solution(fees, records) {
    const baseTime = fees[0];
    const baseCost = fees[1];
    const time = fees[2];
    const cost = fees[3];
    let list = []
    let result = []
    let resultCost = []

    for (const element of records) {
        const a = element.split(" ");
        if (a[2] == 'IN') {
            let b = a[0].split(":");
            let minute = Number(b[0]) * 60 + Number(b[1]);
            list.push({ "name": a[1], "time": minute })

        } else if (a[2] == 'OUT') {
            let bool = false
            let b = a[0].split(":");
            let minute = Number(b[0]) * 60 + Number(b[1]);
            const c = list.filter((element) => element.name == a[1])
            let sumTime = minute - c[0].time
            for (let d = 0; d < result.length; d++) {
                if (result[d].name == a[1]) {
                    result[d].time += sumTime;
                    bool = true;
                    break;
                }
            }
            if (!bool) {
                result.push({ "name": a[1], "time": sumTime })
            }
            for (const idx in list) {
                if (list[idx].name == a[1]) {
                    list.splice(idx, 1);
                    break;
                }
            }
        }
    }
    if (list.length != 0) {
        for (let element of list) {
            let bool = false
            let minute = 23 * 60 + 59 - element.time
            for (let d = 0; d < result.length; d++) {
                if (result[d].name == element.name) {
                    result[d].time += minute;
                    bool = true;
                    break;
                }
            }
            if (!bool) {
                result.push({ "name": element.name, "time": minute })
            }
            for (const idx in list) {
                if (list[idx].name == element.name) {
                    list.splice(idx, 1);
                    break;
                }
            }
        }
    }
    for (let element of result) {
        if (element.time - baseTime < 0) {
            resultCost.push(baseCost)
        } else {
            resultCost.push(Math.ceil((element.time - baseTime) / time) * cost + baseCost)
        }
    }
    return console.log(resultCost)
}

solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"])
solution([1, 461, 1, 10], ["00:00 1234 IN"])