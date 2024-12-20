function Person(name,age,height,eyecolor){

  this.name=name;
  this.age=age;
  this.height=height;
  this.eyecolor=eyecolor;

}

const Tushar=new Person("Tushar Sharma",23,"6 ft","black")
const Clone={name:"Clone"}

console.log(Object.keys(Tushar))
console.log(Object.values(Tushar))
console.log(Object.entries(Tushar))
console.log(Object.assign(Clone,Tushar))
console.log(Object.freeze(Tushar))