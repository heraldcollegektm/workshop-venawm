function oddishOrEvenish(num){
    sumofnum=0;
// for some of all digits we make num as string
num=num.toString();
for(i=0; i<=num.length -1; i++){
// we need to parse all digit in i
    sumofnum += parseInt(i);
}
if (sumofnum % 2 == 0){
    return 'Evenish';
}else{
    return 'Oddish';
}
}
console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))