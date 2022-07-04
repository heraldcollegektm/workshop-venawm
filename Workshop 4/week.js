function weeklySalary(arr){
    let sum = 0
    let sum2 = 0
    arr.forEach((e)=>{
        if(e<=8){
            sum = sum+e*10
        }
        else if(e>8){
            sum2 = sum2+8*10+(e-8)*15
            
        }
    })
    return sum+sum2

}


console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]))