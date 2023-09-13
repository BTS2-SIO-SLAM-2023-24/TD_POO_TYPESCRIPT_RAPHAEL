import { Animal } from "./Animal";

export class Employe{
    private id: number;
    private nom: string;
    private animal: Animal;

    constructor(id:number, nom:string, animal: Animal){
        this.id = id;
        this.nom = nom;
        this.animal = animal;
    }

    getId():number{
        return this.id
    }

    setId(id:number):void{
        this.id = id
    }

    getNom():string{
        return this.nom
    }

    setNom(nom:string):void{
        this.nom = nom
    }

    getAnimal(){
        return this.animal
    }

    setAnimal(animal:Animal):void{
        this.animal = animal
    }

    travaillerAvec(){
        console.log(this.animal)
    }
}