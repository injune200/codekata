function solution(arr1, arr2) {
    let a = []
    
    arr1.map((value,index) =>{
        let b = []
        for (let i =0 ; i < value.length ; i ++){
        b.push(arr1[index][i] + arr2[index][i]);
    }
    a.push(b)
    })
    return a;
}
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
console.log(solution([[1],[2]],[[3],[4]]))