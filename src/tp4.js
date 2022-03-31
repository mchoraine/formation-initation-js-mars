class Person {
  constructor (lastName , firstName) {
    this.lastName = lastName
    this.firstName = firstName
  }
}

const persons = [
  new Person("Petit", "emanuelle"),
  new Person("Grand", "Jean"),
  new Person("Dupon", "Simon"),
  new Person("Dupon", "Romeo")
]


persons.forEach((person, index) => {
  if (index % 2) {
    console.log(person)
  }
})

persons
  .filter((_, index) => index % 2)
  .forEach((person) => console.log(person))

for (let i = 0; i < persons.length; i += 2) {
  console.log(persons[i])
}
