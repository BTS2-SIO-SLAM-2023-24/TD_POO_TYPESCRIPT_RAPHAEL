import { Chat } from "./Chat";
import { Chien } from "./Chien";
import { Oiseau } from "./Oiseau";
import { Employe } from "./Employe";
import { Animal } from "./Animal";

const chien1 = new Chien(1, "Buddy", 3, new Date("2023-09-01"), new Date("2023-09-15"));
const chat1 = new Chat(2, "Whiskers", 2, new Date("2023-08-20"), new Date("2023-09-05"));
const oiseau1 = new Oiseau(6, "Piou", 5, new Date("2023-08-20"), new Date("2023-09-05"), "Rouge");

const employe1 = new Employe(1, "John", chat1);
const employe2 = new Employe(2, "Alice", chien1);
const employe3 = new Employe(3, "Bob", null);

employe1.travaillerAvec(); 
console.log(employe3); 
employe1.retirerAnimal()
console.log(employe1)
employe1.assignerAnimal(chien1)
console.log(employe1)
chat1.afficherInfos()

oiseau1.interaction()
chien1.interaction()
chat1.interaction()


const listeAnimaux: Animal[] = [chien1, chat1, oiseau1]

console.log("-----Boucle for-----")
for (let i = 0; i<listeAnimaux.length; i++){
    console.log(listeAnimaux[i].getNom())
}

console.log("-----Boucle while-----")
let n = 0
while (n < listeAnimaux.length) {
    console.log(listeAnimaux[n].getNom())
    n++ // Incrémentez n après avoir accédé à l'élément
}

console.log("-----Boucle do while-----")
let d = 0
do {
    console.log(listeAnimaux[d].getNom())
    d++
} while(d < listeAnimaux.length)

