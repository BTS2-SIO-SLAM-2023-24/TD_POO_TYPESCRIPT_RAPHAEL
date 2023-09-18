"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chien = void 0;
const Animal_1 = require("./Animal");
class Chien extends Animal_1.Animal {
    aboyer() {
        console.log(`${this.getNom()} aboie`);
    }
    interaction() {
        const actions = ["aboie et remue la queue", "fait le beau en sautant joyeusement"];
        const propositionIndex = Math.floor(Math.random() * actions.length); // Génère un indice aléatoire entre 0 et 1 (exclus)
        console.log(this.getNom(), actions[propositionIndex]);
    }
    annoncerbruit() {
        this.aboyer();
    }
}
exports.Chien = Chien;
