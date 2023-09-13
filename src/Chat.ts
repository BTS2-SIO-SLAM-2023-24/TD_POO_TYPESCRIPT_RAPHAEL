import { Animal } from "./Animal";

export class Chat extends Animal{
    private miauler():void{
        console.log(`${this.getNom()} miaule`);
    }

    interaction() {
        console.log(this.getNom(),"miaule et ronronne.");
    }
    
    annoncerbruit():void{
        this.miauler();
    }
}