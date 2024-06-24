function solution(today, terms, privacies) {
    const today_array = today.split(".").map(Number)
    const terms_array = terms.map(element => element.split(" "))
    const new_terms_array = []
    const privacies_array = privacies.map(element => element.split(" "))
    let result = []
    for (let element of terms_array) {
        new_terms_array[element[0]] = element[1]
    }
    for (let element in privacies_array) {
        const date = privacies_array[element][0].split(".").map(Number)
        const type = privacies_array[element][1]
        date[1] = date[1] + Number(new_terms_array[type])
        if (date[1] > 12) {
            date[1] -= 12
            date[0] = date[0] + 1
        }

        const date_today = new Date(today)
        const date_date = new Date(date[0] + "." + date[1] + "." + date[2])
        if (date_today >= date_date) {
            result.push(Number(element) + 1)
        }
    }

    return console.log(result)
}
solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])