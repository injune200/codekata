function solution(s) {
    let a = s.split("");
    if(a.length%2 ==0){
        return s.substr(Math.floor(a.length/2)-1,2)
    }else{
        return s.substr(Math.floor(a.length/2),1)
    }
}
console.log(solution("abcde"))
console.log(solution("qwer"))