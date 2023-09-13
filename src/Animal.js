"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(id, nom, age, dated, datef) {
        this.AnimalHeureux = false;
        this.id = id;
        this.age = age;
        this.nom = nom;
        this.dated = dated;
        this.datef = datef;
    }
    setAnimalHeureux(animalheureux) {
        this.AnimalHeureux = animalheureux;
    }
    estAnimalHeureux() {
        return this.AnimalHeureux;
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
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getDateD() {
        return this.dated;
    }
    setDateD(dated) {
        this.dated = dated;
    }
    getDateF() {
        return this.datef;
    }
    setDateF(datef) {
        this.datef = datef;
    }
    afficherInfos() {
        console.log("ID :", this.id, "Nom :", this.nom, "Age :", this.age, "Début Prêt :", this.dated, "Fin Prêt :", this.datef);
    }
    interaction() {
        console.log("L'animal interagit de manière générique.");
    }
}
exports.Animal = Animal;
