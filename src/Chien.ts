import { Animal } from "./Animal";

export class Chien extends Animal{
    private aboyer(): void {
        console.log(`${this.getNom()} aboie`);
    }
    
    annoncerbruit():void{
        this.aboyer();
    }
}
