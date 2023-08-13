export {}
let message= "Hello World!"
// console.log(message)

// VARIABLE DECLARATIONS :- LET AND CONST
let num:number= 20
const title="Krishna"
// console.log(num,title)

// VARIABLE TYPES :- BOOLEAN, STRINGS, NUMBERS
let n:number=10
let b:boolean=false
let s:string= "kittu"
let sentence:string=`I am ${s}
Beginner in Typescript`
// console.log(sentence)

// NULL AND UNDEFINED
let nn:null=null;
let uu:undefined=undefined

// ARRAY OF VALUES USING ARRAY TYPES
let list1:number[]=[1,2,3]
let list2:Array<number>=[1,2,3]

// Tuple type for diff type values in array
let person1:[string,number]=['Krishna',10]

// ENUM TYPE
enum color {red=5,green,blue}
let c:color=color.green
// console.log(c)

// ANY type: third party values/ User inputs /random values
let randVal:any=10;
randVal=false
randVal='Krishna' 

// UNKNOWN TYPE(type casting) same as any type
let rand:unknown=10;
// (rand as string).toUpperCase() //Type cast

// TYPE INFERENCE
let x=10

// UNION TYPE
let multitype: number | boolean
multitype=10;
multitype=false

// FUNCTIONS IN TYPESCRIPT
// optional parameter(?) and default parameter(=)
const add= (num1:number,num2:number=5)=>{
    if(num2) return num1+num2
    else return num1
}
// let res:number=add(1,2)
let res:number=add(1)
console.log(res)

// INTERFACE
interface Person{
    fname:string
    lname:string
}
// function fullname(person: {fname:string,lname:string}){
function fullname(person: Person){
    console.log(`${person.fname} ${person.lname}`)
}

let p={
    fname:'Krishna',
    lname:'Prasad'
};
// fullname(p)


// CLASS IN TYPESCRIPT

// ACCESS MODIFIERS : PUBLIC, PRIVATE, PROTECTED.

class Employee{
    empName:string
    constructor(name:string){
        this.empName=name
    }
    greet(){
        console.log(`Welcome ${this.empName}`);
    }
}

let emp1= new Employee('Krishna')
// console.log(emp1.empName)
// emp1.greet()

// INHERITENCE IN TYPESCRIPT

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName)
    }
    delegatework(){
        console.log('Manger delegating task')
    }
}

let m1= new Manager('Kittu')
// console.log(m1.empName)
// m1.greet()
// m1.delegatework()



