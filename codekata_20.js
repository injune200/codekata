function solution(absolutes, signs) {
    let sum = 0;
    absolutes.map((element,index)=>{
        if(signs[index]==true){
            sum+=element;
        }
        else if(signs[index]==false){
            sum-=element;
        }
    })
    return sum;
}

console.log(solution([4,7,12],[true,false,true]))
console.log(solution([1,2,3],[false,false,true]))