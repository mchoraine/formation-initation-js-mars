

function Person (lastName , firstName) {
  this.lastName = lastName
  this.firstName = firstName
}

Person.prototype.toString = function() {
  return `Hello ${this.lastName} ${this.firstName}`
}


function Enfant (lastName , firstName, classe) {
  Person.call(this, lastName , firstName)
  this.classe = classe
}

Enfant.prototype =  Object.create(Person.prototype)
Enfant.prototype.toString = function() {
  return `Hello ${this.lastName} ${this.firstName}. classe = ${this.classe}`
}

function Adulte (lastName , firstName, permis) {
  Person.call(this, lastName , firstName)
  this.permis = permis
}

Adulte.prototype = Object.create(Person.prototype)
Adulte.prototype.toString = function() {
  return `${Person.prototype.toString.call(this)}. Permis = ${this.permis}`
}


let enfant = new Enfant("Doe", "John", "CP")
console.log(enfant.toString())
let adulte = new Adulte("Doe", "Jeanne", true)
console.log(adulte.toString())
adulte.firstName = "Jeannette"
console.log(adulte.toString())
