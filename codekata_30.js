function solution(t, p) {
    const num=[]
    let count = 0;
    for (let i = 0; i <= t.length-p.length; i++){
        num.push(t.substr(i,p.length))
    }
    num.map(a =>{
        if(Number(a)<=Number(p)){
            count++;
        }
    })
    return console.log(count)
}
solution("3141592","271")
solution("500220839878","7")
solution("10203","15")