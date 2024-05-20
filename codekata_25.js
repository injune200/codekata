function solution(s) {
    const a = s.split("");
    const b = [];
    a.map(k => {b.push(Number(k))});
    const c = b.includes(NaN);
    if(c == true){
        return false;
    }else{
        return true;
    }
}
console.log(solution("a234"))
console.log(solution("1234"))