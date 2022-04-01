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


console.log("\ntoutes les personnes");
for(let i = 0; i < personnes.length; i++) {
  console.log(String(personnes[i]));
}

console.log("\ntoutes les personnes forEach");
personnes.forEach(function(element) {
  console.log(String(element));
});

console.log("\nune personne sur deux par modulo");
personnes.forEach(function(element, index) {
  if (index % 2 === 0) {
    console.log(String(element));
  }
});

console.log("\nune personne sur deux par incrementation");
for(let i = 0; i < personnes.length; i += 2) {
  console.log(String(personnes[i]));
}

