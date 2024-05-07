function solution(num) {
    if (num == 1) {
        return 0;
    } else {
        count=0;
        while (num != 1 && count <= 500) {
            if(num%2==0){
                num = num/2;
                count++;
            }
            else{
                num = (num*3)+1;
                count++;
            }
        }
        if(count > 500){
            return -1;
        }
        else{
            return count;
        }
    }

}
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));