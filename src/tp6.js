class Personne {
  constructor (nom, prenom, age) {
    this.nom = nom
    this.prenom = prenom
    this.age = age
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

const enfant1 = new Enfant('Lapoule', 'Jordan', 6, 'CP');
const enfant2 = new Enfant('Lecoq', 'Vanessa', 12, '6eme');


/**
 * Affiche le nom et le prénom d'une liste de personnes.
 * @param personnes Array contenant des Personne
 */
function afficherIdentitePersonnes(personnes) {
  let superThis = this
  personnes.forEach(function(element) {
    setTimeout(function () {
      try {
        if (element instanceof Enfant) {
          const error = new Error('C\'est un enfant');
          error.nom = element.nom;

          throw error;
        }
        console.log(element.toString());
      } catch (e) {
        console.log(e);
      }

    }, 1000);
  })
}

const personnes = [adulte1, adulte2, adulte3, enfant1, enfant2];

afficherIdentitePersonnes(personnes);
