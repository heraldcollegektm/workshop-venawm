function addup(num){
    sum = 0;
    for (i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(addup(4))
console.log(addup(13))
console.log(addup(600))