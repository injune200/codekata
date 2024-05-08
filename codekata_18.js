function solution(seoul) {
    let x
    seoul.map((element, index) => {
        if (element == "Kim") {
            x = String("김서방은 " + index + "에 있다.");

        }
    }
    )
    return x
}
console.log(solution(["Jane", "Kim"]))