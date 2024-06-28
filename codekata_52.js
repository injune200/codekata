function solution(id_list, report, k) {
    let stop = {}
    let stopReoprtList = {}
    let reportList = [...new Set(report)].map(element => element.split(" "))
    let answer = []

    for (let index in id_list) {
        answer.push(0)
    }

    for (let element of id_list) {
        stop[element] = 0
        stopReoprtList[element] = []
        for (let element2 of reportList) {
            if (element2[0] == element) {
                stopReoprtList[element].push(element2[1])
            }
        }
    }

    for (let element of reportList) {
        stop[element[1]] += 1
    }

    for (let index in id_list) {
        for (let element of stopReoprtList[id_list[index]]) {
            if (stop[element] >= k) {
                answer[index] += 1
            }
        }
    }
    return console.log(answer)
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)