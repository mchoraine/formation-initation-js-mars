/**
 * Voiture
 * @constructor
 * @param {String} marque       Marque de la voiture
 * @param {String} modele       Modèle de la voiture
 * @param {Number} acceleration Puissannce de l'accélération
 * @param {Number} vitesseMax   Vitesse maximun du voiture
 * @param {String} message      Description de la voiture
 */
class Voiture {
  constructor(marque, modele, acceleration, vitesseMax, message){
    this.marque = marque;
    this.modele = modele;
    this.vitesse = 0;
    this.distanceParcourue = 0;
    this.acceleration = acceleration;
    this.vitesseMax = vitesseMax;
    this.messageDemarrage = message;
    this.started = false;
  }

  demarrer() {
    if (!this.started) {
      this.distanceParcourue = 0;
      console.log(this.messageDemarrage);
      this.started = true;
    }
  }

  accelerer() {
    if (!this.started) {
        throw new Error("Impossible d'accélérer veuillez me démarrer avant !");
    }
    if (this.vitesse < this.vitesseMax) {
        this.vitesse += this.acceleration;
        this.vitesse = Math.min(this.vitesse, this.vitesseMax);
    }
  }

  updateDistance() {
    this.distanceParcourue += this.vitesse / 3600;
  }
}


/**
 * Ferrari F355
 * @constructor
 */
class F355 extends Voiture {
    constructor(){
      super('Ferrari', 'F355', 20, 250, 'Je suis une F355, démarrage !');
    }
}


/**
 * Audi A8
 * @constructor
 */
class AR8 extends Voiture {
  constructor(){
    super('Audi', 'R8', 30, 230, 'Audi R8 -> démarrage effectué');
  }
}


/**
 * Peugeot 206
 * @constructor
 */
class P206 extends Voiture {
  constructor(){
    super('Peugeot', '206', 15, 150, 'Je suis une 206 pas trop pressée.');
  }
}


/**
 * Tire au sort une voiture et la retire de la liste des voitures.
 * @return la voiture tirée au sort.
 */
function tirerAuSortVoiture(voitures) {
    const random = Math.floor(Math.random() * voitures.length);
    const choosen = voitures.splice(random, 1)[0];
    return choosen;
}

/**
 * Tire au sort 2 voitures et les retire de la liste des voitures.
 * @return un tableau avec les 2 voitures tirées au sort.
 */
function tirerAuSort2Voitures(voitures) {
    return [tirerAuSortVoiture(voitures), tirerAuSortVoiture(voitures)];
}

/**
 * Retourne le véhicule qui a parcouru 1km.
 * @return véhicule ayant parcouru 1km, null si aucun véhicule n'a parcouru 1km.
 */
function getVoiture1KmDone(voitures) {
    for (let i = 0; i < voitures.length; i++) {
        if (voitures[i].distanceParcourue >= 1) {
            return voitures[i];
        }
    }

    return null;
}

function startCourse(voitures) {
    const voituresPourLaCourse = tirerAuSort2Voitures(voitures);
    // Course
    voituresPourLaCourse[0].demarrer();
    voituresPourLaCourse[1].demarrer();

    updateCourse();

    function updateCourse() {
        for (let i = 0; i < voituresPourLaCourse.length; i++) {
            try {
                let v = voituresPourLaCourse[i];
                v.accelerer();
                v.updateDistance();
                console.log(`${v.marque} ${v.modele} roule a ${v.vitesse} km/h et a parcouru ${v.distanceParcourue.toFixed(2)} km`);
            } catch (e) {
                console.log(e);
                return;
            }
        }
        let vainqueur = getVoiture1KmDone(voituresPourLaCourse);
        if (!vainqueur) {
            setTimeout(updateCourse, 1000);
        } else {
            console.log(`${vainqueur.marque} ${vainqueur.modele} a gagné`);
        }
    }
}

const r8 = new AR8();
const f355 = new F355();
const p206 = new P206();

startCourse([r8, f355, p206]);
