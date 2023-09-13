"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
class Employe {
    constructor(id, nom, animal) {
        this.id = id;
        this.nom = nom;
        this.animal = animal !== null ? animal : null; // Affecte null si 'animal' est null, sinon l'objet 'animal'
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getAnimal() {
        return this.animal;
    }
    setAnimal(animal) {
        this.animal = animal;
    }
    travaillerAvec() {
        if (this.animal !== null) {
            console.log(this.nom, "travaille avec", this.animal.getNom());
        }
        else {
            console.log("Aucun animal associé à cet employé.");
        }
    }
    // Méthode pour assigner un animal à l'employé
    assignerAnimal(animal) {
        this.animal = animal !== null ? animal : null;
    }
    // Méthode pour retirer l'animal de l'employé
    retirerAnimal() {
        this.animal = null;
    }
}
exports.Employe = Employe;
