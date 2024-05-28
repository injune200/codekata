function solution(sizes) {
    const b =[0,0];
   sizes.map(a => {
        a.sort(function (a, b) {
            return b - a;
        })
        if(a[0]>b[0]){
            b[0] = a[0]
        }
        if(a[1]>b[1]){
            b[1] = a[1]
        }
    })
    return console.log(b[0]*b[1])
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])