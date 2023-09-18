import { Animal } from "./Animal";

export class Chien extends Animal {
    private aboyer(): void {
        console.log(`${this.getNom()} aboie`);
    }

    interaction() {
        const actions = ["aboie et remue la queue", "fait le beau en sautant joyeusement"];
        const propositionIndex = Math.floor(Math.random() * actions.length); // Génère un indice aléatoire entre 0 et 1 (exclus)
        console.log(this.getNom(), actions[propositionIndex]);
    }
    
    annoncerbruit(): void {
        this.aboyer();
    }
}
