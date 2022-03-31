

class Person {
  constructor (lastName , firstName) {
    this.lastName = lastName
    this.firstName = firstName
  }

  toString() {
    console.log(`Hello ${this.lastName} ${this.firstName}`)
  }
}

class Enfant extends Person {
  constructor (lastName , firstName, classe) {
    super(lastName, firstName)
    this.classe = classe
  }

  toString() {
    console.log(`Hello ${this.lastName} ${this.firstName}. classe = ${this.classe}`)
  }
}

class Adulte extends Person {
  constructor (lastName , firstName, permis) {
    super(lastName, firstName)
    this.permis = permis
  }

  toString() {
    console.log(`Hello ${this.lastName} ${this.firstName}. Permis = ${this.permis}`)
  }
}

let enfant = new Enfant("Doe", "John", "CP")
enfant.toString()
let adulte = new Adulte("Doe", "Jeanne", true)
adulte.toString()
adulte.firstName = "Jeannette"
adulte.toString()
