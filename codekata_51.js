function solution(park, routes) {
    const maxWidth = park[0].split("").length - 1
    const maxHeight = park.length - 1
    let parkPosition = []
    let startPosition = []
    let obstaclePosition = [];
    for (let element of park) {
        parkPosition.push(element.split(""))
    }



    for (let element in parkPosition) { // S 위치 찾기
        index = parkPosition[element].indexOf("S")
        if (index != -1) {
            startPosition.push(Number(element))
            startPosition.push(index)
            break;
        }

    }

    for (let element in parkPosition) { // 장애물 위치 찾기
        for (let a in parkPosition[element]) {
            if (parkPosition[element][a] == "X") {
                obstaclePosition.push([Number(element), Number(a)])
            }
        }

    }

    for (let element of routes) {
        let order = element.split(" ")
        switch (order[0]) {
            case "E":
                sign = 1
                signIndex = 1
                break;
            case "W":
                sign = -1
                signIndex = 1
                break;
            case "N":
                sign = -1
                signIndex = 0
                break;

            case "S":
                sign = 1
                signIndex = 0
                break;
        }
        startPosition[signIndex] += sign * order[1]
        if (startPosition[0] > maxHeight || startPosition[1] > maxWidth) {
            startPosition[signIndex] -= sign * order[1]
            continue;
        }
        let obstaclePositionList = []
        switch (signIndex) {
            case 0:
                for (let a of obstaclePosition) {
                    if (a[1] == startPosition[1]) {
                        obstaclePositionList.push(a)
                    }
                }
                break;
            case 1:
                for (let a of obstaclePosition) {
                    if (a[0] == startPosition[0]) {
                        obstaclePositionList.push(a)
                    }
                }
                break;
        }
        for (let a of obstaclePositionList) {
            if (a[signIndex] <= startPosition[signIndex] && a[signIndex] >= (startPosition[signIndex] - sign * order[1])) {
                startPosition[signIndex] -= sign * order[1]
            }
        }

    }
    return console.log(startPosition)
}


solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])
solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])