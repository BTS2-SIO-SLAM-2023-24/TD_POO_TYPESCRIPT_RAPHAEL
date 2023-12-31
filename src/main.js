"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = require("./Chat");
const Chien_1 = require("./Chien");
const Oiseau_1 = require("./Oiseau");
const Employe_1 = require("./Employe");
const chien1 = new Chien_1.Chien(1, "Buddy", 3, new Date("2023-09-01"), new Date("2023-09-15"));
const chat1 = new Chat_1.Chat(2, "Whiskers", 2, new Date("2023-08-20"), new Date("2023-09-05"));
const oiseau1 = new Oiseau_1.Oiseau(6, "Piou", 5, new Date("2023-08-20"), new Date("2023-09-05"), "Rouge");
const employe1 = new Employe_1.Employe(1, "John", chat1);
const employe2 = new Employe_1.Employe(2, "Alice", chien1);
const employe3 = new Employe_1.Employe(3, "Bob", null);
employe1.travaillerAvec();
console.log(employe3);
employe1.retirerAnimal();
console.log(employe1);
employe1.assignerAnimal(chien1);
console.log(employe1);
chat1.afficherInfos();
oiseau1.interaction();
chien1.interaction();
chat1.interaction();
const listeAnimaux = [chien1, chat1, oiseau1];
console.log("-----Boucle for-----");
for (let i = 0; i < listeAnimaux.length; i++) {
    console.log(listeAnimaux[i].getNom());
}
console.log("-----Boucle while-----");
let n = 0;
while (n < listeAnimaux.length) {
    console.log(listeAnimaux[n].getNom());
    n++; // Incrémentez n après avoir accédé à l'élément
}
console.log("-----Boucle do while-----");
let d = 0;
do {
    console.log(listeAnimaux[d].getNom());
    d++;
} while (d < listeAnimaux.length);
