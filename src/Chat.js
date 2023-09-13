"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const Animal_1 = require("./Animal");
class Chat extends Animal_1.Animal {
    miauler() {
        console.log(`${this.getNom()} miaule`);
    }
    interaction() {
        console.log(this.getNom(), "miaule et ronronne.");
    }
    annoncerbruit() {
        this.miauler();
    }
}
exports.Chat = Chat;
