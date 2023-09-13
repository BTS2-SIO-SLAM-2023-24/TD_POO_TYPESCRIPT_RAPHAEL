import { Animal } from "./Animal";

export class Chien extends Animal{
    private aboyer(): void {
        console.log(`${this.getNom()} aboie`);
    }

    interaction() {
        console.log(this.getNom(),"aboie et remue la queue");
    }
    
    annoncerbruit():void{
        this.aboyer();
    }
}
