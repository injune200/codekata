function solution(s, n) {
    const arr1 = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    const arr2 = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

    const a = s.split("").map(value =>{
   
        if(value == value.toUpperCase()){
            const index = arr1.indexOf(value)
            if(index+n>=arr1.length){
                return arr1[index+n-arr1.length]
            }
            return arr1[index +n]
        }else{
            const index = arr2.indexOf(value)
            if(index+n>=arr2.length){
                return arr2[index+n-arr2.length]
            }
            return arr2[index +n]
        }
    });
    return console.log(a.join(""))
}

solution("AB",1)
solution("z",1)
solution("aBz",4)