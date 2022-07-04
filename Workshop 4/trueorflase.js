function countTrue(val){
    let frequencyCounter ={}
    val.forEach((i)=>{
        frequencyCounter[i] = (frequencyCounter[i] || 0)+1
    })
    console.log(frequencyCounter[true])


}

countTrue([true,false,true,false,true])