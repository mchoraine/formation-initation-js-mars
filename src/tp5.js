class Personne {
  constructor (nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  toString() {
    return `${this.nom} ${this.prenom} ${this.age} ans`;
  }
}

class Enfant extends Personne {
  constructor (nom, prenom, age, classe){
    super(nom, prenom, age);
    this.classe = classe;
  }
  toString() {
    return super.toString() + ` et est en classe de ${this.classe}`
  }
}

class Adulte extends Personne {
  constructor (nom, prenom, age, permis){
    super(nom, prenom, age);
    this.permis = permis;
  }
  toString() {
    return super.toString() + ` et a le permis ${this.permis? 'oui' : 'non'}`
  }
}


const adulte1 = new Adulte('Doe', 'John', 30, true);
const adulte2 = new Adulte('Dupont', 'Roger', 35, false);
const adulte3 = new Adulte('Martin', 'Marie', 32, true);

const enfant1 = new Enfant('Lecoq', 'Jordan', 6, 'CP');
const enfant2 = new Enfant('Lecoq', 'Vanessa', 12, '6eme');


/**
 * Affiche le nom et le prénom d'une liste de personnes.
 * @param personnes Array contenant des Personne
 */

// Premier cas qui affiche 5 fois la même personne
function afficherIdentitePersonnes(personnes) {
  for (var i = 0; i < personnes.length; i++) {
    setTimeout(function() {
      console.log('afficherIdentitePersonnes', String(personnes[i]), i);
    }, 1000);
  }
}

function afficherIdentitePersonnesIife(personnes) {
  for (var i = 0; i < personnes.length; i++) {
    (function (x) {
      setTimeout(function () {
        console.log('afficherIdentitePersonnesIife', String(personnes[x]), x);
      }, 2000);
    })(i);
  }
}

function afficherIdentitePersonnesForEach(personnes) {
  personnes.forEach(function(element, index) {
    setTimeout(function () {
      console.log('afficherIdentitePersonnesForEach', String(element), index);
    }, 3000);
  });
}

function afficherIdentitePersonnesLet(personnes) {
  for (var i = 0; i < personnes.length; i++) {
    let elem = personnes[i];
    setTimeout(function () {
      console.log('afficherIdentitePersonnesLet', String(elem), i);
    }, 4000);
  }
}

let delegatedFunction = (index, tab) => {
  console.log('afficherIdentitePersonnesDelegatedFunction', String(tab[index]), index);
}

function afficherIdentitePersonnesDelegatedFunction(personnes) {
  for (var i = 0; i < personnes.length; i++) {
    setTimeout(delegatedFunction(i, personnes), 5000);
  }
}

var personnes = [adulte1, adulte2, adulte3, enfant1, enfant2];

afficherIdentitePersonnes(personnes);
afficherIdentitePersonnesIife(personnes);
afficherIdentitePersonnesForEach(personnes);
afficherIdentitePersonnesLet(personnes);
afficherIdentitePersonnesDelegatedFunction(personnes);
