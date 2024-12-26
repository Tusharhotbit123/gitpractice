//prototypes

const object={
    name:"Nitesh",
    city:"Indore"
}

const object2={
    name:"Tushar",
}

//must avoid this due to performance issues
object2.__proto__=object//assigning object as prototype to object2

// console.log(object2.city)

Function.prototype.mybind=function(){
    console.log("ahdaksjd")
}

function fun(){
    console.log("check")
}

console.log(fun.__proto__.mybind())