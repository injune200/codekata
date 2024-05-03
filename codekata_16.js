function solution(n){
    a= Math.sqrt(n)
    if (a %1 === 0 ){
        return (a+1)**2;
    }
    else{
        return -1;
    }
}
console.log(solution(1024));
console.log(solution(3));