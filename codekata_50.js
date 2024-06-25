function solution(players, callings) {
    let currentPlayers = players
    for (let element of callings) {
        let index = currentPlayers.indexOf(element)
        let a = currentPlayers[index]
        currentPlayers[index] = currentPlayers[index - 1]
        currentPlayers[index - 1] = a
    }

    return console.log(currentPlayers)
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])