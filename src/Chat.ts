import { Animal } from "./Animal";

export class Chat extends Animal{
    private miauler():void{
        console.log(`${this.getNom()} miaule`);
    }
    
    annoncerbruit():void{
        this.miauler();
    }
}