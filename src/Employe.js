"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
class Employe {
    constructor(id, nom, animal) {
        this.id = id;
        this.nom = nom;
        this.animal = animal;
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
        console.log(this.animal);
    }
}
exports.Employe = Employe;
