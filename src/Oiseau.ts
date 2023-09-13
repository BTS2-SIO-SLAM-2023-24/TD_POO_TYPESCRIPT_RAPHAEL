import { Animal } from "./Animal";

export class Oiseau extends Animal {
    private couleurPlumes: string;

    constructor(id: number, nom: string, age: number, dated:Date, datef:Date, couleurPlumes: string) {
        super(id, nom, age, dated, datef);
        this.couleurPlumes = couleurPlumes;
    }

    interaction(){
        console.log(this.getNom(),"Chante");
    }
}