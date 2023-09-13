"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chien = void 0;
const Animal_1 = require("./Animal");
class Chien extends Animal_1.Animal {
    aboyer() {
        console.log(`${this.getNom()} aboie`);
    }
    interaction() {
        console.log(this.getNom(), "aboie et remue la queue");
    }
    annoncerbruit() {
        this.aboyer();
    }
}
exports.Chien = Chien;
