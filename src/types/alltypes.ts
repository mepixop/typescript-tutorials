//any type
//avoid, javascripts default behaviour
//assigning any allowes javascript to infer the type of the variable based on the value designed.
let firstName: any = "Mark"
firstName = 122
firstName = [3,4,3,5]

//unknown type
//unknown will not let you perform operation until sure what type your deeling with.
function multiByTwo(number:unknown)
{
    if (typeof number == "number")
    {
        return number *2
    }
    return "Rlease provide a valid number"
}

//boolean
//true false

//numer
//floats are numbers, neg. values are numbers, expression that evaluates as number 
let number: number = 100
number = 28,7
number = -300
number = Infinity +1
number = parseInt('12')

//bigint
//need es2020 or newer,  changeable in tsconfig.json
//let bigInt1 = BigInt(34234234)
//let bigInt2 = 123456789n

//type inference
//if remove explisit string defenition removed it will infer
let firstName2: string = "John"
//if defining constant, it will infer type and value
const number2 = 85

//object
//all properties given to Object while defining, has to be given later when defining.
//optional properties can be defined with '?'
let person = 
{
    name: "Mark",
    age: 12
}
let article: {
    author:string 
    content:string
    title:string
    image?:string
};
article = {
    author: 'Stella',
    content: 'Hello',
    title: 'First',
}

//type aliases with tpye keyword
type Article = {
    author:string 
    content:string
    title:string
    image?:string
}

let news : Article = {
    author: "John",
    content: "Very warm",
    title: "Todazs Weather",
}

let post : Article = {
    author: "Mell",
    content: "Letter",
    title: "for you"
}

//union Types
//both types can be created. Also a mixture of it.
//it does have to have all properties of one of the types.
type Dog = {
    name: string
    barks: boolean
    wags: boolean
}

type Cat = {
    name: string
    purrs: boolean
}

type CatDog = Dog|Cat;

let dog : CatDog = {
    name: "Lucky",
    barks: true,
    wags: true,
}

let cat: CatDog ={
    name: "Bella",
    purrs: true,
}

let dogcat: CatDog = {
    name: "Ahhha",
    barks: true,
    wags: false,
    purrs: true,
}
type stringOrNumber = number|string;
function addNumberOrString (a:stringOrNumber,b:stringOrNumber) {
    if (typeof a == "number" && typeof b == "number"){
        return a+b
    }
    else {
        return a.toString() + b.toString()
    }
}

//Intersection Types
//less common, it takes all common properties from types and unique. All properties combined have to be used.
type HypridAnimal = Dog & Cat;

const hypridAnimal: HypridAnimal ={
    name: "Max",
    barks: true,
    purrs: false,
    wags: true,
}