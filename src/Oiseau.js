"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oiseau = void 0;
const Animal_1 = require("./Animal");
class Oiseau extends Animal_1.Animal {
    constructor(id, nom, age, dated, datef, couleurPlumes) {
        super(id, nom, age, dated, datef);
        this.couleurPlumes = couleurPlumes;
    }
    interaction() {
        console.log(this.getNom(), "Chante");
    }
}
exports.Oiseau = Oiseau;
