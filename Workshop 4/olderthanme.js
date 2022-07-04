class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    compareAge(obj){
        if(this.age-obj.age>0){
            console.log(`${obj.name} is smaller than me`)
        }
        else if(this.age-obj.age<0){
            console.log(`${obj.name} is Older than me`)
        }
        else if(this.age-obj.age==0){
            console.log(`${obj.name} is same as me`)
        }
        
        
    }
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.compareAge(p2)