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
    return super.toString() + ` et est en classe de ${this.clazz}`
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

function personnesMajeures(personnes) {
    return _.filter(personnes, (personne) => { return personne.age >= 18 });
}

function filtrerSurPermis(adultes) {
    return _.filter(adultes, (adulte)=> {
      return adulte.permis;
    });
}

function ajouterUnAn(personnes) {
    return _.map(personnes,
      (personne)=>{
        personne.age +=1;
        return personne;
      });
}

function calculeAnneeNaissance(personne) {
    return moment().subtract(personne.age, 'years').year();
}

function moyenneAgesSelonPrenom(personnes) {
  return _(personnes)
    .filter(function(p) { return p.prenom.length > 4; })
    .map(function(p) { return p.age; })
    .reduce(function(previous, current, i, tableau) {
        return previous + (current / tableau.length);
    }, 0); // reduce est une fonction terminale => pas d'appel à `.value()`
}

// Possibilité de remplacer map+reduce par .meanBy('age')
function moyenneAgesSelonPrenom2(personnes) {
  return _(personnes)
    .filter(function(p) { return p.prenom.length > 4; })
    .meanBy('age');
}

let personnes = [adulte1, adulte2, adulte3, enfant1, enfant2];
console.log('\nPersonnes majeures');
console.log(personnesMajeures(personnes).join('\n'));
console.log('\nPersonnes ayant le permis');
console.log(filtrerSurPermis([adulte1, adulte2, adulte3]).join('\n'));
console.log('\nUn an pour tout le monde');
console.log(ajouterUnAn(personnes).join('\n'));

console.log('\n');
for (let i = 0; i < personnes.length; i++) {
    console.log(`${personnes[i].nom} ${personnes[i].prenom} est né(e) en ${calculeAnneeNaissance(personnes[i])}`);
}

console.log(`\nMoyenne d'âge = ${moyenneAgesSelonPrenom(personnes)}`);

function ajouterUnAnSansEffetDeBord(personnes) {
    return _.map(personnes,
        function (personne) {
            return _.assign(new Personne(), personne, { age: personne.age + 1 });
        }
    );
}

ajouterUnAn(personnes);
console.log(`Moyenne d'âge = ${moyenneAgesSelonPrenom(personnes)}`);
ajouterUnAnSansEffetDeBord(personnes);
console.log(`Moyenne d'âge = ${moyenneAgesSelonPrenom(personnes)}`);
