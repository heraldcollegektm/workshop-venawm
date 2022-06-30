const isPrime = (e)=>{
    let val = 0
    for(i=2;i<=e-1;i++){
        if(e%i==0){
            val = val+1
            break
        }
       
    }
    if(val!=1){
        return true
    }
    else{
        return false
    }

}
console.log(isPrime(7))

// const inRange =(a,b)=>{
//     console.log(a,b)
//     const nums = []
//     for(i=a;i<b;i++){
//     const boolean = isPrime(i)
//     if(boolean==true){
//         nums.push(i)
//     }
//     }
//     console.log(nums)

// }
// inRange(10,15)